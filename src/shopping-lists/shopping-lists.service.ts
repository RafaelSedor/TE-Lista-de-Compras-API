import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { User } from '../users/user.entity';
import { ShoppingList } from './shopping-list.entity';

@Injectable()
export class ShoppingListsService {
    constructor(
        @InjectRepository(ShoppingList)
        private readonly shoppingListRepository: Repository<ShoppingList>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(userId: number, createShoppingListDto: CreateShoppingListDto) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');

        const shoppingList = this.shoppingListRepository.create({
            ...createShoppingListDto,
            user,
        });
        return this.shoppingListRepository.save(shoppingList);
    }

    async findAll(userId: number) {
        return this.shoppingListRepository.find({
            where: { user: { id: userId } },
            relations: ['user'],
        });
    }

    async findOne(userId: number, id: number) {
        const shoppingList = await this.shoppingListRepository.findOne({
            where: { id, user: { id: userId } },
            relations: ['user'],
        });
        if (!shoppingList) throw new NotFoundException('Shopping List not found');
        return shoppingList;
    }

    async update(userId: number, id: number, createShoppingListDto: CreateShoppingListDto) {
        const shoppingList = await this.findOne(userId, id);
        Object.assign(shoppingList, createShoppingListDto);
        return this.shoppingListRepository.save(shoppingList);
    }

    async delete(userId: number, id: number) {
        const shoppingList = await this.findOne(userId, id);
        return this.shoppingListRepository.remove(shoppingList);
    }
}

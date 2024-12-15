import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { ShoppingList } from '../shopping-lists/shopping-list.entity';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
        @InjectRepository(ShoppingList)
        private readonly shoppingListRepository: Repository<ShoppingList>,
    ) { }

    async create(userId: number, createItemDto: CreateItemDto) {
        const shoppingList = await this.shoppingListRepository.findOne({
            where: { id: createItemDto.shoppingListId, user: { id: userId } },
        });

        if (!shoppingList) throw new NotFoundException('Shopping List not found');

        const item = this.itemRepository.create({
            ...createItemDto,
            shoppingList,
        });
        return this.itemRepository.save(item);
    }

    async findAll(userId: number, shoppingListId: number) {
        return this.itemRepository.find({
            where: { shoppingList: { id: shoppingListId, user: { id: userId } } },
        });
    }

    async update(userId: number, id: number, createItemDto: CreateItemDto) {
        const item = await this.findOne(userId, id);
        Object.assign(item, createItemDto);
        return this.itemRepository.save(item);
    }

    async delete(userId: number, id: number) {
        const item = await this.findOne(userId, id);
        return this.itemRepository.remove(item);
    }

    private async findOne(userId: number, id: number) {
        const item = await this.itemRepository.findOne({
            where: { id, shoppingList: { user: { id: userId } } },
        });
        if (!item) throw new NotFoundException('Item not found');
        return item;
    }
}

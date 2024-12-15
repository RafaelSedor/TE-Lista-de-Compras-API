import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Item } from 'src/items/item.entity';


@Entity('shopping_lists')
export class ShoppingList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, (user) => user.shoppingLists, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(() => Item, (item) => item.shoppingList, { cascade: true })
    items: Item[];
}

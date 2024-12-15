import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ShoppingList } from '../shopping-lists/shopping-list.entity';

@Entity('items')
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.items, { onDelete: 'CASCADE' })
    shoppingList: ShoppingList;
}

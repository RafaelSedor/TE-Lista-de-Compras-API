import { ShoppingList } from 'src/shopping-lists/shopping-list.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
    shoppingLists: ShoppingList[];
}

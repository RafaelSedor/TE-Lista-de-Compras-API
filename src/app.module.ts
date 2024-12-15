import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'R@f@el123',
      database: 'shopping_list',
      autoLoadEntities: true, 
      synchronize: false,
      migrations: ['dist/migrations/*.js'],
    }),
    UsersModule,
    AuthModule,
    ShoppingListsModule,
    ItemsModule,
  ],
})
export class AppModule {}

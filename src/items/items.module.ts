import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingList } from '../shopping-lists/shopping-list.entity';
import { Item } from './item.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ShoppingList]), AuthModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule { }

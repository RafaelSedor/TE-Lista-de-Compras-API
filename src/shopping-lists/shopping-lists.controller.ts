import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
    Request,
} from '@nestjs/common';
import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { JwtGuard } from '../auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('shopping-lists')
export class ShoppingListsController {
    constructor(private readonly shoppingListsService: ShoppingListsService) { }

    @Post()
    create(@Body() createShoppingListDto: CreateShoppingListDto, @Request() req) {
        return this.shoppingListsService.create(req.user.userId, createShoppingListDto);
    }

    @Get()
    findAll(@Request() req) {
        return this.shoppingListsService.findAll(req.user.userId);
    }

    @Get(':id')
    findOne(@Param('id') id: number, @Request() req) {
        return this.shoppingListsService.findOne(req.user.userId, id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createShoppingListDto: CreateShoppingListDto, @Request() req) {
        return this.shoppingListsService.update(req.user.userId, id, createShoppingListDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number, @Request() req) {
        return this.shoppingListsService.delete(req.user.userId, id);
    }
}

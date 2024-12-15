import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
    Request,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { JwtGuard } from '../auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post()
    create(@Body() createItemDto: CreateItemDto, @Request() req) {
        return this.itemsService.create(req.user.userId, createItemDto);
    }

    @Get(':shoppingListId')
    findAll(@Param('shoppingListId') shoppingListId: number, @Request() req) {
        return this.itemsService.findAll(req.user.userId, shoppingListId);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createItemDto: CreateItemDto, @Request() req) {
        return this.itemsService.update(req.user.userId, id, createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number, @Request() req) {
        return this.itemsService.delete(req.user.userId, id);
    }
}

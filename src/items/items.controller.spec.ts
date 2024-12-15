import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { JwtGuard } from '../auth/jwt.guard';

describe('ItemsController', () => {
    let controller: ItemsController;
    let service: jest.Mocked<ItemsService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ItemsController],
            providers: [
                {
                    provide: ItemsService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        update: jest.fn(),
                        delete: jest.fn(),
                    },
                },
            ],
        })
            .overrideGuard(JwtGuard)
            .useValue({
                canActivate: jest.fn().mockReturnValue(true),
            })
            .compile();

        controller = module.get<ItemsController>(ItemsController);
        service = module.get<ItemsService>(ItemsService) as jest.Mocked<ItemsService>;
    });

    describe('create', () => {
        it('should create an item', async () => {
            const req = { user: { userId: 1 } };
            const createItemDto = { name: 'Milk', shoppingListId: 1, quantity: 2 };
            const item = {
                id: 1,
                name: 'Milk',
                shoppingListId: 1,
                quantity: 2,
                isPurchased: false,
                shoppingList: {
                    id: 1,
                    name: 'Groceries',
                    items: [],
                    user: { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', shoppingLists: [] },
                },
            };

            service.create.mockResolvedValue(item);

            const result = await controller.create(createItemDto, req);

            expect(service.create).toHaveBeenCalledWith(req.user.userId, createItemDto);
            expect(result).toEqual(item);
        });
    });

    describe('findAll', () => {
        it('should return all items for a shopping list', async () => {
            const req = { user: { userId: 1 } };
            const shoppingListId = 1;
            const items = [
                {
                    id: 1,
                    name: 'Milk',
                    shoppingListId,
                    quantity: 2,
                    isPurchased: false,
                    shoppingList: {
                        id: shoppingListId,
                        name: 'Groceries',
                        items: [],
                        user: { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', shoppingLists: [] },
                    },
                },
            ];

            service.findAll.mockResolvedValue(items);

            const result = await controller.findAll(shoppingListId, req);

            expect(service.findAll).toHaveBeenCalledWith(req.user.userId, shoppingListId);
            expect(result).toEqual(items);
        });
    });

    describe('update', () => {
        it('should update an item', async () => {
            const req = { user: { userId: 1 } };
            const id = 1;
            const createItemDto = { name: 'Eggs', shoppingListId: 1, quantity: 12 };
            const updatedItem = {
                id,
                name: 'Eggs',
                shoppingListId: 1,
                quantity: 12,
                isPurchased: true,
                shoppingList: {
                    id: 1,
                    name: 'Groceries',
                    items: [],
                    user: { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', shoppingLists: [] },
                },
            };

            service.update.mockResolvedValue(updatedItem);

            const result = await controller.update(id, createItemDto, req);

            expect(service.update).toHaveBeenCalledWith(req.user.userId, id, createItemDto);
            expect(result).toEqual(updatedItem);
        });
    });

    describe('delete', () => {
        it('should delete an item', async () => {
            const req = { user: { userId: 1 } };
            const id = 1;

            service.delete.mockResolvedValue(undefined);

            const result = await controller.delete(id, req);

            expect(service.delete).toHaveBeenCalledWith(req.user.userId, id);
            expect(result).toBeUndefined();
        });
    });
});

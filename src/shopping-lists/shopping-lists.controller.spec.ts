import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListsController } from './shopping-lists.controller';
import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { JwtGuard } from '../auth/jwt.guard';

describe('ShoppingListsController', () => {
    let controller: ShoppingListsController;
    let service: jest.Mocked<ShoppingListsService>;

    beforeEach(async () => {
        const mockShoppingListsService = {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [ShoppingListsController],
            providers: [
                {
                    provide: ShoppingListsService,
                    useValue: mockShoppingListsService,
                },
            ],
        })
            .overrideGuard(JwtGuard)
            .useValue({ canActivate: jest.fn().mockReturnValue(true) })
            .compile();

        controller = module.get<ShoppingListsController>(ShoppingListsController);
        service = module.get(ShoppingListsService) as jest.Mocked<ShoppingListsService>;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a shopping list', async () => {
            const userId = 1;
            const req = { user: { userId } };
            const createShoppingListDto: CreateShoppingListDto = { name: 'Groceries' };
            const shoppingList = {
                id: 1,
                name: 'Groceries',
                user: { id: userId, name: 'John Doe', email: 'john@example.com', password: '123456', shoppingLists: [] },
                items: [],
            };

            service.create.mockResolvedValue(shoppingList);

            const result = await controller.create(createShoppingListDto, req);

            expect(service.create).toHaveBeenCalledWith(userId, createShoppingListDto);
            expect(result).toEqual(shoppingList);
        });
    });

    describe('findAll', () => {
        it('should return all shopping lists', async () => {
            const userId = 1;
            const req = { user: { userId } };
            const shoppingLists = [
                {
                    id: 1,
                    name: 'Groceries',
                    user: { id: userId, name: 'John Doe', email: 'john@example.com', password: '123456', shoppingLists: [] },
                    items: [],
                },
                {
                    id: 2,
                    name: 'Office Supplies',
                    user: { id: userId, name: 'John Doe', email: 'john@example.com', password: '123456', shoppingLists: [] },
                    items: [],
                },
            ];

            service.findAll.mockResolvedValue(shoppingLists);

            const result = await controller.findAll(req);

            expect(service.findAll).toHaveBeenCalledWith(userId);
            expect(result).toEqual(shoppingLists);
        });
    });

    describe('findOne', () => {
        it('should return a single shopping list', async () => {
            const userId = 1;
            const shoppingListId = 1;
            const req = { user: { userId } };
            const shoppingList = {
                id: shoppingListId,
                name: 'Groceries',
                user: { id: userId, name: 'John Doe', email: 'john@example.com', password: '123456', shoppingLists: [] },
                items: [],
            };

            service.findOne.mockResolvedValue(shoppingList);

            const result = await controller.findOne(shoppingListId, req);

            expect(service.findOne).toHaveBeenCalledWith(userId, shoppingListId);
            expect(result).toEqual(shoppingList);
        });
    });

    describe('update', () => {
        it('should update a shopping list', async () => {
            const userId = 1;
            const shoppingListId = 1;
            const req = { user: { userId } };
            const createShoppingListDto: CreateShoppingListDto = { name: 'Updated List' };
            const updatedShoppingList = {
                id: shoppingListId,
                name: 'Updated List',
                user: { id: userId, name: 'John Doe', email: 'john@example.com', password: '123456', shoppingLists: [] },
                items: [],
            };

            service.update.mockResolvedValue(updatedShoppingList);

            const result = await controller.update(shoppingListId, createShoppingListDto, req);

            expect(service.update).toHaveBeenCalledWith(userId, shoppingListId, createShoppingListDto);
            expect(result).toEqual(updatedShoppingList);
        });
    });

    describe('delete', () => {
        it('should delete a shopping list', async () => {
            const userId = 1;
            const shoppingListId = 1;
            const req = { user: { userId } };

            service.delete.mockResolvedValue(undefined);

            const result = await controller.delete(shoppingListId, req);

            expect(service.delete).toHaveBeenCalledWith(userId, shoppingListId);
            expect(result).toBeUndefined();
        });
    });
});

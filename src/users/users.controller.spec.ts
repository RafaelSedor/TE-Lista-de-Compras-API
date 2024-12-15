import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

describe('UsersController', () => {
    let controller: UsersController;
    let service: jest.Mocked<UsersService>;

    beforeEach(async () => {
        const mockUsersService = {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            delete: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: mockUsersService,
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get(UsersService) as jest.Mocked<UsersService>;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a user', async () => {
            const createUserDto: CreateUserDto = {
                email: 'john@example.com',
                name: 'John Doe',
                password: '123456',
            };
            const createdUser: User = {
                id: 1,
                ...createUserDto,
                shoppingLists: [], // Adicionando o campo obrigatório.
            };

            service.create.mockResolvedValue(createdUser);

            const result = await controller.create(createUserDto);

            expect(service.create).toHaveBeenCalledWith(createUserDto);
            expect(result).toEqual(createdUser);
        });
    });

    describe('findAll', () => {
        it('should return all users', async () => {
            const users: User[] = [
                { id: 1, email: 'john@example.com', name: 'John Doe', password: '123456', shoppingLists: [] },
                { id: 2, email: 'jane@example.com', name: 'Jane Doe', password: 'abcdef', shoppingLists: [] },
            ];

            service.findAll.mockResolvedValue(users);

            const result = await controller.findAll();

            expect(service.findAll).toHaveBeenCalled();
            expect(result).toEqual(users);
        });
    });

    describe('findOne', () => {
        it('should return a single user by id', async () => {
            const user: User = {
                id: 1,
                email: 'john@example.com',
                name: 'John Doe',
                password: '123456',
                shoppingLists: [],
            };

            service.findOne.mockResolvedValue(user);

            const result = await controller.findOne(1);

            expect(service.findOne).toHaveBeenCalledWith(1);
            expect(result).toEqual(user);
        });
    });

    describe('delete', () => {
        it('should delete a user by id', async () => {
            service.delete.mockResolvedValue(undefined);

            const result = await controller.delete(1);

            expect(service.delete).toHaveBeenCalledWith(1);
            expect(result).toBeUndefined();
        });
    });
});

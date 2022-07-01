import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }
    @Get(':id')
    async findById(@Param() params): Promise<User> {
        return await this.usersService.findById(params.id);
    }
    @Put(':id')
    async updateById(@Body() updateUser: User,@Param() params): Promise<User> {
        return await this.usersService.updateById(updateUser,params.id);
    }
    @Post()
    async save(@Body() newUser: User): Promise<User> {
        return await this.usersService.create(newUser);
    }
}

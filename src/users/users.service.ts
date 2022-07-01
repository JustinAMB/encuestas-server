import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/interfaces/user.interface';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}
        
    async findAll(): Promise<User[]> {
        return await this.usersRepository.find({});
    }
    async findById(id:number): Promise<User> {
        return await this.usersRepository.findOneById(id);
    }
    async updateById(u:User,id:number): Promise<User> {
        const uOld=await this.findById(id);
        uOld.username=u.username;
        uOld.email=u.email;
        uOld.password=u.password;
        return await this.usersRepository.save(uOld);
    }
    
    async create(u:User): Promise<User> {
        return await this.usersRepository.save(u);
    }


    

}

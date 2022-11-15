/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    
    async getMembers(): Promise<object[]> {
        return await this.userRepository.find();
    }
    
    async findOneMember(slug: string): Promise<object> {
        return await this.userRepository.findOne(slug); 
    }

    async findOneMemberByDMN(dmn: number): Promise<object> {
        return await this.userRepository.findOne(dmn); 
    }

    async updateOneMember(id:number, user: User): Promise<object> {
        return await this.userRepository.update(id, user);
    }
}
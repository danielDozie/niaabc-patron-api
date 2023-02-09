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
    
    async getMembers(): Promise<User[]> {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect("user.invoice", "invoice")
            .orderBy("user.id", "ASC")
            .addOrderBy('invoice.id', 'DESC')
            .getMany()
    }
    
    async findOneMember(slug: string): Promise<User> {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect("user.invoice", "invoice")
            .where("user.slug = :slug", { slug: slug["slug"] })
            .orderBy("user.id", "ASC")
            .addOrderBy('invoice.id', 'DESC')
            .getOne()
    }

    async findOneMemberByDMN(dmn: number): Promise<User> {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect("user.invoice", "invoice")
            .where("user.dmn = :dmn", { dmn: dmn["dmn"] })
            .orderBy("user.id", "ASC")
            .addOrderBy('invoice.id', 'DESC')
            .getOne()
    }

    async updateOneMember(id:number, user: User): Promise<object> {
        return await this.userRepository.update(id, user);
    }
}
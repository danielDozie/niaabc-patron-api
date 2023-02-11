/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fee } from "./fees.entity";

@Injectable()
export class FeesService {
    constructor(
        @InjectRepository(Fee)
        private readonly feeRepository: Repository<Fee>,
    ) {}
    
    async getFees(): Promise<Fee[]> {
        return await this.feeRepository.find();
    }
    
    async getFeeByName(name: string): Promise<Fee> {
        return await this.feeRepository
            .createQueryBuilder('fee')
            .where("fee.name = :name", {name})
            .getOne();
    }
}
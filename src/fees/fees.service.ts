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
    
    async getFees(): Promise<object[]> {
        return await this.feeRepository.find();
    }
    
}
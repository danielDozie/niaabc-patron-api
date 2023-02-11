/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from "@nestjs/common";
import {FeesService} from "../fees/fees.service";
import { Fee } from "./fees.entity";

@Controller('fees') 
export class FeesController {
    constructor(
        private readonly feesService: FeesService,
    ) {}
    
    @Get()
    async getFees(): Promise<Fee[]> {
        return await this.feesService.getFees();
    }

    @Get('singleton')
    async getFeeByName(@Query('name') name: string): Promise<Fee>{
        return await this.feesService.getFeeByName(name);
    }
}
/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import {FeesService} from "../fees/fees.service";

@Controller('fees') 
export class FeesController {
    constructor(
        private readonly feesService: FeesService,
    ) {}
    
    @Get()
    getFees(): object {
        return this.feesService.getFees();
    }

}
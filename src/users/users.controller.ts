/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Body, Put } from "@nestjs/common";
import {UsersService} from "../users/users.service";
import { User } from "./user.entity";

@Controller('users') 
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}
    
    @Get()
    async getMembers(): Promise<object> {
        return await this.usersService.getMembers();
    }

    @Get(':slug')
    async findOneMember(@Param() slug:string): Promise<object> {
        return await this.usersService.findOneMember(slug);
    }

    @Get('/dmn/:dmn')
    async findOneMemberByDMN(@Param() dmn: number): Promise<object> {
        return await this.usersService.findOneMemberByDMN(dmn);
    }

    @Put('/update/:id')
    async updatedOneMember(@Param('id') id: number, @Body() user: User): Promise<object> {
        return await this.usersService.updateOneMember(id, user);
    }

}
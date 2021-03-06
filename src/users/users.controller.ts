import { Controller, Get, Param } from "@nestjs/common";
import {UsersService} from "../users/users.service";

@Controller('users') 
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}
    
    @Get()
    getUsers(): object {
        return this.usersService.getUsers();
    }

    @Get(':slug')
    findOneMember(@Param() slug:string): object {
        return this.usersService.findOneMember(slug);
    }

}
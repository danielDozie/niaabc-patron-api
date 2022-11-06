/* eslint-disable prettier/prettier */
import {UsersController} from '../users/users.controller';
import {UsersService} from '../users/users.service';
import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
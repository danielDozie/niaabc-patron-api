/* eslint-disable prettier/prettier */
import {FeesController} from '../fees/fees.controller';
import {FeesService} from '../fees/fees.service';
import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fee } from './fees.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Fee])],
    controllers: [FeesController],
    providers: [FeesService],
})
export class FeesModule {}
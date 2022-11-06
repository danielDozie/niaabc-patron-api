/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'typeOrm/entities';
import { ConfigModule } from '@nestjs/config';
import { FeesModule } from './fees/fees.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    "type": "mysql",
    "host": process.env.DATABASE_HOST,
    "port": 3306,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "entities": entities,
    "synchronize": false,
    "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
  }), UsersModule, FeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

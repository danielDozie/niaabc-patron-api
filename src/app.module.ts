import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'typeOrm/entities';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "astrildz",
    "password": "windows",
    "database": "niaabcDB",
    "entities": entities,
    "synchronize": false,
    "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

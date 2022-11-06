/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cm_items')
export class Fee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string

}
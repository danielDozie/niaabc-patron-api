/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cm_contacts')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dmn: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    address: string

    @Column()
    date_of_joining: Date
    
    @Column()
    additional: string

    @Column()
    payment_status: string

    @Column()
    image: string

    @Column()
    lead_position: string

    @Column()
    slug: string

}
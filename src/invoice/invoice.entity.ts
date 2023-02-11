import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../users/user.entity";

@Entity("cm_recurring_invoice")
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  currency: number;

  @Column()
  customer: number;

  @Column()
  date_of_joining: Date;

  @Column()
  discount: number;

  @Column()
  discount_type: number;

  @Column()
  discount_value: number;

  @Column()
  inv_date: Date;

  @Column()
  inv_status: number;

  @Column()
  items: string;

  @Column()
  note: string;

  @Column()
  other: string;

  @Column()
  paid: number;

  @Column()
  paymenttype: number;

  @Column()
  repeat_every: string;

  @Column()
  status: string;

  @Column()
  subtotal: number;

  @Column()
  tax: number;

  @Column()
  tc: string;

  @Column()
  transaction_ref: string;

  @ManyToOne(() => User, (user) => user.invoice)
  @JoinColumn({ name: "customer" })
  user: User;
}

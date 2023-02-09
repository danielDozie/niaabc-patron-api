import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("cm_recurring_invoice")
export class Invoice {
  @PrimaryColumn()
  id: number;

  @Column()
  inv_date: Date;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.invoice)
  @JoinColumn({ name: "customer" })
  user: User;
}

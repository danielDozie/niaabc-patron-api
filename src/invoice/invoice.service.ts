import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Invoice } from "./invoice.entity";

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}
  async createInvoice(invoice: Invoice): Promise<Invoice | any> {
    const query = await this.invoiceRepository
      .createQueryBuilder()
      .insert()
      .into(Invoice)
      .values([invoice])
      .execute();
    return query;
  }

  async getInvoices(): Promise<Invoice[]> {
    const query = await this.invoiceRepository
      .createQueryBuilder("invoice")
      .getMany();
    return query;
  }
}

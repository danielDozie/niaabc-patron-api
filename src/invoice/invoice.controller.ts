import { Body, Controller, Get, Post } from "@nestjs/common";
import { InvoiceService } from "./invoice.service";
import { Invoice } from "./invoice.entity";

@Controller("invoices")
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async getInvoices(): Promise<Invoice[]> {
    return await this.invoiceService.getInvoices();
  }

  @Post("new")
  async createInvoice(@Body() invoice: Invoice): Promise<Invoice> {
    return await this.invoiceService.createInvoice(invoice);
  }
}

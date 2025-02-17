import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './shipment.entity';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Get()
  async getAllShipments(): Promise<Shipment[]> {
    return this.shipmentsService.findAll();
  }

  @Get(':id')
  async getShipmentById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Shipment> {
    return this.shipmentsService.findOne(id);
  }

  @Post()
  async createShipment(@Body() shipmentData: Partial<Shipment>): Promise<Shipment> {
    return this.shipmentsService.create(shipmentData);
  }

  @Put(':id')
  async updateShipment(
    @Param('id', ParseIntPipe) id: number,
    @Body() shipmentData: Partial<Shipment>,
  ): Promise<Shipment> {
    return this.shipmentsService.update(id, shipmentData);
  }

  @Delete(':id')
  async deleteShipment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.shipmentsService.remove(id);
  }
}

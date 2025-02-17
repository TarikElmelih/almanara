import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from './shipment.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private shipmentsRepository: Repository<Shipment>,
  ) {}

  async findAll(): Promise<Shipment[]> {
    return this.shipmentsRepository.find();
  }

  async findOne(id: number): Promise<Shipment> {
    const shipment = await this.shipmentsRepository.findOneBy({ number: id });
    if (!shipment) {
      throw new NotFoundException(`Shipment with ID ${id} not found`);
    }
    return shipment;
  }

  async create(shipmentData: Partial<Shipment>): Promise<Shipment> {
    const shipment = this.shipmentsRepository.create(shipmentData);
    return this.shipmentsRepository.save(shipment);
  }

  async update(id: number, shipmentData: Partial<Shipment>): Promise<Shipment> {
    await this.shipmentsRepository.update(id, shipmentData);
    const updatedShipment = await this.findOne(id);
    return updatedShipment;
  }

  async remove(id: number): Promise<void> {
    const result = await this.shipmentsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Shipment with ID ${id} not found`);
    }
  }
}

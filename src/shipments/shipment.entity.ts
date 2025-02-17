import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  number: number;

  @Column({ type: 'varchar' })
  orderId: string;

  @Column({ type: 'float', nullable: true })
  weight?: number;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;
}

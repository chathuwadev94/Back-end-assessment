import { BaseEntity } from "src/app/core/repositories/entity/base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { DeviceStatus, DeviceType } from "../enums/device-type.enum";
import { Location } from "../../location/entities/location.entity";

@Entity('devices')
@Unique(['serialNo'])
export class Device extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 100 })
    serialNo: string;

    @Column({ type: 'enum', enum: DeviceType, default: DeviceType.POS })
    type: string;

    @Column({ type: 'enum', enum: DeviceStatus, default: DeviceStatus.ACTIVE })
    status: string;

    @ManyToOne(() => Location, loc => loc.devices)
    location: Location;

}
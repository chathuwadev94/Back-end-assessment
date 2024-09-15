import { BaseEntity } from "src/app/core/repositories/entity/base.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LocationStatus } from "../enums/location-type.enum";
import { User } from "../../user/entities/user.entity";
import { Device } from "../../device/entities/device.entity";

@Entity('locations')
export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100, nullable: true })
    address: string;

    @Column({ type: 'enum', enum: LocationStatus, default: LocationStatus.ACTIVE })
    status: string;

    @ManyToOne(() => User, user => user.locations)
    user: User;

    @OneToMany(() => Device, dev => dev.location)
    devices: Device[];

}
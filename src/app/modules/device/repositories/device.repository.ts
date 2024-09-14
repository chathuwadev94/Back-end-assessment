import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/app/core/repositories/base-repository";
import { Device } from "../entities/device.entity";
import { IDeviceRepository } from "../interfaces/device-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DeviceRepository
    extends BaseRepository<Device>
    implements IDeviceRepository {
    constructor(
        @InjectRepository(Device) private readonly deviceRepository: Repository<Device>
    ) {
        super(deviceRepository);
    }
}
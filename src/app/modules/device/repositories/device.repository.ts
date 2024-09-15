import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/app/core/repositories/base-repository";
import { Device } from "../entities/device.entity";
import { IDeviceRepository } from "../interfaces/device-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDevice } from "../interfaces/device.interface";

@Injectable()
export class DeviceRepository
    extends BaseRepository<Device>
    implements IDeviceRepository {
    constructor(
        @InjectRepository(Device) private readonly deviceRepository: Repository<Device>
    ) {
        super(deviceRepository);
    }

    async getDeviceBySerialNo(sNo: string): Promise<IDevice> {
        return await this.getOne({ serialNo: sNo });
    }
}
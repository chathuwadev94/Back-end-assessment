import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IDeviceRepository, IDeviceRepositoryInterface } from '../interfaces/device-repository.interface';
import { CreateDeviceDto } from '../dtos/create-device.dto';
import { IDevice } from '../interfaces/device.interface';
import { ILocation } from '../../location/interfaces/location.interface';
import { LocationService } from '../../location/services/location.service';
import { UpdateDeviceDto } from '../dtos/update-device.dto';

@Injectable()
export class DeviceService {
    constructor(
        @Inject(`${IDeviceRepositoryInterface}`)
        private readonly deviceRepo: IDeviceRepository,
        @Inject(LocationService.name)
        private readonly locationServ: LocationService
    ) { }

    async create(creatDeviceDto: CreateDeviceDto): Promise<IDevice> {
        const location: ILocation = await this.locationServ.findById(creatDeviceDto.locationId);
        if (!location) {
            throw new BadRequestException('Location not found..')
        }
        const createDto: CreateDeviceDto = { ...creatDeviceDto, location: location }
        return await this.deviceRepo.create(createDto);
    }

    async findById(id: number): Promise<IDevice> {
        return await this.deviceRepo.getOneById(id);
    }

    async update(id: number, updateDto: UpdateDeviceDto): Promise<IDevice> {
        return await this.deviceRepo.updateAndGetEntity(id, updateDto);
    }

    async remove(id: number): Promise<boolean> {
        const device: IDevice = await this.deviceRepo.getOneById(id);
        if (!device)
            throw new BadRequestException('Device not found..')
        return await this.deviceRepo.deleteById(device.id);
    }
}

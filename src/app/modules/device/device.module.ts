import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { DeviceController } from './controllers/device.controller';
import { IDeviceRepositoryInterface } from './interfaces/device-repository.interface';
import { DeviceRepository } from './repositories/device.repository';
import { DeviceService } from './services/device.service';
import { LocationModule } from '../location/location.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Device]),
        LocationModule
    ],
    controllers: [DeviceController],
    providers: [
        {
            provide: `${IDeviceRepositoryInterface}`,
            useClass: DeviceRepository
        },
        {
            provide: DeviceService.name,
            useClass: DeviceService
        }
    ],
})
export class DeviceModule { }

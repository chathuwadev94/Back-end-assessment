import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { LocationController } from './controllers/location.controller';
import { ILocationRepositoryInterface } from './interfaces/location-repository.interface';
import { LocationRepository } from './repositories/location.repository';
import { LocationService } from './services/location.service';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Location]),
        UserModule
    ],
    controllers: [LocationController],
    providers: [
        {
            provide: `${ILocationRepositoryInterface}`,
            useClass: LocationRepository
        },
        {
            provide: LocationService.name,
            useClass: LocationService
        }
    ],
})
export class LocationModule { }

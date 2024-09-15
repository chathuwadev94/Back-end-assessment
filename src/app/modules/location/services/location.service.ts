import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ILocationRepository, ILocationRepositoryInterface } from '../interfaces/location-repository.interface';
import { CreateLocationDto, UpdateLocationDto } from '../dtos/create-location.dto';
import { ILocation } from '../interfaces/location.interface';
import { IUser } from '../../user/interfaces/user.interface';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class LocationService {
    constructor(
        @Inject(`${ILocationRepositoryInterface}`)
        private readonly locationRepo: ILocationRepository,
        @Inject(UserService.name)
        private readonly userServ: UserService
    ) { }

    async create(createLocationDto: CreateLocationDto): Promise<ILocation> {
        const user: IUser = await this.userServ.findById(createLocationDto.userId);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        let createDto: CreateLocationDto = { ...createLocationDto, user: user }
        return await this.locationRepo.create(createDto);
    }

    async update(id: number, updateLocationDto: UpdateLocationDto): Promise<ILocation> {
        const location: ILocation = await this.locationRepo.getOneById(id);
        return await this.locationRepo.updateAndGetEntity(location.id, updateLocationDto);
    }

    async findById(id: number): Promise<ILocation> {
        return await this.locationRepo.getOneById(id);
    }

    async remove(id: number): Promise<boolean> {
        const location: ILocation = await this.locationRepo.getOneById(id);
        if (!location) {
            throw new BadRequestException('Location not found');
        }
        return await this.locationRepo.deleteById(location.id);
    }

}

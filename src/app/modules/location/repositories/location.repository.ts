import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/app/core/repositories/base-repository";
import { Location } from "../entities/location.entity";
import { ILocationRepository } from "../interfaces/location-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LocationRepository
    extends BaseRepository<Location>
    implements ILocationRepository {
    constructor(
        @InjectRepository(Location) private readonly locationRepository: Repository<Location>
    ) {
        super(locationRepository);
    }
}
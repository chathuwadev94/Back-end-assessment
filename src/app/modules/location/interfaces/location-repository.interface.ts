import { IBaseRepository } from "src/app/core/repositories/interface/base-repository.interface";
import { Location } from "../entities/location.entity";

export const ILocationRepositoryInterface = 'ILocationRepository';
export interface ILocationRepository extends IBaseRepository<Location> { }
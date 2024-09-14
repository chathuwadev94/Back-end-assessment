import { IBaseRepository } from "src/app/core/repositories/interface/base-repository.interface";
import { Device } from "../entities/device.entity";

export const IDeviceRepositoryInterface = 'IDeviceRepository';
export interface IDeviceRepository extends IBaseRepository<Device> { }
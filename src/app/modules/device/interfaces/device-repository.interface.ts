import { IBaseRepository } from "src/app/core/repositories/interface/base-repository.interface";
import { Device } from "../entities/device.entity";
import { IDevice } from "./device.interface";

export const IDeviceRepositoryInterface = 'IDeviceRepository';
export interface IDeviceRepository extends IBaseRepository<Device> {
    getDeviceBySerialNo(sNo:string):Promise<IDevice>
 }
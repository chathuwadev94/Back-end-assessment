import { IBaseModel } from "src/app/core/repositories/interface/base.model.interface";
import { ILocation } from "../../location/interfaces/location.interface";

export interface IUser extends IBaseModel {
    firstName: string;
    lastName?: string;
    nic: string;
    gender: string;
    email?: string;
    address: string;
    userName?: string;
    password?: string;
    status: number;
    locations: ILocation[];
}

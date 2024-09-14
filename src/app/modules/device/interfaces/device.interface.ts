import { IBaseModel } from "src/app/core/repositories/interface/base.model.interface";
import { ILocation } from "../../location/interfaces/location.interface";

export interface IDevice extends IBaseModel {
    serialNo: string;
    type: string;
    status: string;
    location: ILocation;
}

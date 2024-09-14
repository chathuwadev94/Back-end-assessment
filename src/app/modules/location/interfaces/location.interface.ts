import { IBaseModel } from "src/app/core/repositories/interface/base.model.interface";
import { IUser } from "../../user/interfaces/user.interface";

export interface ILocation extends IBaseModel {
    title: string;
    address: string;
    status: string;
    user: IUser;

}

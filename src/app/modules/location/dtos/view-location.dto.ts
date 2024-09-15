import { ILocation } from "../interfaces/location.interface";

export class ViewLocationDto {
    formatDataSet(data: ILocation) {
        return {
            id: data.id,
            title: data.title || null,
            addres: data.address || null,
            status: data.status || null,
            user: data.user || [],
            devices: data.devices || [],
        };
    }
}
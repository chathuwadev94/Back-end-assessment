import { IDevice } from "../interfaces/device.interface";

export class ViewDeviceDto {
    formatDataSet(data: IDevice) {
        return {
            id: data.id,
            serialNo: data.serialNo || null,
            type: data.type || null,
            status: data.status,
            location: data.location || null,
            image:data.image || null
        };
    }
}
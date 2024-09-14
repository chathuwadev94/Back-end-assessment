import { ApiProperty } from "@nestjs/swagger";
import { IDevice } from "../interfaces/device.interface";
import { ILocation } from "../../location/interfaces/location.interface";

export class DeviceResponseDto implements IDevice {
    @ApiProperty({ type: String, description: 'Device ID' })
    id?: string;

    @ApiProperty({ type: String, description: 'Device ID' })
    serialNo: string;

    @ApiProperty({ type: String, description: 'Device Type' })
    type: string;

    @ApiProperty({ type: String, description: 'Device Status' })
    status: string;


    @ApiProperty({ type: String, description: 'Device Locations' })
    location: ILocation;


}
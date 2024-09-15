import { ApiProperty } from "@nestjs/swagger";
import { DeviceStatus, DeviceType } from "../enums/device-type.enum";
import { ILocation } from "../../location/interfaces/location.interface";

export class UpdateDeviceDto {

    @ApiProperty({
        type: String,
        description: 'Serial no of the device',
        required: true,
    })
    serialNo?: string;

    @ApiProperty({
        enum: DeviceType,
        type: String,
        description: 'Type of the device',
        required: false,
    })
    type?: string;

    @ApiProperty({
        enum: DeviceStatus,
        type: String,
        description: 'Staus of the device',
        required: false,
    })
    status?: string;

    @ApiProperty({
        type: Number,
        description: 'Location Id o the device',
        required: false,
    })
    locationId?: number;

    @ApiProperty({
        type: String,
        description: 'Image of  the device',
        required: false,
    })
    image?: string;

    location?: ILocation;

}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { DeviceStatus, DeviceType } from "../enums/device-type.enum";
import { ILocation } from "../../location/interfaces/location.interface";

export class CreateDeviceDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'Serial no of the device',
        required: true,
    })
    serialNo: string;

    @ApiProperty({
        enum: DeviceType,
        type: String,
        description: 'Type of the Device',
        required: false,
    })
    type: string;

    @ApiProperty({
        enum: DeviceStatus,
        type: String,
        description: 'Status of Device',
        required: false,
    })
    status: string;

    @ApiProperty({
        type: Number,
        description: 'Location Id of the device',
        required: false,
    })
    locationId: number;

    @ApiProperty({
        type: Number,
        description: 'Image of Device',
        required: false,
    })
    image: string;

    location?: ILocation;

}
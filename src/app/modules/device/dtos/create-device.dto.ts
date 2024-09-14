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
        description: 'Type of the user',
        required: false,
    })
    type: string;

    @ApiProperty({
        enum: DeviceStatus,
        type: String,
        description: 'Email of the user',
        required: false,
    })
    status: string;

    @ApiProperty({
        type: Number,
        description: 'Email of the user',
        required: false,
    })
    locationId: number;

    location?: ILocation;

}
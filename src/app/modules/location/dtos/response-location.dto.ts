import { ApiProperty } from "@nestjs/swagger";
import { ILocation } from "../interfaces/location.interface";
import { IUser } from "../../user/interfaces/user.interface";
import { LocationStatus } from "../enums/location-type.enum";

export class LocationResponseDto implements ILocation {
    @ApiProperty({ type: String, description: 'Location Id' })
    id?: string;

    @ApiProperty({ type: String, description: 'Location Title' })
    title: string;

    @ApiProperty({ type: String, description: 'Location Address' })
    address: string;

    @ApiProperty({ enum: LocationStatus, type: String, description: 'User Gender' })
    status: string;

    @ApiProperty({ type: String, description: 'location Users' })
    user: IUser;


}
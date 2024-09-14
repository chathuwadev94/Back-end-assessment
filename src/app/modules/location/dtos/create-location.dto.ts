import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IUser } from "../../user/interfaces/user.interface";
import { LocationStatus } from "../enums/location-type.enum";

export class CreateLocationDto {


    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'Title of the location',
        required: true,
    })
    title: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'Address of the location',
        required: true,
    })
    addrress: string;

    @ApiProperty({
        type: String,
        description: 'User id',
        required: true,
    })
    userId: number;

    user?: IUser

}


export class UpdateLocationDto {
    @ApiProperty({
        type: String,
        description: 'Title of the location',
        required: false,
    })
    title?: string;


    @ApiProperty({
        type: String,
        description: 'Address of the location',
        required: false,
    })
    addrress?: string;

    @ApiProperty({
        enum: LocationStatus,
        type: String,
        description: 'Status of the location',
        required: false,
    })
    status?: string;
}
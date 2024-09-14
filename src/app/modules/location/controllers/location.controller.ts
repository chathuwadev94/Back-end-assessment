import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { LocationService } from '../services/location.service';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/app/core/interceptors/transform.interceptor';
import { ViewLocationDto } from '../dtos/view-location.dto';
import { LocationResponseDto } from '../dtos/response-location.dto';
import { CreateLocationDto, UpdateLocationDto } from '../dtos/create-location.dto';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('location')
@ApiTags('Location')
@ApiBearerAuth()
export class LocationController {

    constructor(
        @Inject(LocationService.name)
        private readonly locationServ: LocationService
    ) { }

    @Post()
    @UseInterceptors(new TransformInterceptor(new ViewLocationDto()))
    @ApiOperation({ description: 'Create Location' })
    @ApiCreatedResponse({ type: LocationResponseDto, description: 'Create Location' })
    @ApiBody({ type: CreateLocationDto })
    @HttpCode(201)
    async create(@Body() createLocationDto: CreateLocationDto) {
        return await this.locationServ.create(createLocationDto);
    }


    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewLocationDto()))
    @ApiOperation({ description: 'Update  Location' })
    @ApiCreatedResponse({ type: LocationResponseDto, description: 'Update Location' })
    @ApiBody({ type: UpdateLocationDto })
    @HttpCode(200)
    async update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto) {
        return await this.locationServ.update(id, updateLocationDto);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewLocationDto()))
    @ApiOperation({ description: 'Get Location by Id' })
    @ApiCreatedResponse({ type: LocationResponseDto, description: 'Get Location by Id' })
    @HttpCode(200)
    async getLocationById(
        @Param('id') id: number
    ) {
        return await this.locationServ.findById(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'Delete  Location' })
    @HttpCode(200)
    async deleteContact(@Param('id') id: number) {
        return await this.locationServ.remove(id)
    }

}

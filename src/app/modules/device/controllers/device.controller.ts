import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeviceService } from '../services/device.service';
import { TransformInterceptor } from 'src/app/core/interceptors/transform.interceptor';
import { ViewDeviceDto } from '../dtos/view-device.dto';
import { DeviceResponseDto } from '../dtos/response-device.dto';
import { CreateDeviceDto } from '../dtos/create-device.dto';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { UpdateDeviceDto } from '../dtos/update-device.dto';

@Controller('device')
@ApiTags('Device')
@ApiBearerAuth()
export class DeviceController {

    constructor(
        @Inject(DeviceService.name)
        private readonly deviceServ: DeviceService
    ) { }

    // Create device
    @Post()
    @UseInterceptors(new TransformInterceptor(new ViewDeviceDto()))
    @ApiOperation({ description: 'Create Device' })
    @ApiCreatedResponse({ type: DeviceResponseDto, description: 'Create Device' })
    @ApiBody({ type: CreateDeviceDto })
    @HttpCode(201)
    async create(@Body() createDeviceDto: CreateDeviceDto) {
        return await this.deviceServ.create(createDeviceDto);
    }

    // Update Device
    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewDeviceDto()))
    @ApiOperation({ description: 'Update  Device' })
    @ApiCreatedResponse({ type: DeviceResponseDto, description: 'Update Device' })
    @ApiBody({ type: UpdateDeviceDto })
    @HttpCode(200)
    async update(@Param('id') id: number, @Body() updateDeviceDto: UpdateDeviceDto) {
        return await this.deviceServ.update(id, updateDeviceDto);
    }

    // Get Device By Id
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewDeviceDto()))
    @ApiOperation({ description: 'Get Device by Id' })
    @ApiCreatedResponse({ type: DeviceResponseDto, description: 'Get Device by Id' })
    @HttpCode(200)
    async getDeviceById(
        @Param('id') id: number
    ) {
        return await this.deviceServ.findById(id);
    }

    // Delete Device
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'Delete  Device' })
    @HttpCode(200)
    async deleteDevice(@Param('id') id: number) {
        return await this.deviceServ.remove(id)
    }
}

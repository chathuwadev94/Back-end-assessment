import { Body, Controller, Get, HttpCode, Inject, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import {
    ApiTags, ApiBody,
    ApiCreatedResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { ACGuard, UseRoles } from 'nest-access-control';
import { TransformInterceptor } from 'src/app/core/interceptors/transform.interceptor';
import { ViewUserDto } from '../../user/dtos/view-user.dto';
import { UserResponseDto } from '../../user/dtos/response-user.dto';
import { LoginResDto } from '../dtos/response.dto';
import { ChangePasswordDto, LoginDto, RefreshDto } from '../dtos/auth.dto';
import { ViewChangePasswordDto } from '../dtos/view-auth.dto';
import { CurrentUser } from 'src/app/core/decorators/current-user.decorator';
import { ITokenUser } from 'src/app/core/interfaces/token-user';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {

    constructor(
        @Inject(AuthService.name) private readonly authServ: AuthService
    ) { }

    // User Login
    @Post('login')
    @ApiOperation({ description: 'User Login' })
    @ApiCreatedResponse({ type: LoginResDto, description: 'User Login' })
    @ApiBody({ type: LoginDto })
    async login(@Body() loginDto: LoginDto): Promise<any> {
        return await this.authServ.login(loginDto)
    }

    //Get Accesss token By Refresh token
    @Post('refresh-token')
    @ApiOperation({ description: 'Get access token by refresh token' })
    @ApiCreatedResponse({ type: LoginResDto, description: 'User Login' })
    @ApiBody({ type: LoginDto })
    async refreshToken(@Body() refreshDto: RefreshDto): Promise<any> {
        return await this.authServ.refreshToken(refreshDto);
    }


    //Change Password
    @Patch('change-password')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewChangePasswordDto()))
    @ApiOperation({ description: 'Change User Password' })
    @ApiCreatedResponse({ type: ViewChangePasswordDto, description: 'Change User Password' })
    @ApiBody({ type: ChangePasswordDto })
    async changePassword(@Body() changePasswordDto: ChangePasswordDto, @CurrentUser() user: ITokenUser): Promise<any> {
        return await this.authServ.changePassword(user.id, changePasswordDto);
    }

    // Get Logged In User
    @Get('logged-in')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(new TransformInterceptor(new ViewUserDto()))
    @ApiOperation({ description: 'Get Loged In User' })
    @ApiCreatedResponse({ type: UserResponseDto, description: 'Get Loged In User' })
    @HttpCode(200)
    async getUserByUserName(@CurrentUser() user: ITokenUser) {
        return await this.authServ.getUserById(user.id);
    }


    //Reset Password
    @Patch(':id/reset-password')
    @UseGuards(JwtAuthGuard)
    @UseRoles({
        resource: AuthController.name,
        action: 'update',
        possession: "own"
    })
    @UseInterceptors(new TransformInterceptor(new ViewUserDto()))
    @ApiOperation({ description: 'Reset Password By Admin' })
    @ApiCreatedResponse({ description: 'Reset Password By Admin' })
    async resetPasssword(@Param('id') id: number): Promise<any> {
        return await this.authServ.passwordResetByAdmin(id);
    }


}

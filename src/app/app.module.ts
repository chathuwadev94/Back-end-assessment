import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/system/configuration';
import { TypeOrmConfigModule } from './config/type-orm/typeorm.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { LocationModule } from './modules/location/location.module';
import { DeviceModule } from './modules/device/device.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    TypeOrmConfigModule,
    UserModule,
    AuthModule,
    LocationModule,
    DeviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

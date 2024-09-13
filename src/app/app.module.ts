import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/system/configuration';
import { TypeOrmConfigModule } from './config/type-orm/typeorm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    TypeOrmConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

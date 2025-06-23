import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { ApplicationSettingsModule } from './modules/application-settings/application-settings.module';
import { ConfigurationModule } from './modules/application-settings/configuration/configuration.module';
import { CustomLabelsModule } from './modules/application-settings/custom-labels/custom-labels.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'akshay',
      password: 'E1719prbu',
      database: 'application_settings',
      models: [__dirname + '/models/*.model.ts'],
      autoLoadModels: true,
      synchronize: false,
    }),
    UserModule,
    ApplicationSettingsModule,
    ConfigurationModule,
    CustomLabelsModule,
  ],
})
export class AppModule {}

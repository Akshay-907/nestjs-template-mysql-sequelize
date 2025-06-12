import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'p',
      database: 'nestdb',
      models: [__dirname + '/models/*.model.ts'],
      autoLoadModels: true,
      synchronize: false,
    }),
    UserModule,
  ],
})
export class AppModule {}

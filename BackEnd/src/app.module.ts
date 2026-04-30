import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { MunicipiosModule } from './municipios/municipios.module';
import { CasosDengueModule } from './casos_dengue/casos_dengue.module';
import { ObitosModule } from './obitos/obitos.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT! ?? '3306'),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
  }),
    MunicipiosModule,
    CasosDengueModule,
    ObitosModule,
    DashboardModule,
  ],
})
export class AppModule {}
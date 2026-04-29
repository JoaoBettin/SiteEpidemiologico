import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MunicipiosModule } from './municipios/municipios.module';
import { CasosDengueModule } from './casos_dengue/casos_dengue.module';
import { ObitosModule } from './obitos/obitos.module';
import { DashboardModule } from './dashboard/dashboard.module'

@Module ({
  imports: [
  TypeOrmModule.forRoot ({
  type: 'mysql', 
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Chiquinha123',
  database: 'bancoepidemiologico',
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
}),

MunicipiosModule, 
CasosDengueModule,
ObitosModule,
DashboardModule

],

})

export class AppModule {}
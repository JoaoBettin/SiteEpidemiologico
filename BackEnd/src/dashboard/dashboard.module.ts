import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { CasosDengueModule } from 'src/casos_dengue/casos_dengue.module';
import { ObitosModule } from 'src/obitos/obitos.module';
import { MunicipiosModule } from 'src/municipios/municipios.module';
import { MunicipioService } from 'src/municipios/municipios.service';
import { CasosDengueService } from 'src/casos_dengue/casos_dengue.service';
import { ObitoService } from 'src/obitos/obitos.service';

@Module({
  imports: [CasosDengueModule, ObitosModule, MunicipiosModule],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}

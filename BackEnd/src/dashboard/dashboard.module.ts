import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { CasosDengueModule } from 'src/casos_dengue/casos_dengue.module';
import { ObitosModule } from 'src/obitos/obitos.module';
import { MunicipiosModule } from 'src/municipios/municipios.module';

@Module({
  imports: [CasosDengueModule, ObitosModule, MunicipiosModule],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}

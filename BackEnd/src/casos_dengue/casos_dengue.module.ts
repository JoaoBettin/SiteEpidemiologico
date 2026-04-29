import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasoDengue } from './casos_dengue.entity';
import { CasosDengueController } from './casos_dengue.controller';
import { CasosDengueService } from './casos_dengue.service';

@Module({
  imports: [TypeOrmModule.forFeature([CasoDengue])],
  controllers: [CasosDengueController],
  providers: [CasosDengueService],
  exports: [CasosDengueService],
})
export class CasosDengueModule {}

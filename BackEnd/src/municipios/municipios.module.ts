import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipiosController } from './municipios.controller';
import { Municipio } from './municipios.entity';
import { MunicipioService } from './municipios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Municipio])],
  controllers: [MunicipiosController],
  providers: [MunicipioService],
  exports: [MunicipioService],

})
export class MunicipiosModule {}

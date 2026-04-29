import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obito } from './obitos.entity';
import { ObitosController } from './obitos.controller';
import { ObitoService } from './obitos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Obito])],
  controllers: [ObitosController],
  providers: [ObitoService],
  exports: [ObitoService],
})
export class ObitosModule {}

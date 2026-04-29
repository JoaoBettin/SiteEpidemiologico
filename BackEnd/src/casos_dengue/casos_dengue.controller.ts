import { Controller, Get, Query } from '@nestjs/common';
import { CasosDengueService } from './casos_dengue.service';
@Controller('dados')
export class CasosDengueController {
    constructor(private readonly service: CasosDengueService){}
}

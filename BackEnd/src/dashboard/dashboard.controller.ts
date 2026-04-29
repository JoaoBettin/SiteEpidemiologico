import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService){}
    @Get()
    
    getDashboard(@Query('cidade') cidade: string){
        return this.dashboardService.getDados(cidade);
    }
}

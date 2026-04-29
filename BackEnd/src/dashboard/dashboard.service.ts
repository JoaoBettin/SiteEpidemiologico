import { Injectable } from '@nestjs/common';
import { MunicipioService } from 'src/municipios/municipios.service';


@Injectable()
export class DashboardService {
    constructor(
        private municipiosService: MunicipioService,
    ) {}
    
    async getDados(){
        const data = await this.municipiosService.getDashboardData();
        return data.map(item => {
        const casos = Number(item.casos) || 0;
        const obitos = Number(item.obito) || 0;
        return{
            municipio: item.municipio, 
            casos,
            obitos,
            /*incidencia: casos ? ((casos/))*/
            letalidade: casos ? ((obitos/casos) * 100).toFixed(2) : 0,
        };
    });
    }}    


    
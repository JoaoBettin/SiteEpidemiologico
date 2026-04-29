import { Injectable } from '@nestjs/common';
import { MunicipioService } from 'src/municipios/municipios.service';
import { CasosDengueService } from 'src/casos_dengue/casos_dengue.service';
import { ObitoService } from 'src/obitos/obitos.service';

@Injectable()
export class DashboardService {
    constructor(
        private municipiosService: MunicipioService,
        private obitosService: ObitoService,
        private casosService: CasosDengueService,
    ) {}

    async getDados(cidade: string) {
        const totalCasosArr = await this.casosService.buscarPorCidade(cidade);
        const totalObitosArr = await this.obitosService.buscarPorCidade(cidade);
        const municipio = await this.municipiosService.buscarPorNome(cidade);

        const totalCasos = totalCasosArr.reduce((acc, c) => acc + c.casos_confirmados, 0);
        const totalObitos = totalObitosArr.reduce((acc, o) => acc + o.quant_obitos, 0);
        const populacao = municipio?.populacao ?? 1;

        const incidencia = ((totalCasos / populacao) * 100000).toFixed(1);
        const letalidade = totalCasos > 0
            ? ((totalObitos / totalCasos) * 100).toFixed(2)
            : "0.00";

        return {
            cidade,
            casos: totalCasos,
            obitos: totalObitos,
            incidencia: parseFloat(incidencia),
            letalidade: parseFloat(letalidade),
        };
    }
}


    
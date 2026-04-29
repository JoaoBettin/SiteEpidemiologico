import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './municipios.entity';

@Injectable()
export class MunicipioService {
    constructor(
        @InjectRepository(Municipio)
        private repo: Repository<Municipio>,
    ){}

    async getDashboardData(){

        const data = await this.repo
        .createQueryBuilder('m')
        
        .innerJoin('m.caso', 'c') 
        .innerJoin('m.obito', 'o')

        .select('m.nome', 'municipio')

        .addSelect('COALESCE(SUM(DISTINCT c.casos_confirmados), 0)', 'casos')
        .addSelect('COALESCE(SUM(DISTINCT o.quant_obitos), 0)', 'obitos')

        .groupBy('m.id_municipio')
        
        .addGroupBy('m.nome')

        .getRawMany();

        
        return data;
    }
}

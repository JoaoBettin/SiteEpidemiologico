import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { CasoDengue } from './casos_dengue.entity';

@Injectable()
export class CasosDengueService {
    constructor(
        @InjectRepository(CasoDengue)
        private repo: Repository<CasoDengue>,
    ){}

    async totalCasos(): Promise<number>{
        return this.repo.count();
    }

    async casosPorMunicipio() {
        createQueryBuilder('caso')
        .leftJoin('caso.municipio', 'municipio')
        .select('municipio.nome', 'municipio')
        .addSelect('SUM(caso.casos_confirmados)', 'totalCasos')
        .groupBy('municipio.nome')
        .getRawMany();
    }
}

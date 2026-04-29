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

    async buscarPorCidade(cidade: string){
        return this.repo
        .createQueryBuilder('caso')
        .leftJoin('caso.municipio', 'municipio')
        .where('municipio.nome = :cidade', {cidade})
        .getMany();
    }

    async totalCasosPorCidade(cidade: string) {
    const result = await this.repo
        .createQueryBuilder('caso')
        .leftJoin('caso.municipio', 'municipio')
        .select('SUM(caso.casos_confirmados)', 'total')
        .where('municipio.nome = :cidade', { cidade })
        .getRawOne();

    return Number(result.total) || 0;
}

    async casosPorMunicipio() {
        return this.repo
        .createQueryBuilder('caso')
        .leftJoin('caso.municipio', 'municipio')
        .select('municipio.nome', 'municipio')
        .addSelect('SUM(caso.casos_confirmados)', 'totalCasos')
        .groupBy('municipio.nome')
        .getMany();
    }
}

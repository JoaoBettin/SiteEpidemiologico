import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obito } from './obitos.entity';

@Injectable()
export class ObitoService {
    constructor(
        @InjectRepository(Obito)
        private repo: Repository<Obito>,
    ){}

    async buscarPorCidade(cidade: string){
        return this.repo
        .createQueryBuilder('obito')
        .leftJoin('obito.municipio', 'municipio')
        .where('municipio.nome = :cidade', {cidade})
        .getMany();
    }

    async totalObitosPorCidade(cidade: string) {
    const result = await this.repo
        .createQueryBuilder('obito')
        .leftJoin('obito.municipio', 'municipio')
        .select('SUM(obito.quantidade)', 'total')
        .where('municipio.nome = :cidade', { cidade })
        .getRawOne();

    return Number(result.total) || 0;
}

    async totalObitos(): Promise<number>{
        return this.repo.count();
    }
}

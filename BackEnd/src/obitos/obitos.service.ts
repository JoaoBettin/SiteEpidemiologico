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

    async totalObitos(): Promise<number>{
        return this.repo.count();
    }
}

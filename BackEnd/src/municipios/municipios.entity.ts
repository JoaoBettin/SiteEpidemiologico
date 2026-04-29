import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { CasoDengue } from "src/casos_dengue/casos_dengue.entity";
import { Obito } from "src/obitos/obitos.entity";

@Entity('municipios') 
export class Municipio {
    @PrimaryGeneratedColumn()
    id_municipio!: number;

    @Column({name : 'nome'})
    nome!: string;

    @Column()
    populacao!: number;

    @OneToMany(() => CasoDengue, (caso) => caso.municipio)
    caso!: CasoDengue[];

    @OneToMany(() => Obito, (obito) => obito.municipio)
    obito!: Obito[];
}

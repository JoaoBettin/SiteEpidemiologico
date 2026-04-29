import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Municipio } from "src/municipios/municipios.entity";

@Entity('obitos') 
export class Obito {
    @PrimaryGeneratedColumn()
    id_obitos!: number;

    @Column()
    ano_obito!: number;

    @Column()
    quant_obitos!: number;

    @ManyToOne(() => Municipio)
    @JoinColumn({name:'id_municipio'})
    municipio!: Municipio;

}
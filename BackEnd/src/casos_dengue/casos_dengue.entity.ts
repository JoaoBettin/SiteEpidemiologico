import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Municipio } from "src/municipios/municipios.entity";

@Entity('casos_dengue') 
export class CasoDengue {
    @PrimaryGeneratedColumn()
    id_casos!: number;

    @Column()
    casos_confirmados!: number;

    @Column()
    ano_caso!: number;

    @ManyToOne(() => Municipio)
    @JoinColumn({name:'id_municipio'})
    municipio!: Municipio;
}
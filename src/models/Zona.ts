import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('udtEF_Zona')
class Zona{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    SITE: string;

    @Column()
    AREA: string;

    @Column()
    LOCALIZACAO: string;

    @Column()
    PONTO_REF: string;
}

export default Zona;
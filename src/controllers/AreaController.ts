import { getRepository } from "typeorm";
import Zona from '../models/Zona';

interface Request {
    ID: number,
    SITE: string,
    AREA: string,
    LOCALIZACAO: string,
    PONTO_REF: string
}

class ZonaController {

    public async listAll(): Promise<Request[]> {

        const ZonaRepository = getRepository(Zona);
        const zona = await ZonaRepository.find();

        return zona;
    }
}

export default ZonaController;
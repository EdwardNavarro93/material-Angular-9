import { Subscripcion } from './subscripcion.enum';

export interface Registro {

    username:string
    password:string
    subscripcion: Subscripcion
    promociones: boolean
}

import { AfinidadMagica } from "./enums/afinidadMagica";
import { EstadoSolicitud } from "./enums/estadoSolicitud";
import { GrimorioType } from "./enums/grimorioType";

export class Solicitud {

    public idSolicitud!: string;
    public nombre!: string;
    public apellido!: string;
    public identificacion!: string;
    public edad!: string;
    public estado!: EstadoSolicitud;
    public afinidadMagica!: AfinidadMagica;
    public grimorio!: GrimorioType;

    public constructor(init?: Partial<Solicitud>) {
        Object.assign(this, init);
    }

    public static copyTo(solicitud: Solicitud): Solicitud {
        return new Solicitud(solicitud)
    }
}

export class Solicitudes {
    public solicitudes!: Solicitud[];

    public constructor(init?: Partial<Solicitudes>) {
        Object.assign(this, init);
    }

    public static copyTo(solicitudes: Solicitudes): Solicitudes {
        return new Solicitudes(solicitudes)
    }

}

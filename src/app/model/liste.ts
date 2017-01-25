import {Souhait} from "./souhait";
export class Liste {
    public id: number;
    public souhait: string;
    public url: string;
    public mail: string;
    public description: string;
    public souhaits: Souhait[];
    public token:string;
}

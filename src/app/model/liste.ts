import {Souhait} from "./souhait";
export class Liste {
  public $key: string;
  public titre: string;
  public mail: string;
  public description: string;
  public souhaits: Souhait[];
  public token: string;
  public creation: number;

  constructor(titre?, mail?, description?, souhaits?) {
    this.titre = titre;
    this.mail = mail || "xiaoyu.sere@gmail.com";
    this.description = description || "";
    this.souhaits = souhaits || [];
    this.creation = Date.now();
  }
}

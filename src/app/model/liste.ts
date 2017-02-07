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

  static copy(liste:Liste) {
    let newListe = new Liste();
    newListe.creation = liste.creation;
    newListe.description = liste.description || "";
    newListe.mail = liste.mail  || "";
    newListe.souhaits = liste.souhaits || [];
    newListe.titre = liste.titre || "";
    newListe.token = liste.token || "";
    return newListe;
  }
}

import {Component, OnInit} from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Router} from "@angular/router";
import {Liste} from "../model/liste";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-create-step3',
  templateUrl: './create-step3.component.html',
})
export class CreateStep3Component implements OnInit {

  liste: Liste;
  message:boolean|string = false;
  foundKey: string;
  listes: Liste[];

  constructor(private router: Router, private listeService: ListeService) {
  }

  ngOnInit() {
    this.liste = this.listeService.liste;
    if (this.liste.titre == null || this.liste.titre == "") {
      this.router.navigate(["creationEtape1"]);
    }
  }

  persistOK(data: any) {
    this.message = "La liste a bien été enregistrée. Vous pouvez maintenant la partager !";
    console.log(data);
    this.listeService.items.subscribe(result => {
      this.foundKey = this.getKey(result);
    });
  }

  getKey(value: Liste[]):string {
    for(let uneListe of value) {
      if(uneListe.titre == this.liste.titre) {
        return uneListe.$key;
      }
    }
  }

  persistKO(data: any) {
    this.message = "Erreur de sauvegarde de la liste dans la base de données.";
  }

  persistListe() {
    this.listeService.persist(this.liste).then(suc => this.persistOK(suc), err => this.persistKO(err));
  }
}

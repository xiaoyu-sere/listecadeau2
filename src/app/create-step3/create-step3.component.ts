import { Component, OnInit } from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Router} from "@angular/router";
import {Liste} from "../model/liste";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-create-step3',
  templateUrl: './create-step3.component.html',
})
export class CreateStep3Component implements OnInit {

  liste:Liste;
  message = "";

  constructor(private router:Router, private listeService:ListeService) { }

  ngOnInit() {
    this.liste = this.listeService.liste;
    if(this.liste.titre == null || this.liste.titre == "") {
      this.router.navigate(["creationEtape1"]);
    }
  }

  persistOK(data:any) {
    this.message = "La liste a bien été enregistré. Vous pouvez maintenant la partager !";
    console.log(data);
    //this.listeService.items.map(lists => lists.filter(l => l.titre == this.liste.titre).map(filteredList => this.key = filteredList.$key));
  }

  persistKO(data:any) {
    this.message = "Erreur de sauvegarde de la liste dans la base de données.";
  }

  persistListe() {
    this.listeService.persist(this.liste).then(suc => this.persistOK(suc), err => this.persistKO(err));
  }
}

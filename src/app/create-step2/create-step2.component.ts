import { Component, OnInit } from '@angular/core';
import { Liste } from "../model/liste";
import {Router} from "@angular/router";
import {ListeService} from "../services/liste.service";
import {Souhait} from "../model/souhait";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-create-step2',
  templateUrl: './create-step2.component.html',
})
export class CreateStep2Component implements OnInit {

  liste:Liste;
  inputSouhaitLabel:string;

  constructor(private router:Router, private listeService:ListeService) { }

  ngOnInit() {
    this.inputSouhaitLabel = "";
    this.liste = this.listeService.liste;
    this.liste.mail = this.liste.mail || "xiaoyu.sere@gmail.com";
    this.liste.titre = this.liste.titre || "Liste de test";
    if(this.liste.souhaits==null) {
      this.liste.souhaits=[];
      this.liste.souhaits.push(new Souhait("Table à langer"));
      this.liste.souhaits.push(new Souhait("Lit pliant"));
      this.liste.souhaits.push(new Souhait("Doudou"));
      this.liste.souhaits.push(new Souhait("Sophie la Girafe"));
    } else {
      if(!environment.production) {
        this.liste.souhaits.push(new Souhait("Lit pliant"));
        this.liste.souhaits.push(new Souhait("Doudou"));
        this.liste.souhaits.push(new Souhait("Sophie la Girafe"));
      }
    }
  }

  supprimerItem(label:string) {
    this.liste.souhaits.splice(this.liste.souhaits.indexOf(label), 1);
  }

  nextStep() {
    this.listeService.liste = this.liste;
    this.router.navigate(['creationEtape3']);
  }

  previousStep() {
    this.listeService.liste = this.liste;
    this.router.navigate(['creationEtape1']);
  }

  addItem() {
    let souhait = new Souhait();
    souhait.label = this.inputSouhaitLabel;
    souhait.participant = null;
    this.liste.souhaits.push(souhait);
    this.inputSouhaitLabel = "";
  }

}

import { Component, OnInit } from '@angular/core';
import {Liste} from "../model/liste";
import {ListeService} from "../services/liste.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-step1',
  templateUrl: './create-step1.component.html',
})
export class CreateStep1Component implements OnInit {

  public liste:Liste = new Liste();

  constructor(private router:Router, private listeService:ListeService) {

  }

  ngOnInit() {
    this.liste = new Liste();
    this.liste.mail = "xiaoyu.sere@gmail.com";
    this.liste.souhaits=[];
  }

  nextStep():void {

    // Sauvegarde du modele
    this.listeService.liste = this.liste;

    this.router.navigate(['creationEtape2']);
  }

  get diagnostic() { return JSON.stringify(this.liste); }
}

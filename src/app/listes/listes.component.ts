import { Component, OnInit } from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Liste} from "../model/liste";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
})
export class ListesComponent implements OnInit {


  private listes:Liste[];

  constructor(private router:Router, private listeService:ListeService) { }

  ngOnInit() {
    this.listeService.items.subscribe(liste => this.listes = liste);
  }

  goToListe(key:string) {
    let link = '/participer/1/'+encodeURIComponent(key);
    console.log(link);
    this.router.navigate([link]);
  }

}

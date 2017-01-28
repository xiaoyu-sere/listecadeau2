import { Component, OnInit } from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Liste} from "../model/liste";

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
})
export class ListesComponent implements OnInit {


  private listes:Liste[];

  constructor(private listeService:ListeService) { }

  ngOnInit() {
    this.listeService.items.subscribe(liste => this.listes = liste);
  }

}

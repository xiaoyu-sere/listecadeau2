import { Component, OnInit } from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Liste} from "../model/liste";

@Component({
  selector: 'app-participer-step2',
  templateUrl: './participer-step2.component.html',
})
export class ParticiperStep2Component implements OnInit {

  token = '';
  loading = false;
  liste = new Liste();

  constructor(private listeService: ListeService,
              private router: Router,
              private route: ActivatedRoute,
              private af: AngularFire,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.token = params['token']).subscribe(x => this.updateFilter());
  }

  updateFilter() {
    if (this.listeService.listes != null) {
      for (let uneListe of this.listeService.listes) {
        if (this.token == uneListe.$key) {
          this.liste = uneListe;
          this.loading = false;
        }
      }
    } else {
      this.listeService.items.subscribe(x => this.updateFilter());
    }
  }

}

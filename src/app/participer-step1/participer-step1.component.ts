import {Component, OnInit} from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {ActivatedRoute, Params}   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Liste} from "../model/liste";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-participer-step1',
  templateUrl: './participer-step1.component.html',
})
export class ParticiperStep1Component implements OnInit {

  token = '-Kbc1_q80C0JiCJ9pfSw';
  liste = new Liste();
  loading = true;
  participant = 'Julien';
  devmode = environment.production;

  constructor(private listeService: ListeService,
              private router: Router,
              private route: ActivatedRoute,
              private af: AngularFire,
              private location: Location,) {
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

  canValidate() {
    let result = false;
    if (this.participant.length > 0) {
      for (let souhait of this.liste.souhaits) {
        if (souhait.reserved) {
          result = true;
        }
      }
    }
    return result;
  }

  persistChange() {
    this.loading = true;
    let cleanedListe = Liste.copy(this.liste);
    this.listeService.items.update(this.liste.$key, cleanedListe).then(x => this.persistChangeOK(), r => this.persistChangeKO());
  }

  persistChangeOK() {
    this.loading = false;
    console.log('OK');
    this.router.navigate(['participer/2']);
  }

  persistChangeKO() {
    this.loading = false;
    console.log('KO');
  }

}

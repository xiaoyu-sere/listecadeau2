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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {

  token = '';
  liste = new Liste();
  loading = true;
  result = false;
  message = '';

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
          this.listeService.items.remove(uneListe.$key).then(suc => this.deleteOK(), err => this.deleteKO(err));
        }
      }
      this.loading = false;
    } else {
      this.listeService.items.subscribe(x => this.updateFilter());
    }
  }

  deleteOK() {
    this.result = true;
    this.loading = false;
    this.message = 'Suppression OK';
  }

  deleteKO(err) {
    this.result = false;
    this.loading = false;
    this.message = 'Erreur technique : ' + err.toString();
  }
}

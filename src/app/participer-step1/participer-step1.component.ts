import {Component, OnInit} from '@angular/core';
import {ListeService} from "../services/liste.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Liste} from "../model/liste";

@Component({
  selector: 'app-participer-step1',
  templateUrl: './participer-step1.component.html',
})
export class ParticiperStep1Component implements OnInit {

  token = '';
  items: FirebaseListObservable<any[]>;
  _liste:any;

  constructor(private listeService: ListeService,
              private router: Router,
              private route: ActivatedRoute,
              private af:AngularFire,
              private location: Location,) {
  }

  ngOnInit() {
    this.items = this.af.database.list('/listes');
    this.route.params.switchMap((params: Params) => this.token = params['token']).subscribe();
  }

  get liste() {
    return this._liste;
  }

  set liste(val:any) {
    this._liste = val;
  }

  updateFilter() {
    this.items.filter(value => value.id == this.token).map(value => this.liste = value);
  }

}

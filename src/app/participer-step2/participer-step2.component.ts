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

  constructor() {
  }

  ngOnInit() {
  }

}

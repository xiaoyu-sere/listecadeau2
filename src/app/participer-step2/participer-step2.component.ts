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
  mailString = '';
  liste = new Liste();

  constructor() {
    this.generateMailString();
  }

  ngOnInit() {
    this.mailString = this.generateMailString();
  }

  // mailto:xiaoyu.sere@gmail.com?Subject=Participation%20%E0%20votre%20liste&amp;Body=Bonjour%2C%20SOMEONE%20vient%20de%20participer%20%E0%20votre%20liste.%20Vous%20pouvez%20consulter%20le%20r%E9sultat%20via%20ce%20lien%20%3A%20http%3A//localhost%3A4200/%23/participer/1/-KbvHay-sVETQoGFTjJT

  generateMailString() {
    let mailstr = "";
    //mailstr.concat('mailto:', 'xiaoyu.sere@gmail.com');
    mailstr.concat('xiaoyu.sere@gmail.com');
    mailstr.concat('?Subject=', 'Participation Test Espace');
    mailstr.concat('&Body=', encodeURIComponent('Bonjour, quelque vient de participer à votre liste.'));
    mailstr.concat(encodeURIComponent('Vous pouvez la consulter à cette adresse : https://xiaoyu-sere.github.io/#/participer/1/'));
    mailstr.concat(encodeURIComponent(this.token));
    this.mailString = mailstr;
    return mailstr;
  }

}

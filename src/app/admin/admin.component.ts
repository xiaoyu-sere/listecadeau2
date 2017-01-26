import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Liste} from "../model/liste";
import {ListeService} from "../services/liste.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {

    this.items = this.af.database.list('/listes');

    this.items.push(new Liste(ListeService.generateRandomId(), "Test 1")).then(res => window.alert('res :' + res));

  }

}

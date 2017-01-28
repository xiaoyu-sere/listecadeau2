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
  selected:any;

  constructor(private af: AngularFire, private listeService:ListeService) {
  }

  ngOnInit() {
    this.items = this.af.database.list('/listes');
  }



}

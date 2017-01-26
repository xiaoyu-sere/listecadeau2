import {Injectable, Query} from '@angular/core';
import {Liste} from "../model/liste";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class ListeService {

  items: FirebaseListObservable<any[]>;

  constructor(private af:AngularFire) {
    this.items = this.af.database.list('/listes');
  }

  private _liste: Liste = new Liste(ListeService.generateRandomId(),"");

  get liste() {
    console.log("get liste");
    console.log(this._liste);
    return this._liste;
  }

  set liste(val: Liste) {
    console.log('set liste');
    console.log(val);
    this._liste = val;
  }

  public static generateRandomId(): string {
    return ListeService.randomString(32);
  }

  public static randomString(length: number) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  public persist(liste:Liste) {
    this.items.push(liste);
  }

  public exist(liste:Liste) {
    for(let item of this.items.) {

    }
  }
}

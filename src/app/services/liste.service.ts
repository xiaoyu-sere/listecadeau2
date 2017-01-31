import {Injectable, Query} from '@angular/core';
import {Liste} from "../model/liste";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Subscription, Observable} from "rxjs";
import ThenableReference = firebase.database.ThenableReference;

@Injectable()
export class ListeService {

  items: FirebaseListObservable<Liste[]>;
  _listes: Liste[];

  currentListe:any;

  constructor(private af:AngularFire) {
    this.items = this.af.database.list('/listes');
    this.items.subscribe(x => this.listes = x);
  }

  private _liste: Liste = new Liste();

  get liste() {
    console.log("get liste");
    console.log(this._liste);
    return this._liste;
  }

  get listes() {
    return this._listes;
  }

  set listes(val:any) {
    console.log('set listes');
    this._listes = val;
  }

  set liste(val: Liste) {
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

  public persist(liste:Liste):ThenableReference {
    return this.items.push(liste);
  }

  public exist(liste:Liste) {
    //this.items.subscribe(items => items.forEach(item => { if(item.id == liste.id) { console.log('liste trouve'); this.currentListe = item; } }));
    //return this.items.subscribe(items => items.find(item => item.id === liste.id));
  }

  public getListe(id:string):Observable<any> {
    return this.items.map(event => event.filter(value => value.id == id));
  }
}

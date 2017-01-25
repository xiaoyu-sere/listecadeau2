import { Component, OnInit } from '@angular/core';
import {Liste} from "../model/liste";

@Component({
  selector: 'app-create-step1',
  templateUrl: './create-step1.component.html',
})
export class CreateStep1Component implements OnInit {

  public model:Liste = new Liste();

  constructor() {

  }

  ngOnInit() {
    this.model = new Liste();
    this.model.souhaits=[];
  }

  get diagnostic() { return JSON.stringify(this.model); }
}

import { Component, OnInit } from '@angular/core';
import { Liste } from "../model/liste";

@Component({
  selector: 'app-create-step2',
  templateUrl: './create-step2.component.html',
})
export class CreateStep2Component implements OnInit {

  model:Liste;

  constructor() { }

  ngOnInit() {
  }

}

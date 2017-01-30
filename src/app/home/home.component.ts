import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createListOnClick(): void {
    this.router.navigate(['creationEtape1']);
  }

  listesOnClick(): void {
    this.router.navigate(['listes']);
  }

}

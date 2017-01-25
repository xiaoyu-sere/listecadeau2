import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfiguration } from '../environments/firebase';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { ListesComponent } from './listes/listes.component';
import { HomeComponent } from './home/home.component';
import { CreateStep1Component } from './create-step1/create-step1.component';
import { CreateStep2Component } from './create-step2/create-step2.component';
import { CreateStep3Component } from './create-step3/create-step3.component';
import { ParticiperStep1Component } from './participer-step1/participer-step1.component';
import { ParticiperStep2Component } from './participer-step2/participer-step2.component';
import { ParticiperStep3Component } from './participer-step3/participer-step3.component';
import { AdminComponent } from './admin/admin.component';
import 'hammerjs';
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ListesComponent,
    HomeComponent,
    CreateStep1Component,
    CreateStep2Component,
    CreateStep3Component,
    ParticiperStep1Component,
    ParticiperStep2Component,
    ParticiperStep3Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfiguration),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

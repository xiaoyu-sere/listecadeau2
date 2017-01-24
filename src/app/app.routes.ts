/**
 * Created by JulienSere on 24/01/2017.
 */
// Import our dependencies
import { Routes } from '@angular/router';
import {CreateStep1Component} from "./create-step1/create-step1.component";
import {CreateStep2Component} from "./create-step2/create-step2.component";
import {CreateStep3Component} from "./create-step3/create-step3.component";
import {ParticiperStep1Component} from "./participer-step1/participer-step1.component";
import {ParticiperStep3Component} from "./participer-step3/participer-step3.component";
import {ParticiperStep2Component} from "./participer-step2/participer-step2.component";
import {HomeComponent} from "./home/home.component";

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'home',   component: HomeComponent },
  { path: 'creation/1',       component: CreateStep1Component },
  { path: 'creation/2',       component: CreateStep2Component },
  { path: 'creation/3',       component: CreateStep3Component },
  { path: 'participer/1',       component: ParticiperStep1Component },
  { path: 'participer/2',       component: ParticiperStep2Component },
  { path: 'participer/3',       component: ParticiperStep3Component },
];

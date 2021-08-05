import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component'
import { from } from 'rxjs';
const routes: Routes = [ 
  // {path:'',component:CalculatorComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

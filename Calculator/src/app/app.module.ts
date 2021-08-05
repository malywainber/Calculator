import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CalculatorComponent} from './calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorModule } from './calculator/calculator.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  entryComponents:[CalculatorComponent],
  imports: [
    BrowserModule,
   HttpClientModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   CalculatorModule,
   FormsModule,
  //   RouterModule.forRoot([
      
  //     {path:"", redirectTo:"/home", pathMatch:"full"},
  //     { path: 'home', loadChildren: () => import('src/app/calculator/calculator.module').then(m => m.CalculatorModule)},
   
  // ])

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

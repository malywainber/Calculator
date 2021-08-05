import { Component,OnInit, HostListener } from '@angular/core';
import {CalculatorService} from 'core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Calculator';
  num1:number=0;
  num2:number=0;
  operator='+';
  sum?: number;
  Loading:boolean=false;
  viewHistory:boolean=false;
  calculation:any;
  operatotrsList =['+','-','*','/'];
  
  constructor(private calculatorService:CalculatorService) { }

  ngOnInit(): void {
    this.Loading=true;
    this.calculatorService.getAllCalc().subscribe(response => {
      this.Loading=false
      if (response) {
      
       this.calculation=response;
       
      }
      else {alert("Update Error");}
    },
      err => {this.Loading=false ;})
  
  }
  
updateCalculatr(calculatr:any){
  this.Loading=true;
  this.calculatorService.updateCalculatr(calculatr.ID,calculatr).subscribe(response => {
    this.Loading=false
    if (response) {
    
     this.calculation=response;
     
    }
    else {alert("Update Error");}
  },
    err => {this.Loading=false ;})

}
deleteCalculatr(calculatr:any){
  this.Loading=true;
  this.calculatorService.deleteCalculatr(calculatr.ID).subscribe(response => {
    this.Loading=false
    if (response) {
    
     this.calculation=response;
     
    }
    else {alert("Error deleting");}
  },
    err => {this.Loading=false ;})

}
 calc() {
   
    
 this.Loading=true;
    this.calculatorService.getCalc(this.num1,this.operator,this.num2).subscribe(response => {
      this.Loading=false
      if (response) {
      this.calculation=response;
        this.num1=response[response.length-1].Num1;
        this.num2=response[response.length-1].Num2;
        this.operator=response[response.length-1].Operator;
        this.sum=response[response.length-1].Sum;
       
      }
    },
      err => {this.Loading=false; })

  } 
 
  @HostListener('window:keyup', ['$event'])
  keyEvent(e: KeyboardEvent) {
   if ((e.which || e.keyCode) == 116){
       e.preventDefault(); 
   this.viewHistory=!this.viewHistory;
    }

    
  }
}

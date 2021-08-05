import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {CalculatorService} from 'core';
import { from } from 'rxjs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
@Input () calculation:any;
@Output () calculatrUpdate= new EventEmitter<any>();
@Output () calculatrDelete= new EventEmitter<any>();
  constructor(private calculatorService:CalculatorService) { }
  ngOnChanges(changes: SimpleChanges): void{}
  ngOnInit(): void {
  }
  
  update(calculatr:any){
    this.calculatrUpdate.emit(calculatr);
  }
  delete(calculatr:any){
    this.calculatrDelete.emit(calculatr);
  }
}

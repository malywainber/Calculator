import { Injectable } from '@angular/core';
import {BaseService} from './base.service'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private baseService:BaseService) { }
   basicUrl="http://localhost:5000/api/Calculator"

  getCalc(num1:number,operator1:string,num2:number): Observable<any> {
    let url =  `${this.basicUrl}/${num1}/${operator1}/${num2}` ;
    return this.baseService.httpGet(url, 'getCalc');
  }
  getAllCalc(): Observable<any> {
    let url =  `${this.basicUrl}` ;
    return this.baseService.httpGet(url, 'getAllCalc');
  }
  deleteCalculatr(id:number): Observable<any> {
    let url =  `${this.basicUrl}/${id}` ;
    return this.baseService.httpDelete(url, 'deleteCalculatr');
  }
  updateCalculatr(id:number,calculator:any): Observable<any> {
    let url =  `${this.basicUrl}` ;
    return this.baseService.httpPost(url,calculator, 'updateCalculatr');
  }
}

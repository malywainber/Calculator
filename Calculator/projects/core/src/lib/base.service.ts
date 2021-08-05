import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpClient, HttpHeaders, HttpParamsOptions} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
   HttpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json'}),withCredentials: true};
  constructor(private http: HttpClient) { }
  
  getAuthHeader(): any {
    let hdrs: HttpHeaders;
    
 
    hdrs = new HttpHeaders().set('Content-Type', 'application/json');
    return { headers: hdrs };
  }

  httpGet(url: string, actionName: string): Observable<any> {
    const hdr = this.getAuthHeader();
   // let allUrl=this.getBaseUrl+url;
 
    return this.http.get(url, this.HttpOptions)
      .pipe(
        catchError(error => this.handleError(error, actionName))
      );
  }
  httpPost(url: string,body:any, actionName: string): Observable<any> {
    const hdr = this.getAuthHeader();
    return this.http.post(url, body,this.HttpOptions)
      .pipe(
        catchError(error => this.handleError(error, actionName))
      );
  }
  httpDelete(url: string, actionName: string): Observable<any> {
    const hdr = this.getAuthHeader();
   
    return this.http.delete(url, this.HttpOptions)
      .pipe(
        catchError(error => this.handleError(error, actionName))
      );
  }
  handleError(error: any, methodName: string): Observable<any> {
    let errMsg: string;

    if (error.status === 303) {
     
      return throwError('303');
    }

    if (error.name === 'HttpErrorResponse') {
     
      return throwError('תקלה בגישה לשרת');
    }

    if (error instanceof HttpResponse) {
      const body = error.body;
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else if (error instanceof HttpErrorResponse) {
     errMsg = "";
      for (const [key, value] of Object.entries(error.error)) {
        errMsg = errMsg + `${key}: ${value}\n`;
      }

    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return throwError(errMsg);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private headers(){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return headers;
  }
  public generalService(url, method , req){
    if(method === 'post'){
      return this.http.post(url, req, {
        headers: this.headers()
      })
      .pipe(
        map((data: Response) => {
          return data;
        }),
        catchError(this.handleError)
      );
    }
    else if(method === 'get'){
      return this.http.get(url, {
        headers: this.headers()
      })
      .pipe(
        map((data: Response) => {
          return data;
        }),
        catchError(this.handleError)
      );
    }
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){

    }else{

    }
    return throwError(error.error);
  }
}

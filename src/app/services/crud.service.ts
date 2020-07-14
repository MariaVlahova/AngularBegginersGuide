import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Payload} from './payload';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
//this is our service class where we will make our HTTP requests
  baseUrl = 'enter-your-base-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
// this is dependancy injection
  constructor(private http: HttpClient) { }

  // // Create
  // createTask(data): Observable<any> {
  //   const url = `${this.baseUrl}/create-task`;
  //   return this.http.post(url, data)
  //     .pipe(
  //       catchError(this.error)
  //     );
  // }
  //
  // // Read
  // // tslint:disable-next-line:typedef
  // showTasks(): Observable<Payload>{
  //   return this.http.get(`${this.baseUrl}`).pipe(map(response:Response));
  // }
  //
  // // Update
  // updateTask(id, data): Observable<any> {
  //   const url = `${this.baseUrl}/update-task/${id}`;
  //   return this.http.put(url, data, { headers: this.headers }).pipe(
  //     catchError(this.error)
  //   );
  // }
  //
  // // Delete
  // deleteTask(id): Observable<any> {
  //   const url = `${this.baseUrl}/delete-task/${id}`;
  //   return this.http.delete(url).pipe(
  //     catchError(this.error)
  //   );
  // }
  //TODO read more about ANgular HHTP and then add proper info here

  getPayload(): Payload{
   return new Payload('3', 'test', 'test');
  }
  // Handle Errors
  // tslint:disable-next-line:typedef
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

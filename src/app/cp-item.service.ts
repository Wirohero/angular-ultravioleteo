import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CpItem } from './cp-item';
// import { CPITEMES } from './cp-items';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CpItemService {
  private cpItemsUrl = 'api/cpItems'; // URL to web api

  constructor(private http: HttpClient) {}

  /* getCpItems(): CpItem[] {
    return CPITEMES;
  } */

  /* getCpItems(): Observable<CpItem[]> {
    const cpItems = of(CPITEMES);
    return cpItems;
  } */

  getCpItems(): Observable<CpItem[]> {
    return this.http.get<CpItem[]>(this.cpItemsUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<CpItem[]>('getCpItems', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

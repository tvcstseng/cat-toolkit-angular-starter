// Angular Modules
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// RxJs
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '@core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  // notify data users asset has been modified
  @Output() dataModifiedEvent = new EventEmitter<string>();

  errorMessage = '';

  constructor(
    // Angular Modules
    private http: HttpClient,
    private authService: AuthService
  ) {}

  public getWithOptions = (url: string, options?: any): Observable<any> => this.http.get(url, options);

  public get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.authService.accessToken,
    });
    return this.http.get(url, { headers }).pipe(catchError((error: HttpErrorResponse) => of(this.handleError(error))));
  }

  // public post = (url: string, data: any, options?: any): Observable<any> => this.http.post(url, data, options);

  public post(url: string, data: any, options?: any): Observable<HttpErrorResponse | any> {
    // emit after the fact
    // this.dataModifiedEvent.emit(url);
    return this.http
      .post(url, data, options) // this._http.post<any>(url, data, {headers: headers})
      .pipe(
        map((result) => result),
        catchError((error: HttpErrorResponse) => of(this.handleError(error)))
      );
  }

  public put = (url: string, data: any, options?: any): Observable<any> => this.http.put(url, data, options);

  public delete = (url: string, options?: any): Observable<any> => this.http.delete(url, options);

  private handleError(error: HttpErrorResponse): HttpErrorResponse {
    console.error(error.status, error.message);
    this.errorMessage = `${error.status} - ${error.statusText}`;
    return error;
  }
}

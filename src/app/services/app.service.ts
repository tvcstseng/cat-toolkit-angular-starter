// import { Injectable } from '@angular/core';
// // import {Cookie} from 'ng2-cookies';
// import {
//   HttpClient,
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpHeaders,
//   HttpRequest,
//   HttpResponse,
// } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
//
// export class Foo {
//   constructor(public id: number, public name: string) {}
// }
//
// @Injectable()
// export class AppService {
//   public clientId = 'registration-client';
//   public redirectUri = 'http://localhost:8081/';
//   public client_scopes = 'openid%20profile%20avatar_url%20DOB%20phone%20roles%20user_client_scope%20email';
//   errorMessage: string;
//
//   constructor(private _http: HttpClient) {}
//
//   retrieveToken(code: any) {
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('client_id', this.clientId);
//     // params.append('client_secret', 'newClientSecret');
//     params.append('redirect_uri', this.redirectUri);
//     params.append('code', code);
//
//     const headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
//     this._http
//       .post('http://localhost:8080/auth/realms/VoucherKeycloak/protocol/openid-connect/token', params.toString(), {
//         headers,
//       })
//       .subscribe(
//         (data) => this.saveToken(data),
//         (err) => alert('Invalid Credentials')
//       );
//   }
//
//   saveToken(token: any) {
//     const expireDate = new Date().getTime() + 1000 * token.expires_in;
//     Cookie.set('access_token', token.access_token, expireDate);
//     Cookie.set('id_token', token.id_token, expireDate);
//     console.log('Obtained Access token');
//     window.location.href = 'http://localhost:8081';
//   }
//
//   getResource(resourceUrl: any): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
//       Authorization: 'Bearer ' + Cookie.get('access_token'),
//     });
//     return this._http.get(resourceUrl, { headers }).pipe(
//       map((result) => result),
//       catchError((error: HttpErrorResponse) => of(this.handleError(error)))
//     );
//   }
//
//   upload(url: any, data: any): Observable<HttpErrorResponse | any> {
//     return this._http.post<any>(url, data).pipe(
//       map((result) => result),
//       catchError((error: HttpErrorResponse) => of(this.handleError(error)))
//     );
//   }
//
//   checkCredentials() {
//     return Cookie.check('access_token');
//   }
//
//   logout() {
//     const token = Cookie.get('id_token');
//     Cookie.delete('access_token');
//     Cookie.delete('id_token');
//     window.location.href =
//       'http://localhost:8080/auth/realms/VoucherKeycloak/protocol/openid-connect/logout?id_token_hint=' +
//       token +
//       '&post_logout_redirect_uri=' +
//       this.redirectUri;
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = Cookie.get('id_token');
//     //   const  newReq= req.clone({headers: req.headers.set('source', 'WEB')});
//     const newReq = req.clone({
//       headers: new HttpHeaders({
//         source: 'WEB',
//         Authorization: token || '',
//       }),
//     });
//     return next.handle(newReq).pipe(
//       map((e: HttpEvent<any>) => {
//         if (e instanceof HttpResponse) {
//           /*        console.error(e);
//                 console.log(e.status);*/
//           if (e.status === 401) {
//             throw new Error('invalid token');
//           }
//         }
//         return e;
//       })
//     );
//   }
//
//   private handleError(error: HttpErrorResponse): HttpErrorResponse {
//     console.error(error.status, error.message);
//     this.errorMessage = `${error.status} - ${error.statusText}`;
//     return error;
//   }
// }

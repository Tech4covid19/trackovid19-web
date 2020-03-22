import { throwError, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  constructor() {}

  private AUTH_HEADER = 'Authorization';
  private token =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMTA0NDYyNTg3ODU4NTg3IiwibmFtZSI6IkRpY2sgQWxkaGhkZWNoamliYSBaYW1vcmVtYW4ifSwicm9sZXMiOlsidXNlciJdLCJpYXQiOjE1ODQ1NjU3MzcsImV4cCI6MTU4NDY1MjEzN30.LY494RM1VYDS51bao912iecSHRtm-du6L6QO9uuwQ1v-h4_dL4VBIevZT3z4OiZK7n28g1mGs3VidLZMTkMsEOPVKXF4QKAf1YYvsIG-eKhVg4ZKNql_Rw8SJHQiqRi8bPAgr8EudTUSVZP2EgEGu2NI1hH40XkkdFoq1PXv0HJkRiL17c87VbbnJbSifq1gUZup4sjEz_AQqmLNGwGRjLekNxmoSzSTG2HA-0z-_0eGjHahXcQVvce4yULjgAKN1wOUuAUHIYY8X1yrV2ieW1E2pcmxrq6nUP0WY-TKi2qZme7IWPUlGaPCj8kKO7WHZCF6Q3l4_6_EMN1ALQ0r3A';
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    req = this.addAuthenticationToken(req);

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // 401 errors are most likely going to be because we have an expired token that we need to refresh.
          if (this.refreshTokenInProgress) {
            // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
            // which means the new token is ready and we can retry the request again
            return this.refreshTokenSubject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => next.handle(this.addAuthenticationToken(req))),
            );
          } else {
            this.refreshTokenInProgress = true;

            // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
            this.refreshTokenSubject.next(null);

            return this.refreshAccessToken().pipe(
              switchMap((success: boolean) => {
                this.refreshTokenSubject.next(success);
                return next.handle(this.addAuthenticationToken(req));
              }),
              // When the call to refreshToken completes we reset the refreshTokenInProgress to false
              // for the next time the token needs to be refreshed
              finalize(() => (this.refreshTokenInProgress = false)),
            );
          }
        } else {
          return throwError(error);
        }
      }),
    );
  }

  private refreshAccessToken(): Observable<any> {
    return of('secret token');
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    if (!this.token) {
      return request;
    }
    // If you are calling an outside domain then do not add the token.
    //   if (!request.url.match(/www.mydomain.com\//)) {
    //     return request;
    //   }
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + `${this.token}`),
    });
  }
}

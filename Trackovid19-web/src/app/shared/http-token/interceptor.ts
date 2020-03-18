import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap, finalize } from "rxjs/operators";

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
@Injectable()

export class TokenHttpInterceptor implements HttpInterceptor{
    constructor() {}

    private AUTH_HEADER = "Authorization";
    private token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMjkyMTY3MjIzNDU2MjcyMCIsIm5hbWUiOiJKb8OjbyBEdWFydGUifSwicm9sZXMiOlsidXNlciJdLCJpYXQiOjE1ODQ0MDcwNjcsImV4cCI6MTU4NDQ5MzQ2N30.XCDH2EpKJPW7V5iXCuAsvS-w7e5449maVT_hIUXnOZ0jip24_VVsgn6I_W1oqViNmp-lJpQxS8FFv2APUJjBbsAkVu5z6Yw3CJgHBb0fBAIKoEOmDVooWm18zdEIQbl_DFeSo73lOD56YDo3W3eY7burGMT40h1Ul_C6161KvBG32Ux8tRCqPLUPMfNehL7pSRe10B90NABQU1CywHqe7rpCmZOcBqsvgzzZAqM6AGXXo26pMCrm9jlGJLOv94syHALK4ds0VJHLRk-KpMD9nUUoeF9ny8nromAILPDOG0BjzY403LAvoJ2h7CydHYsCuWVf6NU0ZxaqiZ4thvk2Ow'
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      if (!req.headers.has('Content-Type')) {
        req = req.clone({
          headers: req.headers.set('Content-Type', 'application/json')
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
                switchMap(() => next.handle(this.addAuthenticationToken(req)))
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
                finalize(() => this.refreshTokenInProgress = false)
              );
            }
          } else {
            return throwError(error);
          }
        })
      );
    }
  
    private refreshAccessToken(): Observable<any> {
      return of("secret token");
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
        headers: request.headers.set(this.AUTH_HEADER, "Bearer " + `${this.token}`)
      });
    }
  }

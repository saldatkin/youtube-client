import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CREDENTIALS_KEY } from 'src/app/shared/constants';

@Injectable()
export class UrlKeyAdderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const generalRequest = request.clone({
      url: `${request.url}&key=${CREDENTIALS_KEY}`,
    });

    return next.handle(generalRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post(`${environment.apiUrl}push/web/register`, { subscription: sub });
  }
}

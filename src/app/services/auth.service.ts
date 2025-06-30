import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage/storage.service';
import { UrlService } from './url/url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  doLogin(params: any): Observable<any> {
    return this.http.post(this.urlService.postLoginUrl(), params);
  }

  doRegister(params: any): Observable<any> {
    return this.http.post(this.urlService.postRegisterUrl(), params);
  }

  isLoggedIn(): boolean {
    let token = this.storageService.singleTonService("authToken");
    if (token) {
      return true;
    } else {
      token = this.storageService.getPermanentStorage("authToken");
      if (token) {
        this.storageService.setTosingleTonService("authToken", token);
        this.storageService.setTosingleTonService("userInfo", this.storageService.getPermanentStorage("userInfo"));
        return true;
      } else {
        return false;
      }

    }
  }

  getToken(): string {
    let token = this.storageService.singleTonService("authToken");
    if (token) {
      return token;
    } else {
      token = this.storageService.getPermanentStorage("authToken");
      return token;
    }
  }
}
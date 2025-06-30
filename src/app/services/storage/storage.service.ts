import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private singletnData: any = {};
  constructor() { }

  setToPermanentStorage(key: string, value: any): Boolean {
    localStorage.setItem(key, value);
    return true;
  }

  getPermanentStorage(key: string): any {
    return localStorage.getItem(key);
  }

  removePermanentStorage(key: string): any {
    return localStorage.removeItem(key);
  }

  setToTempStorage(key: string, value: any): Boolean {
    sessionStorage.setItem(key, value);
    return true;
  }

  getTempStorage(key: string): any {
    return sessionStorage.getItem(key);
  }

  removeTempStorage(key: string): any {
    return sessionStorage.removeItem(key);
  }

  singleTonService(key: string): any {
    return this.singletnData[key];
  }

  setTosingleTonService(key: string, value: any): any {
    this.singletnData[key] = value;
    return this.singletnData[key];
  }
}

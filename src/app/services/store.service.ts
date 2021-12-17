import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  putJson(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
  }

  getJson(key: string){
    let value = localStorage.getItem(key);
    if(value){
      return JSON.parse(value);
    }
    return value;
  }

  put(key: string, value: string){
    localStorage.setItem(key, value);
  }

  get(key: string){
    return localStorage.getItem(key)
  }


}

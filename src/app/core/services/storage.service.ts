import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setData(key:string,value:any):void
  {
    const strigidData=JSON.stringify(value);
    localStorage.setItem(key,strigidData);
  }
  public getData(key:string):any
  {
    const rawdata=localStorage.getItem(key);
    if(!rawdata) return;
    const data=JSON.parse(rawdata);
    return data;
  }
  public deleteData(key:string):void
  {
    localStorage.removeItem(key);
  }
}

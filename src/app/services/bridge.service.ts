import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private internalHikesId: string ='';
  private intSearchRes: string ='';
  constructor() {
  }

  get hikesId(): string {
    return this.internalHikesId;
  }

  set hikesId(hikesId: string) {
    this.internalHikesId = hikesId;
  }

  get searchRes(): string {
    return this.searchRes;
  }

  set searchRes(searchRes: string) {
    this.intSearchRes = searchRes;
  }
}

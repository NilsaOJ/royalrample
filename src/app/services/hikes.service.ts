import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HikeAPI} from "../models/hikes-api";

@Injectable({
  providedIn: 'root'
})
export class HikesService {

  constructor(private http: HttpClient) {}

  getHikes() {
    let url = `https://download.data.grandlyon.com/ws/grandlyon/evg_esp_veg.envpdiprboucle/all.json`;
    return this.http.get<HikeAPI>(url);
  }
}

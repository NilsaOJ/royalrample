import { Component, OnInit } from '@angular/core';
// import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";
// import {IFavorite} from "../../models/favorites";
// import {HikeAPI} from "../../models/hikes-api";
// import {FavoritesService} from "../../services/favorites.service";
// import {BridgeService} from "../../services/bridge.service";
// import {Observable} from "rxjs";
// import {HikesService} from "../../services/hikes.service";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  // private collection: AngularFirestoreCollection<IFavorite>;
  // private idList: Observable<IFavorite[]>;
  // hikes: HikeAPI[] = [];
  // constructor(private favoritesService: FavoritesService, private bridgeService: BridgeService, private hikesService: HikesService, private router: Router) {
  //   this.collection = this.favoritesService.getHikesFavoriteList(this.bridgeService.hikesId);
  //   if (this.bridgeService.hikesId) {
  //     this.collection = this.favoritesService.getHikesFavoriteList(this.bridgeService.hikesId);
  //     this.idList = db.doc.valueChanges();
  //     this.idList.subscribe(favorites => {
  //       // Fetch favorites
  //       favorites.forEach(hike => {
  //         if (hike.type === 'rando') {
  //           this.hikesService.getHike(hike.id).subscribe(movie => {
  //             this.hikes.push(movie);
  //           });
  //         }
  //       });
  //     });
  //   } else {
  //     this.router.navigate(['']);
  //   }
  // }

  ngOnInit(): void {
  }

}

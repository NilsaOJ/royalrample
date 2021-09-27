import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, Query } from '@angular/fire/firestore';
import { IFavorite } from '../models/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  readonly collectionName = 'favorites';

  constructor(private firestore: AngularFirestore) {
  }

  getUserFavoriteList(userId: string, query?: Query): AngularFirestoreCollection<IFavorite> {
    return this.firestore.collection<IFavorite>(`users/${userId}/${this.collectionName}`, query);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hike } from 'src/app/models/hike';
import { HikesService } from 'src/app/services/hikes.service';

declare const L: any;

@Component({
  selector: 'app-details-hikes',
  templateUrl: './details-hikes.component.html',
  styleUrls: ['./details-hikes.component.scss']
})
export class DetailsHikesComponent implements OnInit {

  idHike: number | undefined;
  hikes: any;
  hike : Hike | undefined;
  latLong : number[] | undefined;

  constructor(private hikeService: HikesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getHike(Number(id));
  }
  
  getHike(id: number) {
    this.hikeService.getHikes().subscribe((res) => {
        this.hike = res.values[id];
        console.log('position gethike :' + res.values[id].ydepart+", "+ res.values[id].xdepart);
        let latLong = [res.values[id].ydepart, res.values[id].xdepart];
        let mymap = L.map('map').setView(latLong, 13);
        L.tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token',
          }
        ).addTo(mymap);
  
        let marker = L.marker(latLong).addTo(mymap);
    });
  }
}
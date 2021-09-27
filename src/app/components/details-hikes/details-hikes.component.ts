import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hike } from 'src/app/models/hike';
import { HikesService } from 'src/app/services/hikes.service';

@Component({
  selector: 'app-details-hikes',
  templateUrl: './details-hikes.component.html',
  styleUrls: ['./details-hikes.component.scss']
})
export class DetailsHikesComponent implements OnInit {

  idHike: number | undefined;
  hikes: any;
  hike : Hike | undefined;

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
    });
  }
}

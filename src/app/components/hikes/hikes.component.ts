import { Component, OnInit } from '@angular/core';
import { Hike } from 'src/app/models/hike';
import {HikesService} from "../../services/hikes.service";

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.scss']
})
export class HikesComponent implements OnInit {
  nbreHikes: number | undefined;
  hikes: any;

  constructor(private hikeService: HikesService) { }

  ngOnInit(): void {
    this.getHikes()
  }

  getHikes() {
    this.hikeService.getHikes().subscribe((res) => {
      this.hikes = res.values;
      this.nbreHikes = res.nb_results;
    });
  }
  getIndex(hike: Hike) {
    this.hikeService.getHikes().subscribe((res) => {
      this.hikes = res.values.indexOf(hike);
    });
  }
  toggleToMyTodoHikes($event: any) {

  }
}

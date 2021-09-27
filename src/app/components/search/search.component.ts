import { Component, OnInit } from '@angular/core';
import {HikesService} from "../../services/hikes.service";
import {FormSearchHikes} from "../../models/form-search-hikes";
// import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hikes: any;
  nbreHikes: number| undefined;
  formSearchHikes = new FormSearchHikes('');
  // faOptinMonster = faOptinMonster;

  constructor(private hikeService: HikesService) { }

  ngOnInit(): void {
    this.getHikes();
  }

  getHikes() {
    this.hikeService.getHikes().subscribe((res) => {
      this.hikes = res.values;
      this.nbreHikes = res.nb_results;
    });
  }

  search(nameHikes: any) {
    const regex = new RegExp(nameHikes, 'gi');
    this.hikes = this.hikeService.getHikes().subscribe((res) => {
      this.hikes = res.values.filter((hike) =>
        hike.nom.match(regex)
      );
    });
  }

  cancelSearch() {
    this.hikes = this.hikeService.getHikes().subscribe(res => {
      this.hikes = res.values
    });
    this.formSearchHikes.setNom('')
  }
}

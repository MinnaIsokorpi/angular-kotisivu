import { Component, OnInit } from '@angular/core';
import { HobbiesData } from '../dataClasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  datas: HobbiesData[];

  constructor(private hpservice: HomepageService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.hpservice
      .getHobbiesData()
      .subscribe((hobbiesdata) => (this.datas = hobbiesdata));
  }
}

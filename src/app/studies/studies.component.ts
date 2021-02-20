import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { StudiesData } from '../dataClasses';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  datas: StudiesData[];

  constructor(private hpservice: HomepageService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.hpservice
      .getStudiesData()
      .subscribe((studiesdata) => (this.datas = studiesdata));
  }
}

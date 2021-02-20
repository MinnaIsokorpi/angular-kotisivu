import { Component, OnInit } from '@angular/core';
import { MeData } from '../dataClasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  datas: MeData[];

  constructor(private hpservice: HomepageService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.hpservice.getMeData().subscribe((medatas) => (this.datas = medatas));
  }
}

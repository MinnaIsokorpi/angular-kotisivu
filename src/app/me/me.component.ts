import { Component, OnInit } from '@angular/core';
import { MeData } from '../dataClasses';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  myDatas: MeData[] = [
    { id: 1, info: 'Opintovapaalla' },
    {
      id: 2,
      info: 'Istuu ikkunalla ja koodaa javaa (terveiset Jyväskylään Vesalle)',
    },
    { id: 3, info: 'On talvi' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

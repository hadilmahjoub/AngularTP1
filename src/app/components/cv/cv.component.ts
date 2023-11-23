import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv = new Cv();

  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(
        0,
        'Mahjoub',
        'Hadil',
        'rotating_card_profile.png',
        'Student',
        12345678,
        22
      ),
      new Cv(
        1,
        'Omri',
        'Wejden',
        'rotating_card_profile.png',
        'Student',
        11223344,
        22
      ),
    ];
  }

  selectCv(cv: any){
    this.selectCv = cv;
  }
}

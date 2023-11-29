import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv!: Cv ;

  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(
        0,
        'Mahjoub',
        'Hadil',
        'cv_profile_2.png',
        'Student',
        12345678,
        22
      ),
      new Cv(1, 'Omri', 'Wejden', 'cv_profile_1.png', 'Student', 11223344, 22),
      new Cv(2, 'Unknown', 'Test', ' ', 'None', 666666666, 99),
    ];

    // this.selectCv(this.cvs[0]);
  }

  selectCv(cv: any) {
    this.selectedCv = cv;
  }
}

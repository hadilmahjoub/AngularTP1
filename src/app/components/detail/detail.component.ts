import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isHidden = true;
  @Input() cv: Cv = new Cv();

  constructor(){}

  ngOnInit(): void {
      
  }
}

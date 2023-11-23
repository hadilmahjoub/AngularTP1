import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = new Cv();

  @Output() selectedCv = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectCv(){
    this.selectedCv.emit(this.cv);
  }
}

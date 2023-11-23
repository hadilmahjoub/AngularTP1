import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cvs: Cv[] = [];

  @Output() selectedCv = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectCv(selectedCv: any){
    console.log(selectedCv);
    
    this.selectedCv.emit(selectedCv);
  }
}

// DONE
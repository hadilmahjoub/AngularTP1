import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  defaultColor = 'black';
  color = 'black';
  test:string='init value';

  updateColor(newColor: string) {
    this.color = newColor;
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}

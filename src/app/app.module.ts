import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';

import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CvComponent } from './components/cv/cv.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { RainbowInputComponent } from './components/rainbow-input/rainbow-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarteVisiteComponent,
    PereComponent,
    FilsComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    CvComponent,
    DefaultImagePipe,
    MiniWordComponent,
    RainbowDirective,
    RainbowInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

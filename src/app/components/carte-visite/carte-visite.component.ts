import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent {
  nom: string = 'Nom';
  prenom: string = 'Prenom';
  job: string = 'Job';
  image: string = 'rotating_card_profile.png';
  favCit: string = 'Citation Favorite';
  jobDesc: string = 'Description du travail';
  jobKeywords: string = 'HTML CSS JS PHP Symphony Angular';
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  appareilsList =[{
    name : 'Machine a laver',
    description :[
      'Volume : 6 litres',
      'Temps de lavage : 2 heures',
      'Consommation : 173 Kwh/an'

    ],
    isOn:true
  },
  {
    name : 'Télévision',
    description :[
      'Dimensions : 40 pouces',
      'Consommation : 22 Kwh/an'
    ],
    isOn:true

  },
  {
    name: 'Ordinateur',
    description: [
    'Marque: fait maison',
    'Consommation: 500 kWh/an'
    ],
    isOn:false

    }
  ];

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }
  async onToggleLights(){
    const alert = await this.alertController.create({
      header: 'Etes-vous certain(e) de vouloir continuer?' ,
      subHeader:'...',
      message: 'Cette action allumera ou eteindra toutes les lumières de la maison! ',
      buttons :[
        {
          text:'Annuler',
          role:'cancel',
          handler: ()=>console.log('annuler !')
          
        },
        {
          text:'Confimer',
          handler: ()=>console.log('Confimré!'),
          
        }
      ],
    });
    await alert.present();
  }

}

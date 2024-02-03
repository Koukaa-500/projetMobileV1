import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Appareil } from 'src/model/appareil';
import { AppareilsService } from 'src/services/appareils.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  index : number | undefined;
  appareil! : Appareil;
  
  constructor(private router : Router , private route : ActivatedRoute , public appareilService : AppareilsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
      this.index = params["index"];
      console.log(`index: ${this.index}`);
      this.appareil = this.appareilService.appareilsList[this.index!]
      console.log(this.appareil);
      }
    });
  }
  
  onToggleAppareil(){
    this.appareil.isOn = !this.appareil?.isOn;
  }
  
  
}

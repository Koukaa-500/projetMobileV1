import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {Appareil} from 'src/model/appareil';
import {AppareilsService} from 'src/services/appareils.service';
@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {
  
appareilsList : Appareil [] | undefined ;
  constructor(private router : Router , private appareilService : AppareilsService) { }

  
  
  ngOnInit() {
    //this.name = this.route.snapshot.queryParamMap.get('name')!;
    console.log("...");
    
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter ...");
    this.appareilsList = this.appareilService.appareilsList.slice();
    console.log(this.appareilsList);
    
    
  }
  navigateWithParams(){
    this.router.navigateByUrl('/single-appareil?name="Machine à laver"');
  }

  navigateWithState(){
    const NavigationExtras : NavigationExtras={
      state :{
        user :{
          id:1,
          name: 'Machine à laver',
        },
      },
    };
    this.router.navigateByUrl('single-appareil',NavigationExtras)
  }
  onLoadAppareil(index :number) {
    console.log(`onLoadAppareil index :${index}`);
    const params: NavigationExtras = {
      queryParams: {
        index :index
      }
    }
    
      this.router.navigate(['single-appareil'], params);
    
  }
  
  
}

import { Component, OnInit,EventEmitter,  Output } from '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';

import { PushNotificationService } from './push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
 
  title = 'pwa';
  items:  Array<Item>;

  constructor(private  apiService:  ApiService,private pushservice: PushNotificationService){
  }

  ngOnInit(){
    this.fetchData();
    this.notify();
    }

    fetchData(){
      this.apiService.fetch().subscribe((data:  Array<Item>)=>{
      console.log(data);
      this.items  =  data;
      }, (err)=>{
      console.log(err);
      });
      }

      notify() {
        let data: Array < any >= [];
        data.push({
            "title": "Approval",
            "alertContent": "This is First Alert -- By Debasis Saha"
        });

        this.pushservice.generateNotification(data);

}
}

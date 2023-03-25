import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:  `<div [ngClass]="{fadeOut:disableNotification}"> 
                This is an sample notification {{sample}}of the learning purpose
                <div class="close"><button class="btn" (click)="closeNotification()">X</button> </div>
                </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", 
              "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}",
              ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
sample:string="nikhil";
disableNotification:boolean=false;
closeNotification(){
  this.disableNotification=true;
}
}

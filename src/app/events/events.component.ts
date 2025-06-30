import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../services/message/message.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  public celebEvents: any = [];

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) { }

  paymentFrm = this.formBuilder.group({ 
    eventName: ['', [Validators.required, Validators.minLength(6)]],
    amount:[]
   
  });

  ngOnInit() {
    this.getCelebEvents();
  }

  getCelebEvents() {
    this.apiService.getCelebEvents().subscribe(res => {
      if (res.success) {
        this.celebEvents = res.data.my_events;
         console.log(res.data.my_events);
        
      }
    });
  }

  public submit(): void {
    //console.log(this.changpassForm.value);

    /*this.apiService.doInviteFrnd(this.invitefrndForm.value).subscribe(res => {
      if (res.success) {
        //this.router.navigate(['login']);
        this.messageService.presentAlertChangePassSucc('Add New Vehicle', 'Vehicle added successfully.');
        this.router.navigate(['dashboard']);
      } else {
        //this.messageService.presentToast("Please check your credentials and try again");
        this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
      }
    });*/
    this.messageService.presentAlertChangePassSucc('Payment', 'Integrated After payment Gateway.');

  }
  triggerEvent(event) {
    if(event.target.value!="")
      this.paymentFrm.controls['amount'].setValue(event.target.value.split("#")[1]);
  }

}

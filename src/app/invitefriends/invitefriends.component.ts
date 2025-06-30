import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api/api.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-invitefriends',
  templateUrl: './invitefriends.component.html',
  styleUrls: ['./invitefriends.component.scss'],
})
export class InvitefriendsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }

  invitefrndForm = this.formBuilder.group({ 
    district: ['', [Validators.required, Validators.minLength(6)]],
    vehicleNo: ['', [Validators.required]],

  });

  ngOnInit() {}

  public submit(): void {
    //console.log(this.changpassForm.value);

    this.apiService.doInviteFrnd(this.invitefrndForm.value).subscribe(res => {
      if (res.success) {
        //this.router.navigate(['login']);
        this.messageService.presentAlertChangePassSucc('Add New Vehicle', 'Vehicle added successfully.');
        this.router.navigate(['dashboard']);
      } else {
        //this.messageService.presentToast("Please check your credentials and try again");
        this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
      }
    });

  }

}

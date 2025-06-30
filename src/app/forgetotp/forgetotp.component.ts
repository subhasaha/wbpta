import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

import { ApiService } from '../services/api/api.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-forgetotp',
  templateUrl: './forgetotp.component.html',
  styleUrls: ['./forgetotp.component.scss'],
})
export class ForgetotpComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }

  forgetotpForm = this.formBuilder.group({
    forgetotp: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {}

  public submit(): void {
    //console.log(localStorage.getItem('forgetpassemail'));
    //localStorage.setItem('forgetpassemail', this.forgetotpForm.value.email);

    let passObj={
      'email': localStorage.getItem('forgetpassemail'),
      'otp': this.forgetotpForm.value.forgetotp,
     }

    this.apiService.doCheckForgetpassotp(passObj).subscribe(res => {
      if (res.success) {
        console.log(res.data.user_id);
        //profile status will come from response
        //profile complete then go to dashboard else sent to celebrity registration
        localStorage.removeItem('forgetpassemail');
        localStorage.setItem('forgetpassuserID', res.data.user_id);
        this.router.navigate(['forgetreset']);
      } else {
        this.messageService.presentToast("Please check your credentials and try again");
      }
    });

  }

}

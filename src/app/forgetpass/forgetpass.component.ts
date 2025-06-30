import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

import { ApiService } from '../services/api/api.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss'],
})
export class ForgetpassComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }

  forgetpassForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  });

  ngOnInit() {}

  public submit(): void {
    //console.log(this.forgetpassForm.value);

    localStorage.setItem('forgetpassemail', this.forgetpassForm.value.email);

    let passObj={
      'email': this.forgetpassForm.value.email,
     }

    this.apiService.doSendForgetpassotp(passObj).subscribe(res => {
      if (res.success) {
        //profile status will come from response
        //profile complete then go to dashboard else sent to celebrity registration
        this.router.navigate(['forgetotp']);
      } else {
        this.messageService.presentToast("Please check your credentials and try again");
      }
    });

  }

}

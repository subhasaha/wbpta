import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

import { ApiService } from '../services/api/api.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-forgetreset',
  templateUrl: './forgetreset.component.html',
  styleUrls: ['./forgetreset.component.scss'],
})
export class ForgetresetComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }

  forgetresetForm = this.formBuilder.group({
    newpassword: ['', [Validators.required, Validators.minLength(6)]],
    confpassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {}

  public submit(): void {
    //console.log(localStorage.getItem('forgetpassemail'));
    //localStorage.setItem('forgetpassemail', this.forgetotpForm.value.email);

    let passObj={
      'user_id': localStorage.getItem('forgetpassuserID'),
      'new_password': this.forgetresetForm.value.newpassword,
     }

    this.apiService.doChangeForgetpass(passObj).subscribe(res => {
      if (res.success) {
        //profile status will come from response
        //profile complete then go to dashboard else sent to celebrity registration
        localStorage.removeItem('forgetpassuserID');
        this.router.navigate(['login']);
      } else {
        this.messageService.presentToast("Please check your credentials and try again");
      }
    });

  }

}

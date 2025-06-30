import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message/message.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  hide:boolean=true;
  isTextFieldType: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }
  

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });



  public submit(): void {
    this.authService.doLogin(this.loginForm.value).subscribe(res => {
      if (res.success) {
        //console.log('AAAA');
        this.storageService.setToPermanentStorage("authToken", res.data.auth_token);
        this.storageService.setToPermanentStorage("userInfo", JSON.stringify(res.data));
        this.storageService.setTosingleTonService("authToken", res.data.auth_token);
        this.storageService.setTosingleTonService("userInfo", JSON.stringify(res.data));
        //profile status will come from response
        //profile complete then go to dashboard else sent to celebrity registration
        this.router.navigate(['dashboard']);
      } else {
        //console.log('Login Fail'); 

        //this.messageService.presentToast("Please check your credentials and try again");

        this.messageService.presentAlert('Login Failed', 'Please check your credentials and try again');

      }
    });
  }

}

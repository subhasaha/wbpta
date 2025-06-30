import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
//mport { AbstractControl, ValidationErrors } from "@angular/forms"

import { ApiService } from '../services/api/api.service';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message/message.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})


export class ChangePasswordComponent implements OnInit {

  passObjToUpdate:any={};
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private storageService: StorageService,
    private apiService: ApiService
  ) {}

  changpassForm = this.formBuilder.group({
    oldpassword: ['', [Validators.required, Validators.minLength(6)]],
    newpassword: ['', [Validators.required, Validators.minLength(6)]],
    confpassword: ['', [Validators.required]],
  }, { validators: [this.ConfirmedValidator("newpassword", "confpassword")]
  });
   

  /*ConfirmedValidator(controlName: string, matchingControlName: string){
    return (control: AbstractControl): ValidationErrors | null => {
        const input = control.get(controlName);
        const matchingInput = control.get(matchingControlName);

        if (input === null || matchingInput === null) {
            return null;
        }

        if (matchingInput?.errors && !matchingInput.errors.confirmedValidator) {
            return null;
        }

        if (input.value !== matchingInput.value) {
            matchingInput.setErrors({ confirmedValidator: true });
            return ({ confirmedValidator: true });
        } else {
            matchingInput.setErrors(null);
            return null;
        }
    };
}*/

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return null;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
            return ({ confirmedValidator: true });  
        } else {
            matchingControl.setErrors(null);
        } 
    }
}



  ngOnInit() {}

  public submit(): void {
    //console.log(this.changpassForm.value);
    let passObj={
     'old_password': this.changpassForm.value.oldpassword,
     'new_password': this.changpassForm.value.newpassword,

    }
    this.apiService.doChangePass(passObj).subscribe(res => {
      if (res.success) {
        //profile status will come from response
        //profile complete then go to dashboard else sent to celebrity registration
        //this.router.navigate(['login']);
        this.messageService.presentAlertChangePassSucc('Password Change', 'Password successfully change');
      } else {
        //this.messageService.presentToast("Please check your credentials and try again");
        this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
      }
    });

  }

}

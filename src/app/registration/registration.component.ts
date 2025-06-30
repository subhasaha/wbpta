import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
    ) { }

  private trueFormControl = new FormControl(true);
  private falseFormControl = new FormControl(false);

  get fullname() {
    return this.registrationForm.get('fullname');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get vehicleNo() {
    return this.registrationForm.get('vehicleNo');
  }

  get district() {
    return this.registrationForm.get('district');
  }

  


  public errorMessages = {
    fullname: [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name cant be shorter than 16 charecters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please Enter a Valid EmailAddress' }
    ],
    phone: [
      { type: 'required', message: 'Phone Number is required' },
      { type: 'pattern', message: 'Please Enter a Valid Phone Number' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password cant be shorter than 6 charecters' }
    ],
    vehicleNo: [
      { type: 'required', message: 'Vehicle No is required' }
    ],
    district: [
      { type: 'required', message: 'District is required' }
    ]
    
  };

  registrationForm = this.formBuilder.group({ 
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    vehicleNo: ['', [Validators.required]],
    district: ['', [Validators.required]]

  });
  
  get f(){
    console.log(this.registrationForm);
    return this.registrationForm.controls;
  }
  
  public submit(): void {
    console.log(this.registrationForm.value);
    this.authService.doRegister(this.registrationForm.value).subscribe(res => {
      if(res.success){
        this.messageService.presentAlert('Registration', 'Your vehicle is successfully registered. Please login to continue.');

        this.router.navigate(['login']);
      } else {
        console.log(res);
      }
    });
  }
  

  ngOnInit() {}

}

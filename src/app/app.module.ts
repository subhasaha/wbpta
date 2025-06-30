import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

import { Downloader } from '@ionic-native/downloader/ngx';

import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomeroccasionComponent } from './customeroccasion/customeroccasion.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetotpComponent } from './forgetotp/forgetotp.component';
import { ForgetresetComponent } from './forgetreset/forgetreset.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { StripePage } from './stripe/stripe.page';


import { CommonModule } from '@angular/common';
import { LiveperformanceordersComponent } from './liveperformanceorders/liveperformanceorders.component';
import { PrivateperformanceordersComponent } from './privateperformanceorders/privateperformanceorders.component';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { LiveperformancesComponent } from './liveperformances/liveperformances.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CustomeroccasionComponent,
    ProfileComponent,
    RequestViewComponent,
    ChangePasswordComponent,
    ForgetpassComponent,
    ForgetotpComponent,
    ForgetresetComponent,
    InvitefriendsComponent,
    TransactionHistoryComponent,
    StripePage,
    LiveperformanceordersComponent,
    PrivateperformanceordersComponent,
    EventsComponent,
    TicketsComponent,
    CelebritiesComponent,
    LiveperformancesComponent,
    EventdetailsComponent
    


  ],
  entryComponents: [],
  imports:
    [
      ReactiveFormsModule,
      FormsModule,
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      CommonModule,
      IonIntlTelInputModule,
      NgxQRCodeModule
    ],
  providers: [
    { provide: RouterModule, useClass: IonicRouteStrategy },
    File,
    HTTP,
  
    Downloader
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

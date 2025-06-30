import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetotpComponent } from './forgetotp/forgetotp.component';
import { ForgetresetComponent } from './forgetreset/forgetreset.component';
import { RegistrationComponent } from './registration/registration.component';
import { CelebrityOnboardingComponent } from './celebrity-onboarding/celebrity-onboarding.component';
import { CelebrityVideosComponent } from './celebrity-videos/celebrity-videos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { StripePage } from './stripe/stripe.page';

import { AuthGuard } from './services/guards/auth.guard';
import { UnAuthGuard } from './services/guards/un-auth.guard';
import { CustomeroccasionComponent } from './customeroccasion/customeroccasion.component';
import { LiveperformanceordersComponent } from './liveperformanceorders/liveperformanceorders.component';
import { PrivateperformanceordersComponent } from './privateperformanceorders/privateperformanceorders.component';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { LiveperformancesComponent } from './liveperformances/liveperformances.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'forgetpass',
    component: ForgetpassComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'forgetotp',
    component: ForgetotpComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'forgetreset',
    component: ForgetresetComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'occasion',
    component: CustomeroccasionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bank-details',
    component: BankDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transaction-history',
    component: TransactionHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'request-view',
    component: RequestViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'onboarding',
    component: CelebrityOnboardingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videos',
    component: CelebrityVideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'invitefriends',
    component: InvitefriendsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stripe/:id',
    component: StripePage,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'liveperformanceorders',
    component: LiveperformanceordersComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'privateperformanceorders',
    component: PrivateperformanceordersComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'celebrities',
    component: CelebritiesComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'liveperformances',
    component: LiveperformancesComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'eventdetails',
    component: EventdetailsComponent,
    canActivate: [AuthGuard]
    
  }
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

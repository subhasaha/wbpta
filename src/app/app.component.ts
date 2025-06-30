import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public appPages = [
    { title: 'DASHBOARD', url: '/dashboard', icon: 'home' },

    { title: 'MY VEHICLES', url: '/request-view', icon: 'list' },
    { title: 'ADD NEW VEHICLE', url: '/invitefriends', icon: 'clipboard' },
    { title: 'REPORTS', url: '/privateperformanceorders', icon: 'file-tray-full' },
    
    { title: 'TRANSACTION HISTORY', url: '/transaction-history', icon: 'card' },
    { title: 'PAYMENTS', url: '/events', icon: 'bag' }
  ];
  public profilePages = [
    { title: 'PROFILE', url: '/profile', icon: 'person-circle' },
    { title: 'CHANGE PASSWORD', url: '/change-password', icon: 'cog' },
    
  ];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() { }

  logOut() {
    this.storageService.removePermanentStorage("authToken");
    this.storageService.removePermanentStorage("userInfo");
    location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.scss'],
})
export class CelebritiesComponent implements OnInit {

  public celebRequests: any = [];

  public expertise: any = [];
  public industries: any = [];
  
 
 
  
  constructor(
    private apiService: ApiService,private router: Router
    
  ) { }

  
  ngOnInit() {
    this.getMyTickets();
    

  }
  
  getMyTickets() {
    this.apiService.getcelebList().subscribe(res => {
      if (res.success) {
        this.celebRequests = res.data.celebList;
        this.expertise = res.data.expertise;
        this.industries = res.data.subcelebList;
        window.location.href = "/celebrities#celeb-all";
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {

  public celebRequests: any = [];

  public user: any = [];
  
 
 
  
  constructor(
    private apiService: ApiService
    
  ) { }

  
  ngOnInit() {
    this.getMyTickets();
  }
  
  getMyTickets() {
    this.apiService.getMyTickets().subscribe(res => {
      if (res.success) {
        this.celebRequests = res.data.my_bookings;
        this.user = res.data.user;
      }
    });
  }

  

}

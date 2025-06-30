import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss'],
})
export class EventdetailsComponent implements OnInit {
  public event_poster: any = [];

  public event: any = [];
  public event_tables: any = [];

  constructor(private router: Router, private formBuilder: FormBuilder,
    private apiService: ApiService,
    private platform: Platform) { }


  ngOnInit() {
    this.getEventDetails();
  }

  getEventDetails() {
    this.apiService.getEventDetails(this.platform.getQueryParam('id')).subscribe(res => {
      if (res.success) {
        this.event = res.data.event;
        this.event_poster = res.data.event_poster;
        this.event_tables = res.data.event_tables;
      }
    });
  }
  

}

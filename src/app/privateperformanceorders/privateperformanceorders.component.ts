import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';

@Component({
  selector: 'app-privateperformanceorders',
  templateUrl: './privateperformanceorders.component.html',
  styleUrls: ['./privateperformanceorders.component.scss'],
})
export class PrivateperformanceordersComponent implements OnInit {

  public celebRequests: any = [];

  
  
 
 
  
  constructor(
    private apiService: ApiService,
    private http: HTTP,
    private file: File,
    private downloader: Downloader
  ) { }

  
  ngOnInit() {
    this.getCelebRequests();
  }
  downloadFile(url) {
//alert(this.file.dataDirectory+this.file.externalRootDirectory);

var link=document.createElement('a');
    link.href = url;
    link.download = url.substr(url.lastIndexOf('/') + 1);
    link.click();
   //window.open(url);

   
  

  }
  getCelebRequests() {
    this.apiService.getRequestCustomer().subscribe(res => {
      if (res.success) {
        this.celebRequests = res.data.occationDetails.filter(obj => obj.expertise_id == '5');
      }
    });
  }

  triggerEvent(event) {
    this.apiService.getRequestCustomer().subscribe(res => {
      if (res.success) {
        this.celebRequests = res.data.occationDetails.filter(obj => obj.district == event.target.value);
      }
    });
}



}


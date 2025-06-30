import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-customeroccasion',
  templateUrl: './customeroccasion.component.html',
  styleUrls: ['./customeroccasion.component.scss'],
})
export class CustomeroccasionComponent implements OnInit {

  isItemAvailable = false;
  isExpAreasAvailable = false;
  public items: any = [];
  public itemsAfterFilter: any = [];
  public expertiseAreas: any = [];
  public occTypes: any = [];
  introVideo: any;
  date: String = new Date().toISOString();


  get occation_type() {
    return this.occasionForm.get('occation_type');
  }

  get occation_date() {
    return this.occasionForm.get('occation_date');
  }

  get search() {
    return this.occasionForm.get('search');
  }

  get Purpose() {
    return this.occasionForm.get('Purpose');
  }

  get celeb_id() {
    return this.occasionForm.get('celeb_id');
  }
  get expertise_areas() {
    return this.occasionForm.get('expertise_areas');
  }
  

  occasionForm = this.formBuilder.group({ 
    occation_type: [''],
    occation_date: [''],
    search: [''],
    expertise_areas: [''],
    Purpose: [''],
    celeb_id: ['']
  });


  initializeItems(){
    this.apiService.getOccationTypes().subscribe(res => {
      if (res.success) {
       // this.occTypes = res.data.occasion_types;
        this.items = res.data.celebs;
        if(this.platform.getQueryParam('id') != "")
          this.getItems(null);
        //console.log(this.transactionHistory);
      }
    });
  }
  loadData(item: any) {
    console.log(item);
    this.isItemAvailable = false;
    this.isExpAreasAvailable = false;
    this.occasionForm.patchValue({ 
      search: item.name
    });
    this.occasionForm.patchValue({ 
      celeb_id: item.id
    });
    this.getCelebrityExpertiseAreas(item.id);
    //isExpAreasAvailable = false;
    return false;
    
  }
  getItems(ev: any) {
    
    const val = (ev != null) ? ev.target.value : "";
    console.log("ID",this.platform.getQueryParam('id'));
    if (this.platform.getQueryParam('id') != "" || (val && val.trim() !== '')) {
        this.isItemAvailable = true;
        this.itemsAfterFilter = this.items.filter((item) => {
           
          if (val != "" && item.name.toLowerCase().indexOf(val.toLowerCase().trim()) >= 0) {
            console.log(item.name);
            return true;
          }
          if (item.id == this.platform.getQueryParam('id')) {
            console.log(item.id);
            this.loadData(item);
            return true;
          }

          
          
          return false;
        
            //return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    } else {
        this.isItemAvailable = false;
    }
  }

  public submit() {
    this.occasionForm.patchValue({ 
      occation_date: this.occasionForm.value.occation_date.split("T")[0]
    });
    console.log(this.occasionForm.value);
    this.apiService.postOccationForm(this.occasionForm.value).subscribe(res => {
      
        console.log(res);

        this.router.navigate(['/stripe/'+res.data.occ_id]);
    
    });
  }
  getOccationTypes() {
    this.apiService.getOccationTypes().subscribe(res => {
      if (res.success) {
        this.occTypes = res.data.occasion_types;
        
        //console.log(this.transactionHistory);
      }
    });
  }
  getCelebrityExpertiseAreas(celeb_id: any) {
    let Obj={
      'celeb_id': celeb_id
    };
    this.apiService.fetchCelebExpertiseAreas(Obj).subscribe(res => {
      //if (res.success) {
        this.expertiseAreas = res;
        this.isExpAreasAvailable = true;
        
        console.log(res);
     // }
    });
    this.apiService.fetchCelebIntroVideo(Obj).subscribe(res => {
      //if (res.success) {
        this.introVideo = res;
        //this.isExpAreasAvailable = true;
        
        console.log(res);
     // }
    });
    
  }
  constructor(private router: Router, private formBuilder: FormBuilder,private apiService: ApiService,private platform: Platform) { }

  ngOnInit() {
    this.getOccationTypes();
    this.initializeItems();
    
  }

}

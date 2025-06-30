import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { Profile } from '../interfaces/profile';
import { ApiService } from '../services/api/api.service';

import { MessageService } from '../services/message/message.service';

import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public profileObjToUpdate: Profile;
  public profileToShow: any = {};
  public editing: boolean = false;

  fileUrl: any = null;
  respData: any;
  profilePic: string;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private messageService: MessageService,
    private apiService: ApiService,
    private file: File,
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.apiService.getCelebProfie().subscribe(res => {
      if (res.success) {
        this.profileToShow = res.data;
        this.profileObjToUpdate = {
          fullname: res.data.fullname,
          band_name: res.data.band_name,
          address: res.data.address,
          phone: res.data.mobilenumber,
          city: res.data.city,
          state: res.data.state,
          country: res.data.country,
          dob: res.data.dob,
          email: res.data.email,
          profile_pic: ""
        }
        this.profilePic = "https://yiiu.net/" + res.data.profile_pic;
      }
    });
  }

  toogleEditing(option: boolean) {
    this.editing = option;
  }

  // cropUpload() {
  //   //alert('Test');
  //   this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
  //     for (let i = 0; i < results.length; i++) {
  //       console.log('Image URI: ' + results[i]);
  //       this.crop.crop(results[i], { quality: 100 })
  //         .then(
  //           newImage => {
  //             console.log('new image path is: ' + newImage);
  //             const fileTransfer: FileTransferObject = this.transfer.create();
  //             const uploadOpts: FileUploadOptions = {
  //               fileKey: 'file',
  //               fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
  //             };

  //             fileTransfer.upload(newImage, 'https://yiiu.net/profile_pics/132/', uploadOpts)
  //               .then((data) => {
  //                 console.log(data);
  //                 this.respData = JSON.parse(data.response);
  //                 console.log(this.respData);
  //                 this.fileUrl = this.respData.fileUrl;
  //               }, (err) => {
  //                 console.log(err);
  //               });
  //           },
  //           error => console.error('Error cropping image', error)
  //         );
  //     }
  //   }, (err) => { console.log(err); });
  // }

  

  onSubmit() {
    //debugger;
    this.profileObjToUpdate;
    this.apiService.postCelebProfile(this.profileObjToUpdate, this.profilePic).subscribe(res => {
      if (res.success) {
        this.profileToShow = res.data;
        this.editing = false;

        this.messageService.presentAlert('Profile Update', 'Profile successfully updated.');
      }
    });
  }
}


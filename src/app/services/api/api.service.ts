import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options: any;
  fileoptions: any;

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private authService: AuthService
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': "Bearer " + this.authService.getToken()
    });
    this.options = {
      headers: headers
    };

    const fileheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.authService.getToken()
    });
    this.fileoptions = {
      headers: fileheaders
    };
  }

  updateCelebExpertise(params: any): Observable<any> {
    return this.http.post(this.urlService.postExpertiseAreaUpdateUrl(), params, this.options);
  }

  getCelebExpertise(): Observable<any> {
    return this.http.get(this.urlService.getExpertiseAreaUpdateUrl(), this.options);
  }

  getCelebRequests(): Observable<any> {
    return this.http.get(this.urlService.getMyRequestsUrl(), this.options);
  }

  getTransactionHistory(): Observable<any> {
    return this.http.get(this.urlService.getTxnHistoryUrl(), this.options);
  }
  getRequestCustomer(): Observable<any> {
    return this.http.get(this.urlService.getRequestCustomerURL(), this.options);
  }

  getMyTickets(): Observable<any> {
    return this.http.get(this.urlService.getMyTicketsURL(), this.options);
  }

  getcelebList(): Observable<any> {
    return this.http.get(this.urlService.getcelebListURL(), this.options);
  }

  getCelebEvents(): Observable<any> {
    return this.http.get(this.urlService.getEventsListURL(), this.options);
  }
  getEventDetails(id: any): Observable<any> {
    return this.http.get(this.urlService.getEventDetailsURL()+"?id="+id, this.options);
  }
  
  

  getOccationTypes(): Observable<any> {
    return this.http.get(this.urlService.getOccTypeUrl(), this.options);
  }

  getCelebProfie(): Observable<any> {
    return this.http.get(this.urlService.getCelebProfileUrl(), this.options);
  }

  /*postCelebProfile(params: Profile): Observable<any> {
    return this.http.post(this.urlService.getCelebProfileUrl(), params, this.options);
  }*/

  postCelebProfile(params: Profile, proImg: any): Observable<any> {

    var seq = (Math.floor(Math.random() * 10000000) + 10000000).toString().substring(1);
        //console.log(seq);

    const fileToUpload = this.DataURIToBlob(proImg);
    //const formData = new FormData();
    //formData.append('profile_pic', fileToUpload, 'image.jpg')
    //console.log(params.fullname)

    const data = new FormData();
        data.append("fullname", params.fullname);
        data.append("band_name", params.band_name);
        data.append("address", params.address);
        data.append("phone", params.phone);
        data.append("city", params.city);
        data.append("state", params.state);
        data.append("country", params.country);
        data.append("dob", params.dob);
        data.append("email", params.email);
        data.append("profile_pic", fileToUpload, seq + '_propic.jpg');
        data.append("language_id", "1");

    return this.http.post(this.urlService.getCelebProfileUrl(), data, this.fileoptions);
  }
  postOccationForm(params: any): Observable<any> {

    

    return this.http.post(this.urlService.getOccationFormSubmitURL(), params, this.options);
  }
  doChangePass(params: any): Observable<any> {
    return this.http.post(this.urlService.postchangpassUrl(), params,  this.options);
  }

  fetchCelebExpertiseAreas(params: any): Observable<any> {
    return this.http.post("https://yiiu.vip/celeb/expertise/areas", params,  this.options);
  }
  fetchOccationById(params: any): Observable<any> {
    return this.http.post(this.urlService.getOccasionByIdURL(), params,  this.options);
  }
  fetchCelebIntroVideo(params: any): Observable<any> {
    return this.http.post("https://yiiu.vip/celeb/intro/video", params,  this.options);
  }
  
  submitStripePayment(payload: any): Observable<any> {
    return this.http.post("https://yiiu.vip/strpcustomerpayments", payload, this.options);
  }
  doSendForgetpassotp(params: any): Observable<any> {
    return this.http.post(this.urlService.postForgetPassOtpUrl(), params);
  }

  doCheckForgetpassotp(params: any): Observable<any> {
    return this.http.post(this.urlService.postForgetPassOtpCheckUrl(), params);
  }

  doChangeForgetpass(params: any): Observable<any> {
    return this.http.post(this.urlService.postForgetPassChangeUrl(), params);
  }

  doInviteFrnd(params: any): Observable<any> {
    return this.http.post(this.urlService.postInviteFrndUrl(), params, this.options);
  }

  //for bold file send==
  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
        
    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)
      
        return new Blob([ia], { type: mimeString })
 }

}

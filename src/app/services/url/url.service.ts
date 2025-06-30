import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  postRegisterUrl() {
    return environment.customBaseUrl + "register";
  }

  postLoginUrl() {
    return environment.customBaseUrl + "login";
  }

  postExpertiseAreaUpdateUrl() {
    return environment.customBaseUrl + "expertise/areas";
  }

  postchangpassUrl() {
    return environment.baseUrl + "change/password/logged-in-users";
  }

  getExpertiseAreaUpdateUrl() {
    return environment.customBaseUrl + "expertise/areas";
  }

  getMyRequestsUrl() {
    return environment.customBaseUrl + "requests";
  }

  getTxnHistoryUrl() {
    return environment.baseUrl + "transaction/history";
  }

  getOccTypeUrl() {
    return environment.baseUrl + "customer/ocassion/page/details";
  }


  getCelebProfileUrl(){
    return environment.baseUrl + "customer/profile";
  }

  getOccationFormSubmitURL(){
    return environment.baseUrl + "customer/occasion/add";
  }

  getRequestCustomerURL(){
    return environment.baseUrl + "customer/ocassion/requests/list";
  }

  getMyTicketsURL(){
    return environment.baseUrl + "customer/mytickets/list";
  }
  getEventsListURL(){
    return environment.baseUrl + "customer/events/list";
  }

  getEventDetailsURL(){
    return environment.baseUrl + "customer/events/details";
  }

  

  

  getcelebListURL(){
    return environment.baseUrl + "celeb/list";
  }

  getOccasionByIdURL() {
    return environment.baseUrl + "get_occation_by_id";
  }

  
  
  postForgetPassOtpUrl() {
    return environment.baseUrl + "send/otp/forget-password";
  }

  postForgetPassOtpCheckUrl() {
    return environment.baseUrl + "verify/otp/forget-password";
  }

  postForgetPassChangeUrl() {
    return environment.baseUrl + "change/password/forget-password";
  }

  postInviteFrndUrl() {
    return environment.baseUrl + "invite/friend";
  }


  //https://yiiu.net/api/v1/transaction/history
}

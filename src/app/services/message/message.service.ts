import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private router: Router,
    public toastController: ToastController,
    public alertController: AlertController
    
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header: string, message: string ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            //this.router.navigate(['login']);
          }
        }]
    });

    await alert.present();
  }

  async presentAlertChangePassSucc(header: string, message: string ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['dashboard']);
          }
        }]
    });

    await alert.present();
  }


}

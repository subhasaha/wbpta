import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare var Stripe;
import { ApiService } from '../services/api/api.service';
import { MessageService } from '../services/message/message.service';


@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
})
export class StripePage implements OnInit {
 
  
  stripe: any;
  occ_id: any;
  card: any;
  disabled: any;
  public occDet: any;
  constructor(private route:ActivatedRoute, private apiService: ApiService, private router: Router) {
    
    this.apiService = apiService;
    this.router = router;
    this.stripe = Stripe('pk_live_51GvaadAkOCdLNBG63whEwMsx0xIqqvKzUa1EPf0IxvmIJ3JS971p5hBhE210paDMxZ52PlguNrPw5uNGw8chXVze00vJBRZsxX');
}
ngOnInit() {
    this.occ_id = this.route.snapshot.paramMap.get('id');
    this.disabled=false;
    let obj = {
        "occ_id": this.occ_id
    };
    this.apiService.fetchOccationById(obj).subscribe(res => {
        if (res.success) {
            this.occDet = res.data;
        }
    });
    this.setupStripe();
}
makePayment(token: any) {
    console.log(token);
    let paymentObj = {
        "amounts": this.occDet.reqAmount,
        "stripeToken": token,
        "ocs_id": this.occ_id
    };
    console.log(paymentObj);
    this.apiService.submitStripePayment(paymentObj).subscribe(data => {
        /*if (data.message) {*/
          
        /*} else {
          alert(data.error);
        }*/
    });

}
backtoForm() {
    this.router.navigate(['/occasion']);
}
setupStripe() {
    let elements = this.stripe.elements();
    var style = {
        base: {
            color: '#32325d',
            lineHeight: '24px',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };
    this.card = elements.create('card', { style: style });
    this.card.mount('#card-element');
    this.card.addEventListener('change', event => {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        }
        else {
            displayError.textContent = '';
        }
    });
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        this.disabled = true;
        // this.stripe.createToken(this.card)
        this.stripe.createSource(this.card).then(result => {
            if (result.error) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
                this.disabled = false;
            }
            else {
                console.log(result);
                this.disabled = true;
                this.makePayment(result.source.id);

                alert("Successfully paid and you will be notified after your YIIU is ready.");
                this.disabled = false;
                this.router.navigate(['request-view']);
                
            }
        });
    });
}

}

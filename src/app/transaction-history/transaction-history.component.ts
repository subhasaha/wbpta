import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit {

  public transactionHistory: any = [];

  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit() {
    this.getCelebEarnings();
  }

  getCelebEarnings() {
    this.apiService.getTransactionHistory().subscribe(res => {
      if (res.success) {
        this.transactionHistory = res.data.transaction_history;
        //console.log(this.transactionHistory);
      }
    });
  }

}

// import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs';
// import {throwError} from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
// import { HttpEvent } from '@angular/common/http/src/response';

// import { Stock } from '../model/stock';
// @Injectable()
// export class StockService {

//   constructor(private http: HttpClient) {}

//   getStocks() : Observable<Stock[]> {
//     return this.http.get<Stock[]>('/api/stock');
//   }

//   createStock(stock: Stock): Observable<any> {
//     return this.http.post('/api/stock', stock);
//   }

//   toggleFavorite(stock: Stock): Observable<Stock> {
//     return this.http.patch<Stock>('/api/stock/' + stock.code,
//       {
//         favorite: !stock.favorite
//       });
//   }

//   makeFailingCall() {
//     return this.http.get('/api/fail');
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Stock } from '../model/stock';
import { HttpEvent } from '@angular/common/http/src/response';
import { UserStoreService } from './user-store.service';

@Injectable()
export class StockService {

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  getStocks() : Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock');
  }

  getStock(code: string): Observable<Stock> {
    return this.http.get<Stock>('/api/stock/' + code);
  }

  createStock(stock: Stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
  }
}

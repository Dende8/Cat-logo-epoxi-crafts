import { Injectable } from '@angular/core';

//HTTP CLIENT -> NOS DARÁ EL VERBO-MÉTODO PARA HACER LA PETICIÓN
import { HttpClient } from '@angular/common/http';
//BASE URL
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private endPoint: string = '/home'
  constructor(private httpClient: HttpClient) { }

  public getHome() {
    return this.httpClient.get(`${environment.baseUrl}${this.endPoint}`);
  }
}

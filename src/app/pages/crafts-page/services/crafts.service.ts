import { Injectable } from '@angular/core';

//HTTP CLIENT -> NOS DARÁ EL VERBO-MÉTODO PARA HACER LA PETICIÓN
import { HttpClient } from '@angular/common/http';
//BASE URL
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CraftsService {

  private endPoint: string = '/crafts'
  constructor(private httpClient: HttpClient) { }

  public getCrafts() {
    return this.httpClient.get(`${environment.baseUrl}${this.endPoint}`);
  }
}

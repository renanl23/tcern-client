import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  url = 'http://localhost:5000/';
  //url = 'https://viacep.com.br/ws/01001000/json/'
  constructor(private http: HttpClient) { }

  getResultado(dividendo, divisor) {
    return this
            .http
            .get(this.url+ 'Dividir?Dividendo='+dividendo+'&divisor='+divisor);
        }
}
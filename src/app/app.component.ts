import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResultadoService } from './resultado.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCE RN - Prova Prática';
  constructor(private resultadoService: ResultadoService) { }
  onSubmit(form: NgForm) {
    const {dividendo, divisor} = form.value;
    console.log('Dividendo: ', dividendo);
    console.log('Divisor: ', divisor);
    this.resultadoService.getResultado(dividendo,divisor).subscribe( (data) => {console.log(data)})    
  }
}

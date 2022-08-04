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
  isFormSent = false;
  resultado = '';
  constructor(private resultadoService: ResultadoService) { }
  onSubmit(form: NgForm) {
    this.isFormSent = true;
    const {dividendo, divisor} = form.value;
    console.log('Dividendo: ', dividendo);
    console.log('Divisor: ', divisor);
    const renderResultado = (data) => {
      if (data.erro) {
        this.resultado = data.erro;
      } else {      
      this.resultado = data.resultado;
      console.log(data)
      }    
    }    
    this.resultadoService.getResultado(dividendo,divisor).subscribe(renderResultado)    
  }
}

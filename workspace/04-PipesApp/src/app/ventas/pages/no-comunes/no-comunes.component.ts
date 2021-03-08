import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Leandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Leandro', 'Yamila', 'Chimuelo'];
  clientesMapa={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Yamila',
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // Key value pipe
  persona = {
    nombre: 'Leandro',
    edad: 28,
    dirección: 'Buenos Aires, Argentina'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(2000); // 0, 1, 2, 3, 4, 5, 6, ..., x

  valorPromesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('Tenemos data de promesa.');
      }, 3500);
  });



}
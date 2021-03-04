import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Componentes
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }

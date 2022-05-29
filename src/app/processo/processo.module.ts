import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProcessoComponent } from './processo.component';

@NgModule({
  declarations: [ProcessoComponent],
  imports: [
    CommonModule,
    //AngularSvgIconModule,
    ReactiveFormsModule,
    //AngularSvgIconModule.forRoot(),
    //ScrollingModule,
  ],
  entryComponents: [ProcessoComponent],
  exports: [ProcessoComponent,
    FormsModule,
    ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProessoModule { }

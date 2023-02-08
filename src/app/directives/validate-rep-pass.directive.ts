import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// DIRECTIVA PARA VALIDAR QUE SE REPITE LA CONTRASEÑA CORRECTAMENTE 

@Directive({
  selector: '[appValidateRepPass]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateRepPassDirective, multi: true}]
})
export class ValidateRepPassDirective {

  @Input() parametro: any;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    
    if (control && control.value!= this.parametro) {
      return {
        'samePass': true
      }  
    }else{
      return null
    }
  }
}

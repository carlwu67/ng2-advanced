import { AbstractControl} from '@angular/forms'

export function myValidator(c: AbstractControl) {
    if(c.value == '') {
      return {Validator: true};
    }
    else {
      return null;
    }
  }

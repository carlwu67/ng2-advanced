import { AbstractControl} from '@angular/forms'

export function myValidator(c: AbstractControl) {
    if(c.value == '') {
      return {valid: true};
    }
    else {
      return null;
    }
  }

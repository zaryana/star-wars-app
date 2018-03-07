import {FormGroup, ValidationErrors} from '@angular/forms';

/**
 * make sure that the min is less or equal to the max
 */
export function minLessThanMaxValidator(group: FormGroup): ValidationErrors | null {
  const minYear = group.controls['minYear'].value;
  const maxYear = group.controls['maxYear'].value;
  if (minYear !== null && maxYear !== null) {
    return minYear <= maxYear ? null : {'minLessThanMax': true};
  } else {
    return null;
  }
}

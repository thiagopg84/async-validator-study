import { CameraService } from 'src/app/shared/services/camera.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export class SerialNumberValidator {
  static createValidator(cameraService: CameraService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return cameraService.validateSerialNumber(control.value).pipe(
          debounceTime(500),
        map((result) => {
          if (result.hasError) {
            control.setErrors({ customError: result.message });
            return { customError: true }
          } else {
            if (control.hasError('customError')) {
              delete control.errors['customError'];
              control.updateValueAndValidity();
            } 
            return null;
          }
        })
      );
    };
  }
}

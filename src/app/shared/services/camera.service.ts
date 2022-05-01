import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  private serials: string[] = ['123', '456', '789']

  validateSerialNumber(serialNumber: string): Observable<{ hasError: boolean, message?: string }> {
    if (this.serials.includes(serialNumber)) {
      return of({ hasError: true, message: 'Serial já cadastrado'}).pipe(delay(500));
    } else { 
      return of({ hasError: false, message: 'Serial válido'}).pipe(delay(500));
    }
  }
}

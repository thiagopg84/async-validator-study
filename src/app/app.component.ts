import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CameraService } from './shared/services/camera.service';
import { SerialNumberValidator } from './shared/validators/serial-number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  form: FormGroup;

  constructor(private cameraService: CameraService ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      serialNumber: new FormControl(null, [Validators.required], [SerialNumberValidator.createValidator(this.cameraService)]),
      model: new FormControl(null, Validators.required)
    })
  }

  testForm() {
    Object.keys(this.form.controls).forEach(key => {
      console.log(key, this.form.controls[key].valid)
    });
  }
}
 

import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  imports: [FormsModule,JsonPipe,CommonModule,ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  // Template Form
  formData = {
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    acceptTerms: false,
  };
  formValue:any;

   // Method to handle form submission
   onSubmit() {
    console.log('Form Data:', this.formData);
    alert("Form Submitted")
    this.formValue=this.formData
  }
  clearForm(){
    this.formData={
      email: '',
      password: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      acceptTerms: false,
    };
  }

  //Reactive Form
  studentForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormControl('', Validators.required),
    address2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
  });

  onSubmitReactive() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  clearFormReactive() {
    this.studentForm.reset();
  }

 // Helper to check if a field is invalid
isFieldInvalid(field: string): boolean {
  const control = this.studentForm.get(field);
  return !!(control?.invalid && (control.dirty || control.touched));
}
}

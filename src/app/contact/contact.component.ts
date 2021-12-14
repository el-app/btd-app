import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'el-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    phone: new FormControl('', [
      Validators.pattern(new RegExp("[0-9 .\-/]{9|13}")),
      Validators.minLength(9),
      Validators.maxLength(13)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5)])
  });

  matcher = new MyErrorStateMatcher();


  constructor(public dialog: MatDialog) {}

  public hasError = (controlName: string, errorName: string) =>{
    return this.contactForm.controls[controlName].hasError(errorName);
  }

  public contactValidate = () => {
    if (this.contactForm.valid) {
      //this.openDialog();
    }
  }
}

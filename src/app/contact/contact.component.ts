import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData) {
    console.log(FormData)

  }

  ngOnInit(): void { }

}

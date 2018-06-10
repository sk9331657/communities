import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

signin = new FormGroup({
  name: new FormControl(null, Validators.required),
  email: new FormControl(null, Validators.required),
  captcha: new FormControl(),
});
	

  constructor() { 
  }

  ngOnInit() {
   
  }
  onSubmit(){
  
  }
 

}
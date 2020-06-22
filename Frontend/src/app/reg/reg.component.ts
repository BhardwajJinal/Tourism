import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nameProp;
  emailProp;
  passwordProp;
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  register(form) {
    console.log(form.value);
}
      })
  



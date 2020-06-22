import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  nameProp;
  emailProp;
  passwordProp;

      ngOnInit(): void {
      }

      register(form) {
          console.log(form.value);
      }
 }
  



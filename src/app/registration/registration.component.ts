import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  sometext:any=[{date:"06-10-2018",name:"sukku"},
                  {lower:"SUKKU",curency:100}
];

newtext:any=["suku","dfdsfsff","gghhghghhhsfewsqyewg","fesgghdgwtyhfg"];

  constructor(
    private route: Router
  ) { 
   
  }

  ngOnInit() {
    this.registrationForm= new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required),
      mobile:new FormControl(null,Validators.required)  
    })

  }
  register(){
    console.log(this.registrationForm);
    localStorage.setItem('email',this.registrationForm.value.email);
    localStorage.setItem('password',this.registrationForm.value.password);
    localStorage.setItem('mobile',this.registrationForm.value.mobile);
    this.route.navigate(['/login']);
  }
  loginclick(){
    this.route.navigate(['/login']);
  }

}

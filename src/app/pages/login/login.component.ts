import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private router : Router) { 
    this.route.params.subscribe(params => {
      console.log(params['id']); // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit(): void {
    this.validateLoging();
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      this.router.navigate(["home"])
    }
    
  }
  validateLoging(){
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }
}

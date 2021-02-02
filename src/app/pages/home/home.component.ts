import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private router : Router) { }

  async ngOnInit(): Promise<any> {
  
  
  }
  
  
}

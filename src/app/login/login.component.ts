import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: number;
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    alert(` Welcome ${this.user}`)
  }

}

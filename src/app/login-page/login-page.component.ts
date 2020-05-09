import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email:string;
  password:string;

  
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    
  }
  login(email: string, password: string)
  {
console.log(password,email);
  }

}

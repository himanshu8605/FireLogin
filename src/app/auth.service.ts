import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User;
  Result: Boolean;
  Variable:string;
  constructor(
    public auth: AngularFireAuth,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((data) => {
      if (data) {
        //   console.log(data.email);
        this.user = data;
        localStorage.setItem("user", data.email);
      } else {
        // console.log("No");
        localStorage.setItem("user", null);
      }
    });
  }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.Variable="true";
    this.router.navigate(["/home"]);
  }
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.Variable="true";
    this.router.navigate(["/home"]);
    
  }
  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    await this.afAuth.signOut();
    this.Variable="";
     this.router.navigate(["/home"]);
    localStorage.removeItem("user");
    this.router.navigate([""]);
  }


async checkLogin()
{
  console.log(this.Variable);
  if(this.Variable == "true"){this.router.navigate(["/home"]);}
  else{
    this.router.navigate([""]);  
  }
}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }
}

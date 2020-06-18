import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin = {} as Login;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    const user = await this.firebaseAuth.signInWithEmailAndPassword(this.userLogin.email, this.userLogin.senha);
    if (this.userLogin.email){
      console.log('Autenticado');
      this.router.navigate(['/sintomas-saude']);
    } else {
      console.log('Error');
    }
  }

  async registrar(){
    const user = await this.firebaseAuth.createUserWithEmailAndPassword(this.userLogin.email, this.userLogin.senha);
    if (this.userLogin.email){
      console.log('Usuario criado');
      this.router.navigate(['/sintomas-saude']);
    } else {
      console.log('Error');
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      data => {
        const token = data.token;
        this.tokenStorage.saveToken(token);
        // this.tokenStorage.saveUser(jwtDecode(token));

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = 'Echec de la connexion';
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  /*submitLogin() {
    console.log(this.loginForm.value);
  }
  shouldShowUsernameRequiredError() {

    const username = this.loginForm.controls.username;

    return username.touched && username.hasError('required');
  }
  shouldShowPasswordRequiredError() {

    const password = this.loginForm.controls.password;

    return password.touched && password.hasError('required');

  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log('connexion réussi');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['admin']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }*/

}

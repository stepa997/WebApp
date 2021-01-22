import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'my-app';

  user: string = "";
  password: string = "";
  msg: string = "";

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  login():void{
    let users=JSON.parse(localStorage.getItem('users')!);
    if(this.user == "" || this.user == null || this.password == "" || this.password == null){
      this.msg="Unesite sve podatke!";
      return;
    }
    if(users!=null){
        for(var i=0; i<users.length; i++){
          if(users[i].username==this.user){
            if(users[i].password==this.password){
                if(users[i].username=='admin'){
                  this.router.navigate(['admin']);
                }
                else if(users[i].username=='kupac'){
                  this.router.navigate(['kupac']);
                }
              else{
                this.msg="Nije dobar tip!";
                return;
              }
            } 
            else{
              this.msg="Nije dobar password!";
              return;
            }          
          }
        }
        this.msg="Ne postoji korisnik sa tim username-om!";
    }
    else{
      this.msg="Ne postoji baza korisnika";
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  books;
  user: User;
  show: boolean;
  pro: boolean;
  naziv: string;
  cena: number;
  bag:boolean;
  aron:boolean;
  constructor(private router: Router) { 
    this.books = JSON.parse(localStorage.getItem('porudzbina')!);
    this.user = new User();
    this.show = false;
    this.pro = false;
    this.naziv = "";
    this.bag = false;
    this.aron = false;
    this.cena = 0;
  }

  ngOnInit(): void {
  }

  profil(): void {
    this.show = true;
    let users=JSON.parse(localStorage.getItem('users')!);

    if(users!=null){
      for(var i=0; i<users.length; i++){
        if(users[i].username=='admin'){
            this.user.fname = users[i].fname;
            this.user.lname = users[i].lname;
            this.user.username = users[i].username;
            this.user.adresa = users[i].adresa;
            this.user.telefon = users[i].telefon;
            this.user.password = users[i].password;
          }         
        }
    }
  }

  potvrdi(): void {
    this.show = false;
    let users=JSON.parse(localStorage.getItem('users')!);

    if(users!=null){
      for(var i=0; i<users.length; i++){
        if(users[i].username=='admin'){
            users[i].fname = this.user.fname;
            users[i].lname = this.user.lname;
            users[i].username = this.user.username;
            users[i].adresa =  this.user.adresa;
            users[i].telefon = this.user.telefon;
            users[i].password = this.user.password;
          }         
        }
    }
    localStorage.setItem('users',JSON.stringify(users));
  }

  logout():void{
    this.router.navigate(['']);
  } 

  brisi(stavka : string):void{
    var items=JSON.parse(localStorage.getItem('porudzbina')!);
    items = [];
    for(var i=0; i<this.books.length; i++){
      if(this.books[i].name!=stavka){
          items.push(this.books[i]);
        }         
      }
      localStorage.setItem('porudzbina',JSON.stringify(items));
      this.books=JSON.parse(localStorage.getItem('porudzbina')!);
  }

  add():void{
    this.pro=false;
    var items=JSON.parse(localStorage.getItem('products')!);
    items.push({name: this.naziv, cena:this.cena});
    localStorage.setItem('products',JSON.stringify(items));

    
  }

  addproduct():void{
    this.pro=true;
  }

  odustani():void{
    this.pro = false;
  }

  bagrem():void{
    this.bag = true;
    this.aron = false;
  }

  aronija():void{
    this.bag = false;
    this.aron = true;
  }
}

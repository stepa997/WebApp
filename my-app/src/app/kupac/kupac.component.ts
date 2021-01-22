import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  books;
  user: User;
  show: boolean;
  pro: boolean;
  naziv: string;
  cena: number;
  moja;
  ukupna_cena: number;
  constructor(private router: Router) { 
    this.books = JSON.parse(localStorage.getItem('products')!);
    this.user = new User();
    this.show = false;
    this.pro = false;
    this.naziv = "";
    this.cena = 0;
    this.ukupna_cena = 0;
    this.moja = JSON.parse(localStorage.getItem('mojaporudzbina')!);
  }

  ngOnInit(): void {
  }

  profil(): void {
    this.show = true;
    let users=JSON.parse(localStorage.getItem('users')!);

    if(users!=null){
      for(var i=0; i<users.length; i++){
        if(users[i].username=='kupac'){
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
        if(users[i].username=='kupac'){
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

  brisi(stavka : string, cena: number):void{
    var items=JSON.parse(localStorage.getItem('mojaporudzbina')!);
    items.push({name: stavka, cena: cena});
    localStorage.setItem('mojaporudzbina',JSON.stringify(items));
    this.moja = JSON.parse(localStorage.getItem('mojaporudzbina')!);
    this.ukupna_cena += cena;
  }

  add():void{
    this.pro=false;
    var items=JSON.parse(localStorage.getItem('mojaporudzbina')!);
    var por=JSON.parse(localStorage.getItem('porudzbina')!);
    for(var i=0; i<items.length; i++){
            por.push(items[i]);
    }
    items = []
    localStorage.setItem('mojaporudzbina',JSON.stringify(items));
    localStorage.setItem('porudzbina',JSON.stringify(por));
    this.moja=JSON.parse(localStorage.getItem('mojaporudzbina')!);
    this.ukupna_cena = 0;
  }

  addproduct():void{
    this.pro=true;
  }

  odbij():void{
    this.pro=false;
    var items=JSON.parse(localStorage.getItem('mojaporudzbina')!);
    items = [];
    localStorage.setItem('mojaporudzbina',JSON.stringify(items));
    this.moja=JSON.parse(localStorage.getItem('mojaporudzbina')!);
    this.ukupna_cena = 0;
  }
}

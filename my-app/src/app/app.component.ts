import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  usrs=[
    {fname:"Admin",lname:"AdminP",adresa:"adresaAdmin",username:"admin",password:"admin123", telefon:"0651234567"},
    {fname:"Kupac",lname:"KupacP",adresa:"adresaKupac",username:"kupac",password:"kupac123", telefon:"0651234557"},
  ]
  porudzbina=[
  ] 
  products=[
    {name:"Lipov med", cena:750},
    {name:"Kraljevski med",cena:600},
    {name:"Propolis",cena:500},
  ]
  mojaporudzbina=[
  ]

  ngOnInit() {
    localStorage.clear();
    localStorage.setItem('users',JSON.stringify(this.usrs));
    localStorage.setItem('porudzbina',JSON.stringify(this.porudzbina));
    localStorage.setItem('products',JSON.stringify(this.products));
    localStorage.setItem('mojaporudzbina',JSON.stringify(this.mojaporudzbina));
  }

}

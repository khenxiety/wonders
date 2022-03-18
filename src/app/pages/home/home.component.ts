import { Component, OnInit } from '@angular/core';
// hostlistener
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  navbarfixed:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>80){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }

  }


  openToggle(){

    const nav = document.getElementById('navbar')!;
    nav.classList.toggle('open');
  }

  

}

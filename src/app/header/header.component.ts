import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:string;
a:boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    this.username= localStorage.getItem("username");
  }
  logout(){
    
    localStorage.removeItem("username");
    console.log(localStorage.getItem("username"));
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  headershow: boolean = true;
  show: boolean= true;
  constructor(private router :Router) {
     console.log(localStorage.getItem('username'));
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login'||event['url'] == '/register'||event['url'] =='/add') {
          this.headershow = false;
        } else {
           console.log("NU")
          this.headershow = true;
        }
      }
    });
    
  }
}

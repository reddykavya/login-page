import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyappService } from '../services/myapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submitted = false;

  passwordType: string ="password";
  passwordShown:boolean = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private myservice:MyappService) { 
    
  }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
  });
    
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    // console.log(this.loginForm.value);
    // this.submitted = true;
    
    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }
    console.log("value",this.loginForm.value);
   

    let obj={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    this.myservice.login(obj).subscribe(data=>{
      console.log("data from login service",data);
      localStorage.setItem("username",this.loginForm.value.username);
      if(data['message']=="login success"){
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("provide valid email and password");
      }
      //alert("data"+data);
    },err=>{
     // alert("err"+err);
      console.log("err",err['err']);
    })

}
register(){
  this.router.navigate(['/register']);
}
  check(){
    alert("Email and password succesfully saved");
  }

}





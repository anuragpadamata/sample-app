import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  password:string="";
  apidata:any;
  constructor(private router:Router,private http:HttpClient){
  }
  login(){
    let res = this.http.get("http://localhost:8080/checkUser?username="+
    this.username+"&password="+this.password);
  res.subscribe(
    (data)=>{
      this.apidata = data;
      if(this.apidata == true){
        this.router.navigate(["/home"]);
        console.log(this.username);
      console.log(this.password);
    }
  }
  );
    console.log(this.apidata);
    console.log(this.password);
    

    }
  }
  


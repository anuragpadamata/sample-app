import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  users:any;

  constructor(private http:HttpClient){}
  ngOnInit(){
    let response = this.http.get("https://jsonplaceholder.typicode.com/users");
    response.subscribe(
      (data:any)=>this.users=data
    )
  }


}

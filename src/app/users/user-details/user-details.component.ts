import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user:any={};
  actRout:any;
  error:boolean = false;
  constructor(private http:HttpClient,private activeRout: ActivatedRoute){}

  ngOnInit():void{
    this.activeRout.params.subscribe(param => this.actRout = param);
    this.getUser(parseInt(this.actRout.id));
  }
  
  getUser(id:any):any{
    this.http.get(`https://reqres.in/api/users/${id}`).subscribe({
      next:(res:any)=>{this.user = res.data;this.error = false},
      error:(err:any)=>{console.log(err);this.error = true},
    })
  }
}

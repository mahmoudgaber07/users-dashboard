import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchPipePipe } from '../search-pipe.pipe';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule,NgFor,NgIf,FormsModule,SearchPipePipe,NgxSpinnerModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:any;
  searchById:any='';
  error:boolean = false;

  constructor(private http:HttpClient,private route: Router,private spinner: NgxSpinnerService){
    this.spinner.show();
  }
  ngOnInit():void{
    this.getUsers();
  }
  getUsers():any{
    this.http.get('https://reqres.in/api/users').subscribe({
      next:(res:any)=>{this.users = res.data;this.spinner.hide();this.error = false;},
      error:(err:any)=>{console.log(err);this.spinner.hide();this.error = true; },
    })
  }
  receiveProduct(user: any): void{
    this.route.navigate([`users/${user.id}`]);
  }
}

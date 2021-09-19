import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate;


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    })
  }

}

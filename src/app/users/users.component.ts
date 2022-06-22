import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: Observable<User[]>;

  constructor(private userService: UserService) {}

  load() {
    this.users = this.userService.get();
  }

  ngOnInit(): void {
  }

}

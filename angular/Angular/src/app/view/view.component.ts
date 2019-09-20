import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private userService: UserService) { }
  usersDetails;
  ngOnInit() {
    this.userService.getUsersProfile().subscribe(
      res => {
        this.usersDetails = res[''];
      },
      err => {
        console.log(err);

      }
    );
  }
}

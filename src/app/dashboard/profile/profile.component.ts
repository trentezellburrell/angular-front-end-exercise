import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global-service';
import { User } from 'src/app/service/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData!: User;

  constructor(
    private globService: GlobalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.globService.getUserData().subscribe((result: User) => {
      this.userData = result;
    }, error => {
      console.log(error);
    })
  }

}

import { Component, OnInit } from '@angular/core';

import { UserModel } from '../models/user.model';
import * as faker from 'faker';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}

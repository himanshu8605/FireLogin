import { Component, OnInit } from "@angular/core";
import { RecordFetchService } from "../record-fetch.service";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  searchString = "";
  subscriptionManager: Subscription = new Subscription();
  users: any;
  constructor(
    private FetchRecord: RecordFetchService,
    public authService: AuthService
  ) {

this.authService.checkLogin();

    this.cal();
  }
  ngOnInit(): void {}
  cal() {
    this.FetchRecord.getProfileUserList().subscribe((res) => {
      this.users = res;
    });
  }
}

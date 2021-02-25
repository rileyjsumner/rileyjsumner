import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-thanos-admin',
  templateUrl: './thanos-admin.component.html',
  styleUrls: ['./thanos-admin.component.css']
})
export class ThanosAdminComponent implements OnInit {

  private base_url: String;
  private data: any;
  constructor(private http: HttpClient) {
    this.base_url = 'https://api.sleeper.app/v1/';
  }

  ngOnInit(): void {
    this.http.get<any>(this.base_url + 'league/647228342407344128').subscribe(data => {
      this.data = data;
      console.log(data);
    });

    console.log(this.data);
  }

}

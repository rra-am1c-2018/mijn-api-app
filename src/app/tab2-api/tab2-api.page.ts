import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tab2-api',
  templateUrl: './tab2-api.page.html',
  styleUrls: ['./tab2-api.page.scss'],
})
export class Tab2ApiPage implements OnInit {
  private duckInfo: any[] = [];

  constructor(private http: HttpClient) {
    this.fetch_data();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetch_data();
  }

  private fetch_data() {
    this.http.get('http://donaldduck.api.am1c.io/index.php', {responseType: 'json'}).subscribe((data: any[]) => {
      console.log(data);
      this.duckInfo = data;
    });
  }

}

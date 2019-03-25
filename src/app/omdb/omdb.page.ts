import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.page.html',
  styleUrls: ['./omdb.page.scss'],
})
export class OmdbPage implements OnInit {
  omdbContent: object[] = [];
  omdbUrl: string = 'http://www.omdbapi.com/?t=tarzan&apikey=9a892ca8';


  constructor(private http: HttpClient) {
    this.http.get(this.omdbUrl, { responseType: 'json' }).subscribe((data: any[]) => {
      console.log(data);
      this.omdbContent = data;
    });

  }

  ngOnInit() {
  }

}

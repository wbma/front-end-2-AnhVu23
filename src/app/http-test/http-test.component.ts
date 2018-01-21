import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello';
  baseURL = 'http://media.mw.metropolia.fi/wbma/media/';
  mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) { }

  getJSON() {
    interface Myinterface {
      license: string;
    }

    this.http.get<Myinterface>('package.json').subscribe(data => {
      console.log(data);
      this.someData = data.license;
    });
  }

  getMedia() {
    this.http.get(this.baseURL).subscribe(media => {
      this.mediaURL += media[0].filename;
      console.log(this.mediaURL);
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }
}


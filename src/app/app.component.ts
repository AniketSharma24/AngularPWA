import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';
  posts: any;
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data) => {
      console.log(data)
      this.posts = data
    })

  }
}

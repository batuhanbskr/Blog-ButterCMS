import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
[x: string]: any;

  blogPosts: any[] = [];
  searchValue = ''
  filteredBlogs: any[] = []

  ngOnInit(): void {
    this.http.get(`https://api.buttercms.com/v2/posts/?exclude_body=true&auth_token=${environment.readApiToken}`).subscribe((res: any) => {
      this.blogPosts = res.data
      this.filteredBlogs = this.blogPosts
    })
  }
  
  handleSearch() {
    this.filteredBlogs = this.blogPosts.filter((blog) => (
      blog.title.trim().toLocaleLowerCase()
        .includes(this.searchValue.trim().toLocaleLowerCase())
    ))
  }

  constructor(private http: HttpClient) {
    
  }
}



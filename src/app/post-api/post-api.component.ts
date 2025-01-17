import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  showForm = false; // Controls modal visibility
  newPost = { title: '', body: '' }; // Form data
  successMessage = '';
  postList: any[] = []; // Stores submitted data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts(); // Fetch posts on component initialization
  }
  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (posts: any) => {
        this.postList = posts.slice(0, 10); // Get only 10 posts for display
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  openForm() {
    this.showForm = true;
    this.successMessage = ''; // Clear previous messages
  }

  closeForm() {
    this.showForm = false;
  }

  submitForm() {
    debugger;
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.newPost).subscribe(
      (response: any) => {
        console.log('Post Successful', response);
        this.successMessage = 'Data submitted successfully!';
        debugger;
        
        // Add new data to the list
        // this.postList.unshift({ ...this.newPost, id: response.id });  storing api response after creating new post

           // Fetch updated posts from API instead of using local storage
           this.fetchPosts();
        // Reset form and close modal
        this.newPost = { title: '', body: '' };
        this.showForm = false;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
  
}

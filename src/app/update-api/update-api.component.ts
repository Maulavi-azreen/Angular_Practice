import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-api.component.html',
  styleUrl: './update-api.component.css'
})
export class UpdateApiComponent implements OnInit {
  postList: any[] = []; // Stores fetched posts
  selectedPost: any = null; // Stores the selected post for editing
  successMessage = '';

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

  openEditForm(post: any) {
    this.selectedPost = { ...post }; // Clone the object to avoid modifying the original list
    this.successMessage = '';
  }

  closeEditForm() {
    this.selectedPost = null;
  }

  updatePost() {
    if (!this.selectedPost) return;

    this.http.put(`https://jsonplaceholder.typicode.com/posts/${this.selectedPost.id}`, this.selectedPost).subscribe(
      (response: any) => {
        console.log('Update Successful', response);
        this.successMessage = 'Post updated successfully!';

        // Update the list with the new data
        const index = this.postList.findIndex(post => post.id === this.selectedPost.id);
        if (index !== -1) {
          this.postList[index] = { ...this.selectedPost };
        }

        this.closeEditForm();
      },
      (error) => {
        console.error('Error updating post:', error);
      }
    );
  }
}

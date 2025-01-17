import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css'
})
export class DeleteAPIComponent implements OnInit {
  postList: any[] = []; // Stores fetched posts
  successMessage = '';
  selectedPostId: number | null = null; // Stores post ID for deletion
  selectedPostTitle: string = ''; // Stores post title for confirmation

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

  openDeletePopup(postId: number, postTitle: string) {
    this.selectedPostId = postId;
    this.selectedPostTitle = postTitle;
  }

  closeDeletePopup() {
    this.selectedPostId = null;
  }

  confirmDelete() {
    if (!this.selectedPostId) return;

    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.selectedPostId}`).subscribe(
      () => {
        this.successMessage = 'Post deleted successfully!';
        this.postList = this.postList.filter(post => post.id !== this.selectedPostId); // Remove from UI
        this.closeDeletePopup(); // Close modal
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }
}

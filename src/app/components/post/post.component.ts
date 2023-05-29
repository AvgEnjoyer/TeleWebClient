import { Component, Inject, Input } from '@angular/core';
import { Post } from '../../models/post/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: Post; // Assuming post is an object with the required properties

  like(postId: string) {
    // Implementation for upvote/like logic
    console.log('Liked post with ID:', postId);
  }

  dislike(postId: string) {
    // Implementation for downvote/dislike logic
    console.log('Disliked post with ID:', postId);
  }

  viewComments(postId: string) {
    // Implementation for viewing comments logic
    console.log('Viewing comments for post with ID:', postId);
  }
  share(postId: string) {
    console.log('Sharing:', postId);
  }
  getImageStyle(index: number) {
    const numImages = this.post.mediaFiles.length;
    const remainder = numImages % 3;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (index === 0 && remainder === 1)
    {
      return { 'width': '100%' };
    } else
    if (index < 2 && remainder === 2)
    {
      return { 'width': '49.6%' };
    } else
    return { 'width': '32.8%' };
  }
  hideFullImage() {

    (document.querySelector('.full-image-container') as HTMLElement).style.display = 'none';


  }
  showFullImage(url: string)
  {
    // Set the clicked image source as the source for the full image
  (document.querySelector('.full-image') as HTMLImageElement).src = url;
  // Show the full image container
  (document.querySelector('.full-image-container')as HTMLElement).style.display = 'flex';
  }
}

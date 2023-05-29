import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post/post.interface';
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {GetChannelDTO, UpdateChannelDTO} from "../../models/channel/channel.interface";
import {ChannelService} from "../../services/channel/channel.service";
import {BlobServiceClient} from "@azure/storage-blob";
import {firebaseConfig} from "../../../../firebaseConfig";



const post: Post = {
  id: '1',
  text: "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.",
  date: new Date(),
  mediaFiles: [{
    type:'image',
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
  },
  {
    type:'image',
    url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    },
    {
      type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      type:'image',
        url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    },
    {
      type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    }]
};
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent{

  @Input() isAdmin: boolean = false;
  @Input()  activeChannelId?: string;
  posts: Post[] = [post,post,post,post,post,
    {
      id: '2',
      text: 'Post-2-text',
      date: new Date(),
      mediaFiles: []
    }];

  newPostContent: string = '';

  constructor() { }



  submitPost() {

  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      // Create a new instance of BlobServiceClient with your Azure Blob Storage connection details
      const blobServiceClient = new BlobServiceClient(firebaseConfig.blobConStr);

      // Retrieve a reference to a container where you want to upload the file
      const containerClient = blobServiceClient.getContainerClient(firebaseConfig.containerName);

      // Create a unique file name or use the original file name
      const fileName = `${Date.now()}-${file.name}`;

      // Get a block blob client for the file
      const blockBlobClient = containerClient.getBlockBlobClient(fileName);

      // Upload the file to Azure Blob Storage
      blockBlobClient.uploadData(file, {
        blobHTTPHeaders: { blobContentType: file.type },
        blockSize: 4 * 1024 * 1024, // Set the block size (optional)
        concurrency: 20, // Set the concurrency (optional)
        onProgress: (ev) => console.log(ev.loadedBytes) // Handle progress event (optional)
      }).then(() => {
        console.log('File uploaded successfully.');
        // You can perform additional actions after the file upload is complete
      }).catch((error) => {
        console.error('Error uploading file:', error);
        // Handle any errors that occurred during the upload process
      });
    }
  }


}

import { Component, Input} from '@angular/core';
import {ChannelService} from "../../services/channel/channel.service";
import {BlobServiceClient} from "@azure/storage-blob";
import {firebaseConfig} from "../../../../firebaseConfig";
import {GetPostDTO, PostMediaFile, UpdatePostDTO} from "../../models/post/post.interface";



const post: GetPostDTO = {
  id: '1',
  text: "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.",
  date: new Date(),
  likes: 12,
  dislikes: 3,
  mediaFileDTOs: [{
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
        url: 'https://telewebstorage.blob.core.windows.net/pictures/1685396288963-20460042.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2023-05-29T23:21:15Z&st=2023-05-29T15:21:15Z&spr=https&sig=OHO%2BnDV7IBp2Z6DRAT3zd1OWZzl1sTLzn7UTU6mHW4I%3D'
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
  posts: GetPostDTO[] = [post,post,post,post,post,
    {
      id: '2',
      text: 'Post-2-text',
      date: new Date(),
      likes: 20,
      dislikes: 3,
      mediaFileDTOs: [{
        type:'image',
        url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
      }]
    }];

  newPostContent: string = '';
  private file: File | undefined;

  constructor(private channelService: ChannelService) { }
  ngOnInit(): void {
    if (this.activeChannelId) {
      this.channelService.getPosts(this.activeChannelId).subscribe(response => {
        this.posts = response.data;
        console.log(this.posts);
        console.log(response.data);
      });
    }
  }



  submitPost() {
    if (this.file && this.activeChannelId) {

      const blobServiceClient = new BlobServiceClient(firebaseConfig.blobConStr);
      const containerClient = blobServiceClient.getContainerClient(firebaseConfig.containerName);
      const fileName = `${Date.now()}-${this.file.name}`;
      const blockBlobClient = containerClient.getBlockBlobClient(fileName);

      blockBlobClient.uploadData(this.file, {
        blobHTTPHeaders: { blobContentType: this.file.type },
        blockSize: 4 * 1024 * 1024, // Set the block size (optional)
        concurrency: 20, // Set the concurrency (optional)
        onProgress: (ev) => console.log(ev.loadedBytes) // Handle progress event (optional)
      }).then(() => {
        console.log('File uploaded successfully.');
        const fileUrl = blockBlobClient.url;
        console.log('File URL:', fileUrl);

        if (this.file && this.activeChannelId) {
          const mediaFile: PostMediaFile = {
            url: fileUrl,
            type: this.getFileType(this.file) // Set the type based on the file type
          };
          const post:UpdatePostDTO = {text: this.newPostContent, mediaFileDTOs: [mediaFile]};
          console.log(post);
          this.channelService.addPost(this.activeChannelId, post).subscribe(
            response => {
            this.posts.push(response.data);
          });
          console.log('fetch');
        }

      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    }
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.file = inputElement.files?.[0];
  }

  getFileType(file: File) {
    const mimeType = file.type;
    if (mimeType.startsWith('image/')) {
      return 'image';
    } else if (mimeType.startsWith('video/')) {
      return 'video';
    } else if (mimeType.startsWith('audio/')) {
      return 'audio';
    } else {
      return 'document';
    }
  }

}

export interface PostMediaFile {
    type: string;
    url: string;
}

export interface Post {
    id: string;
    text: string;
    date: Date;
    mediaFiles: PostMediaFile[];
}

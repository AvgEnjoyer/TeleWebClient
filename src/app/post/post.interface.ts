export interface PostMediaFile {
    type: string;
    url: string;
}

export interface Post {
    id: number;
    text: string;
    date: Date;
    mediaFiles: PostMediaFile[];
}

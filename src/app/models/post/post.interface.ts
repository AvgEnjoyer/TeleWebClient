export interface PostMediaFile {
  url: string;
  type: string;
}

export interface UpdatePostDTO {
    text: string;
    mediaFileDTOs: PostMediaFile[];
}
export interface GetPostDTO extends UpdatePostDTO{
    id: string;
    likes: number;
    dislikes: number;
    date: Date;
    mediaFileDTOs: PostMediaFile[];
}

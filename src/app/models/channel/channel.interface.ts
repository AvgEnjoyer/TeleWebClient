export interface UpdateChannelDTO{
  name: string;
  description: string;
}
export interface GetChannelDTO extends  UpdateChannelDTO{
    id: string;
    subscribers: number;
}

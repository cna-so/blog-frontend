export interface IPostModels {
  count: number;
  current_page: number;
  next_page: number;
  previous_page: number;
  total_page: number;
  posts: {
    body: string;
    title: string;
    tags: {
      title: string;
      link: string;
    }[];
    banner: string;
    created_at: Date;
    user_id: string;
    _id: string;
  }[];
}

export interface IPostProps {
  showMore: (page: number) => void;
  posts: IPostModels["posts"];
  next_page: number;
  previous_page: number;
}

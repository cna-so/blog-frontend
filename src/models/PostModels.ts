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
    cover_url: string;
    created_at: Date;
    user_id: string;
    _id: string;
  }[];
}

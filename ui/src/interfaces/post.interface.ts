export interface Post {
  _id: string;
  title: string;
  content: string;
}

export interface FetchOffsetResponse {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}

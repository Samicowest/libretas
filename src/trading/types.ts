export interface TradePost {
  text: string;
  images: string[];
  duration: number;
  author: string;
  timestamp: string;
}

export interface Comment {
  text: string;
  images: string[];
  author: string;
  timestamp: string;
}

export interface Vote {
  likes: number;
  dislikes: number;
}

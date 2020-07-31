import { book, post } from "./publicTypes";

export interface IAdminState {
  isAuthenticated: boolean;
  name?: string;
  email?: string;
  mobile?: string;
  avatar?: string;
  wallet?: number;
  boughtBooks?: number[];
  writtenBooks?: book[];
  writtenPosts?: post[];
  lastBookId?: number;
  lastChapterId?: number;
}

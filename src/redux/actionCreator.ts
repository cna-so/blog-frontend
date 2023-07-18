import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostModels } from "@/models/PostModels";
import { fetchHomeArticle } from "@/api";

export const fetchPosts = createAsyncThunk<
  IPostModels,
  { page: number },
  { rejectValue: string }
>("fetch/posts", async ({ page }, thunkAPI) => {
  try {
    return await fetchHomeArticle(page || 1);
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch posts.");
  }
});

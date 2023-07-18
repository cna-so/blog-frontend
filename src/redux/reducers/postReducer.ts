import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostModels } from "@/models/PostModels";
import { fetchPosts } from "@/redux/actionCreator";

interface IPostState extends IPostModels {
  loading: boolean;
  error: string | null;
}

const initialState: IPostState = {
  count: 0,
  posts: [],
  current_page: 0,
  next_page: 0,
  total_page: 0,
  previous_page: 0,
  error: null,
  loading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetReducer: (state, action: PayloadAction<string>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      if (state.current_page !== action.payload.current_page) {
        state.posts = state.posts.concat(action.payload.posts);
        state.current_page = action.payload.current_page;
        state.next_page = action.payload.next_page;
        state.previous_page = action.payload.previous_page;
        return;
      }
      state.posts = action.payload.posts;
      state.next_page = action.payload.next_page;
      state.previous_page = action.payload.previous_page;
      state.total_page = action.payload.total_page;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "something went wrong";
    });
  },
});

export const { resetReducer } = postSlice.actions;
export default postSlice.reducer;

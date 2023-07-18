import { AppDispatch, RootState, useAppDispatch } from "@/redux";
import { useEffect } from "react";
import { fetchPosts } from "@/redux/actionCreator";
import { useSelector } from "react-redux";

const HomeControllers = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const latestPost = useSelector((state: RootState) => state.posts);
  const showMoreLatestPosts = (page: number) => {
    dispatch(fetchPosts({ page }));
  };
  useEffect(() => {
    dispatch(fetchPosts({ page: 1 }));
  }, []);

  return {
    latestPost,
    showMoreLatestPosts,
  };
};
export default HomeControllers;

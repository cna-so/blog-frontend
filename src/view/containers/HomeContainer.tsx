import React from "react";
import LayoutContainer from "@/view/containers/LayoutContainer";
import useHomeControllers from "@/controllers/HomeControllers";
import LastArticles from "@/view/components/home/LastArticles";
import LoadingSpinner from "@/view/UI/LoadingSpinner";
import dynamic from "next/dynamic";

const SwiperGenerator = dynamic(() => import("@/view/components/swiper"));

const HomeContainer = () => {
  const { latestPost, showMoreLatestPosts } = useHomeControllers();
  console.log(latestPost)
  return (
    <LayoutContainer>
      <div>
        <div className={"line"} />
        <h3 className={"text-2xl pb-4"}>Most Viewed Posts</h3>
        {latestPost.loading ? (
          <LoadingSpinner />
        ) : (
          <SwiperGenerator posts={latestPost.posts} />
        )}
        <div className={"line"} />
        <h3 className={"text-2xl pb-4"}>Latest Posts</h3>
        <LastArticles
          posts={latestPost.posts}
          previous_page={latestPost.previous_page}
          next_page={latestPost.next_page}
          showMore={showMoreLatestPosts}
        />
      </div>
    </LayoutContainer>
  );
};

export default HomeContainer;

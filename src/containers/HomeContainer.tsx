import React, { FC } from "react";
import LayoutContainer from "@/containers/LayoutContainer";
import SwiperGenerator from "@/components/swiper";
import { IPostModels } from "@/models/PostModels";
import LastArticles from "@/components/home/LastArticles";

const HomeContainer = ({ data }: { data: IPostModels }) => {
  return (
    <LayoutContainer>
      <div>
        <div className={"line"} />
        <h3 className={"text-2xl pb-4"}>Most Viewed Posts</h3>
        <SwiperGenerator data={data} />
        <div className={"line"} />
        <h3 className={"text-2xl pb-4"}>Latest Posts</h3>
        <LastArticles data={data} />
      </div>
    </LayoutContainer>
  );
};

export default HomeContainer;

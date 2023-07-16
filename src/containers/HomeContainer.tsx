import React, { FC } from "react";
import LayoutContainer from "@/containers/LayoutContainer";
import SwiperGenerator from "@/components/swiper";
import { IPostModels } from "@/models/PostModels";

const HomeContainer = ({ data }: { data: IPostModels }) => {
  return (
    <LayoutContainer>
      <div>
        <h3 className={"text-xl pb-4"}>Most Viewed Posts</h3>
        <SwiperGenerator data={data} />
      </div>
    </LayoutContainer>
  );
};

export default HomeContainer;

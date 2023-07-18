import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperItem from "@/view/components/swiper/SwiperItem";
import homeStyles from "@/styles/home.module.css";
import { IPostModels } from "@/models/PostModels";

const SwiperGenerator = ({ posts }: { posts: IPostModels["posts"] }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      grabCursor={true}
      pagination={false}
      className={homeStyles.swiper}
    >
      {posts?.map((post, index) => (
        <SwiperSlide key={index} className={"w-80 max-w-[300px]"}>
          <SwiperItem
            key={index}
            imageUrl={post.cover_url}
            tags={post.tags}
            title={post.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGenerator;

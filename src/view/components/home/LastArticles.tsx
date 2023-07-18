import React from "react";
import { IPostProps } from "@/models/PostModels";
import SwiperItem from "@/view/components/swiper/SwiperItem";
import { useRouter } from "next/router";

const LastArticles = ({ posts, showMore, next_page }: IPostProps) => {
  const { push, pathname, query } = useRouter();
  return (
    <main className={"w-full flex flex-col justify-center"}>
      <div className={"grid grid-cols-4 gap-8"}>
        {posts?.map((post) => (
          <div key={post._id} className={""}>
            <SwiperItem
              imageUrl={post.cover_url}
              tags={post.tags}
              title={post.title}
            />
          </div>
        ))}
      </div>
      {(query.page ? +query.page : 1) <= next_page && (
        <button
          onClick={async () => {
            push(
              { pathname, query: { page: query.page ? +query.page + 1 : 2 } },
              undefined,
              {
                shallow: true,
              }
            );
            showMore(query.page ? +query.page + 1 : 2);
          }}
          className={
            "bg-accent-color rounded-full py-2 px-4 mx-auto text-white font-bold text-2xl my-8"
          }
        >
          Show More
        </button>
      )}
    </main>
  );
};

export default LastArticles;

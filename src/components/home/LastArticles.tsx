import React, { useEffect, useState } from "react";
import { IPostModels } from "@/models/PostModels";
import SwiperItem from "@/components/swiper/SwiperItem";
import { useRouter } from "next/router";

const LastArticles = ({ data }: { data: IPostModels }) => {
  const { push, pathname, query } = useRouter();
  const [articles, setArticles] = useState(data);
  return (
    <main className={"w-full flex flex-col justify-center"}>
      <div className={"grid grid-cols-4 gap-8"}>
        {articles.posts.map((post) => (
          <div key={post._id} className={""}>
            <SwiperItem
              imageUrl={post.cover_url}
              tags={post.tags}
              title={post.title}
            />
          </div>
        ))}
      </div>
      {(query.page ? +query.page : 1) !== articles.total_page && (
        <button
          onClick={() => push("/articles")}
          className={
            "bg-accent-color rounded-full py-2 px-4 mx-auto text-white font-bold text-2xl my-8"
          }
        >
          All Articles
        </button>
      )}
    </main>
  );
};

export default LastArticles;

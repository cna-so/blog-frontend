import React, { FC } from "react";
import Link from "next/link";

interface ISwiperValues {
  imageUrl: string;
  tags: {
    title: string;
    link: string;
  }[];
  title: string;
}

const SwiperItem: FC<ISwiperValues> = ({ tags, imageUrl, title }) => {
  return (
    <div className={"flex flex-col gap-5 "}>
      <img
        src={imageUrl}
        alt={"blog item image"}
        className={"w-full max-h-[300px] object-cover rounded-xl"}
      />
      <div className={"flex gap-2 items-center whitespace-normal"}>
        {tags.map((tag, index) => (
          <Link
            href={`/categories/${tag.link}`}
            key={index}
            className={"bg-gray-700 px-2 rounded-xl"}
          >
            {tag.title}
          </Link>
        ))}
      </div>
      <h1 className={"font-bold text-xl"}>{title}</h1>
    </div>
  );
};

export default SwiperItem;

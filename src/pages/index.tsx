import React from "react";
import HomeContainer from "@/containers/HomeContainer";
import { IPostModels } from "@/models/PostModels";
import { fetchHomeArticle } from "@/api";

export async function getServerSideProps({ query: { page = 1 } }) {
  const data = await fetchHomeArticle(page);
  return { props: { data } };
}

const Home = ({ data }: { data: IPostModels }) => {
  return <HomeContainer data={data} />;
};

export default Home;

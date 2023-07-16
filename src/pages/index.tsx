import React from "react";
import HomeContainer from "@/containers/HomeContainer";
import { IPostModels } from "@/models/PostModels";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/post/all?page=1");
  const data = await res.json();
  return { props: { data } };
}

const Home = ({ data }: { data: IPostModels }) => {
  return <HomeContainer data={data} />;
};

export default Home;

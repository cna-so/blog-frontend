export const fetchHomeArticle = async (page: number) => {
  const res = await fetch(`http://localhost:8080/post/all?page=${page}`);
  return await res.json();
};

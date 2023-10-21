export const fetchHomeArticle = async (page: number) => {
  const res = await fetch(`http://localhost:8080/api/v1/article?page=${page}`);
  return await res.json();
};

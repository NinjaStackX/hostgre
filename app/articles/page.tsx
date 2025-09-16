import React from "react";
import ArticleItem from "@/app/articles/articleItem";
import { Article, Product } from "@/utils/types";

const page = async () => {
  // const respone = await fetch("https://jsonplaceholder.typicode.com/Yposts");
  const respone = await fetch("http://localhost:5000/api/admin/?type=product");

  const articles = await respone.json();
  const product: Product[] = articles.product;

  return (
    <section className="m-5    ">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {" "}
        {product.map((e) => (
          <ArticleItem article={e} key={e._id} />
        ))}
      </div>
    </section>
  );
};

export default page;

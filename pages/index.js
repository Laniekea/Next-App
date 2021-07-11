import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Home.module.css";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
        <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
};

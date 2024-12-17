import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  // API 호출
  const response = await fetch("http://localhost:8080/api/hello");
  const data = await response.json();

  // 서버사이드에서 받아온 데이터를 페이지로 전달
  return {
    props: {
      message: data.message,
    },
  };
}

export default function Home({ message }: any) {
  const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   const fetchDelayedResponse = async () => {
  //     try {
  //       const res = await fetch("/api/hello");
  //       const data = await res.json();
  //       setResponse(data.message);
  //     } catch (error) {}
  //   };

  //   fetchDelayedResponse();
  // }, []);

  return (
    <main>
      {response ? response : "Loading..."} <span>ssr {message}</span>
    </main>
  );
}

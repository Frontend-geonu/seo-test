import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchDelayedResponse = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setResponse(data.message);
    };

    fetchDelayedResponse();
  }, []);

  return <main>{response ? response : "Loading..."}</main>;
}

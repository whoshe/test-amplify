import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "@/graphql/queries";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listTodos));
      setTodos(result.data.listTodos.items);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>목록보기</h1>
        <ul>
          {todos.map((todo, index) => {
            <li>{todo.name} {todo.description}</li>
          })}
        </ul>
      </main>
    </>
  );
}

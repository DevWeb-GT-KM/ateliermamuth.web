"use client";
import { ApolloProvider } from "@apollo/client";
import styles from "./page.module.css";
import client from "./apolloClient";
import { Boumso } from "./Boumso";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <Boumso />
      </main>
    </ApolloProvider>
  );
}

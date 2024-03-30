import Link from "next/link";
import "./page.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Mamuth",
  description:
    "Atelier Mamuth offers a planning service for your design, interior and exterior architecture projects.",
};

const Home: React.FC = () => {
  return (
    <main className="home-page-container">
      <h1 className="home-page-title">Home page</h1>
      <Link href={"/en/projects"}>Go to projects</Link>
    </main>
  );
};

export default Home;

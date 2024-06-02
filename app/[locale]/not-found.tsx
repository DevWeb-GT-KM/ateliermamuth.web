import "./not-found.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page-container">
      <h1>Oups, cette page n'existe pas!</h1>
      <div>
        <Link className="back-home-link" href="/">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}

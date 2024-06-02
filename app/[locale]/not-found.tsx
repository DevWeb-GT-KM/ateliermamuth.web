import "./not-found.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page-container">
      <p className="not-found-page-message">
        Oups, cette page n&apos;existe pas!
      </p>
      <div>
        <Link className="back-home-link" href="/">
          Retourner à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

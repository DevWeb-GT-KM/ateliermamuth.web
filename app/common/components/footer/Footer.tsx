import "./footer.scss";

import Image from "next/image";
import { client } from "@/../sanity/lib/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Link } from "@/../navigation";
import logo from "../../assets/images/footer/logoVector/mamuthLogo.svg";
import { CookiePreferencesText } from "./CookiePreferenceText";

type FooterProps = {
  data: any[];
};

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const builder = createImageUrlBuilder(client);

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <p className="footer-info-description">{data[0].aboutUs.shortDescription}</p>
          <div className="email-and-logo-container">
            <a href={`mailto:${data[0].email}`} className="footer-info-email">
              {data[0].email}
            </a>
            <Image
              className="footer-info-apdiq-logo"
              src={builder.image(data[0].apdiqLogo.asset.url).quality(100).url()}
              alt="Logo de l'association professionnelle des designers d'intérieur du Québec."
              width={0}
              height={0}
              quality={100}
              unoptimized
            />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <Link className="footer-link" href={{ pathname: "/projects" }}>
              {data[0].projects.pageTitle}
            </Link>
            <Link className="footer-link" href={{ pathname: "/about-us" }}>
              {data[0].aboutUs.pageTitle}
            </Link>
            <Link className="footer-link" href={{ pathname: "/blog" }}>
              {data[0].blog.pageTitle}
            </Link>
            <Link className="footer-link" href={{ pathname: "/contact" }}>
              {data[0].contact.pageTitle}
            </Link>
          </div>
          <div className="footer-links-column">
            <Link className="footer-link" href={{ pathname: "/services" }}>
              {data[0].services.pageTitle}
            </Link>
            {data[0].services.services.map((service: any, index: number) => {
              return (
                <Link
                  key={index}
                  className="footer-link"
                  href={{
                    pathname: "/services/[slug]",
                    params: { slug: service?.slug?.current },
                  }}
                >
                  {service.name}
                </Link>
              );
            })}
          </div>
          <div className="footer-links-column">
            <CookiePreferencesText label={data[0].cookies} />
            <Link className="footer-link" href={{ pathname: "/faq" }}>
              {data[0].faq.pageTitle}
            </Link>
            <div style={{ display: "flex", flexDirection: "row", marginTop: 0 }} className="footer-link">
              {data[0].socialMedias.map((socialMedia: any, index: number) => {
                return (
                  <Link
                    key={index}
                    className="footer-link"
                    style={{ marginRight: 8 }}
                    target="_blank"
                    href={{ pathname: socialMedia.link }}
                  >
                    {socialMedia.mediaName}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href={"/"}>
          <Image
            className="footer-mamuth-logo"
            src={logo}
            width={0}
            height={0}
            alt="Logo de la compagnie Atelier Mamuth"
            unoptimized
          />
        </Link>
        <div className="footer-copyright">
          <p className="footer-copyright-text">2024, Atelier mamuth</p>
          <p className="footer-copyright-text">Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
};

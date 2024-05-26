import "./footer.scss";

import Image from "next/image";
import { client } from "@/../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "@/../navigation";
import logo from "../../assets/images/footer/logoVector/mamuthLogo.svg";

type FooterProps = {
  data: any[];
};

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const builder = imageUrlBuilder(client);

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <h1 className="footer-info-description">
            {data[0].aboutUs.shortDescription}
          </h1>
          <div className="footer-info-email">{data[0].email}</div>
          <Image
            className="footer-info-apdiq-logo"
            src={builder.image(data[0].apdiqLogo.asset.url).url()}
            alt={"apdiq logo"}
            width={0}
            height={0}
          />
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
            <Link className="footer-link" href={{ pathname: "/faq" }}>
              {data[0].faq.pageTitle}
            </Link>
            <Link className="footer-link" href={{ pathname: "/" }}>
              {data[0].termsAndConditions}
            </Link>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
              className="footer-link"
            >
              {data[0].socialMedias.map((socialMedia: any, index: number) => {
                return (
                  <Link
                    key={index}
                    className="footer-link"
                    style={{ marginRight: 8 }}
                    href={{ pathname: "/" }}
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
        <Image
          className="image-test"
          src={logo}
          width={0}
          height={0}
          alt="test"
        />
        <div className="footer-copyright">
          <h1 className="footer-copyright-text">2024, Atelier mamuth</h1>
          <h1 className="footer-copyright-text">Tous droits réservés</h1>
        </div>
      </div>
    </div>
  );
};

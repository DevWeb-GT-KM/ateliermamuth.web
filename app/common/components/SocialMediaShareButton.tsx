"use client";

import "./socialMediaShareButton.scss";
import { isMobile } from "react-device-detect";
import {
  FaXmark,
  FaFacebook,
  FaFacebookMessenger,
  FaSquarePinterest,
  FaLinkedin,
} from "react-icons/fa6";
import imageUrlBuilder from "@sanity/image-url";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from "react-share";

import { client } from "@/../sanity/lib/client";
import { useEffect, useState } from "react";
import { SANITY_IMAGE_FORMAT } from "./images/sanityImageBuilderConfig";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";
import Link from "next/link";

type SocialMediaShareButtonProps = {
  image: any;
  title: string;
};

export const SocialMediaShareButton: React.FC<SocialMediaShareButtonProps> = ({
  image,
  title,
}) => {
  const { isPageOverlayHidden, setIsPageOverlayHidden } = usePageOverlay();
  const imageBuilder = imageUrlBuilder(client);

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [imageForSharingUrl, setImageForSharingUrl] = useState<string>("");

  useEffect(() => {
    setImageForSharingUrl(
      imageBuilder.image(image).format(SANITY_IMAGE_FORMAT.Jpg).url()
    );

    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (isPageOverlayHidden && isModalOpened) {
      setIsModalOpened(false);
    }
  }, [isPageOverlayHidden]);

  return (
    <>
      <button
        className="social-media-share-button"
        onClick={() => {
          setIsModalOpened(true);
          setIsPageOverlayHidden(false);
        }}
      >
        partager +
      </button>

      <div
        className={`social-media-share-modal ${isModalOpened ? "opened" : ""}`}
      >
        <div className="social-media-share-modal-header">
          <p className="social-media-share-modal-header-title">Partager</p>
          <FaXmark
            className="social-media-share-modal-header-close"
            onClick={() => {
              setIsModalOpened(false);
              setIsPageOverlayHidden(true);
            }}
          />
        </div>

        <div className="social-media-share-modal-icon-container">
          {isMobile ? (
            <Link
              href={`fb-messenger://share/?link=${currentUrl}&app_id=478599831508654`}
              target="_blank"
            >
              <FaFacebookMessenger className="social-media-share-modal-icon" />
            </Link>
          ) : (
            <FacebookMessengerShareButton
              url={currentUrl}
              appId="478599831508654"
            >
              <FaFacebookMessenger className="social-media-share-modal-icon" />
            </FacebookMessengerShareButton>
          )}

          <FacebookShareButton url={currentUrl}>
            <FaFacebook className="social-media-share-modal-icon" />
          </FacebookShareButton>

          <LinkedinShareButton url={currentUrl}>
            <FaLinkedin
              className="social-media-share-modal-icon"
              media={imageForSharingUrl}
            />
          </LinkedinShareButton>

          <PinterestShareButton
            url={currentUrl}
            media={imageForSharingUrl}
            description={title}
          >
            <FaSquarePinterest className="social-media-share-modal-icon" />
          </PinterestShareButton>
        </div>
      </div>
    </>
  );
};

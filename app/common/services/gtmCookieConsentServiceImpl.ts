import { GtmCookieConsentService } from "./gtmCookieConsentService";
import {
  GtmCookieConsentConfig,
  GtmCookieConsentStatus,
} from "../models/gtmCookieConsentConfig";
import { CookieConsentPreferences } from "../models/cookieConsentConfig";

const IS_BROWSER = typeof window !== "undefined";

export class GtmCookieConsentServiceImpl implements GtmCookieConsentService {
  private gtmContainerId?: string;

  constructor() {
    if (IS_BROWSER) {
        this.initDataLayer();
    }
  }

  public setConsent(
    consent: CookieConsentPreferences,
    isDefaultConfig?: boolean | undefined
  ): void {
    const gtmConsentConfigMapping: GtmCookieConsentConfig = {
      ad_storage: this.getGtmConsentValue(consent.advertising),
      analytics_storage: this.getGtmConsentValue(consent.analytics),
      personalization_storage: this.getGtmConsentValue(false),
      functionality_storage: this.getGtmConsentValue(false),
      security_storage: this.getGtmConsentValue(consent.necessary),
    };

    this.sendToGTM(gtmConsentConfigMapping, isDefaultConfig);
  }

  public setContainerId(containerId: string): void {
    this.gtmContainerId = containerId;
  }

  private sendToGTM(
    consent: GtmCookieConsentConfig,
    isDefaultConfig?: boolean
  ): void {
    if (IS_BROWSER && this.gtmContainerId) {
      // @ts-ignore
      this.gtag("consent", isDefaultConfig ? "default" : "update", consent);
      // @ts-ignore
      this.gtag("js", new Date());
      // @ts-ignore
      this.gtag("config", this.gtmContainerId);

      if (!isDefaultConfig) {
        window.dataLayer?.push({
          event: "cookies_consent_update",
        });
      }
    }
  }

  private getGtmConsentValue(isActivated: boolean): GtmCookieConsentStatus {
    return isActivated ? "granted" : "denied";
  }

  private initDataLayer(): void {
    window.dataLayer = window.dataLayer || [];
  }

  private gtag(): void {
    window.dataLayer?.push(arguments);
  }
}

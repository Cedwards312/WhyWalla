// Cookie consent state. Defaults and the saved choice are applied in index.html
// before the Google tag loads; this module handles changes from the banner.

const STORAGE_KEY = "walla-consent";
const OPEN_EVENT = "walla:open-cookie-settings";

export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setConsent(choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  window.clarity?.("consentv2", { ad_Storage: choice, analytics_Storage: choice });
}

// Records a conversion event in Google Ads / GA4. No personal details are sent.
export function trackEvent(name, params) {
  window.gtag?.("event", name, params);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

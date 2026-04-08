import Script from "next/script";

export default function CookiebotScript() {
  const cookiebotId = process.env.NEXT_PUBLIC_COOKIEBOT_CBID;

  if (!cookiebotId) return null;

  return (
    <>
      {/* Cookiebot can't be used without setting the Google Consent Mode defaults */}
      {/* Cookiebot automatically fires gtag('consent','update',…) when the user interacts with the banner. */}
      <Script
        id="google-consent-defaults"
        data-cookieconsent="ignore"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("consent", "default", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
          });
          gtag("set", "ads_data_redaction", true);
          gtag("set", "url_passthrough", false);
          `,
        }}
      />
      <Script
        data-cbid={cookiebotId}
        id="Cookiebot"
        src={`https://consent.cookiebot.com/uc.js`}
        data-blockingmode="auto"
      />
    </>
  );
}

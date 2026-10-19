import HeroSmall from "../components/shared/HeroSmall";
import { openCookieSettings } from "@/lib/consent";

const LAST_UPDATED = "October 14, 2026";
const CONTACT_EMAIL = "wallahealth@wallahealth.com";

const sections = [
  {
    heading: "Who we are",
    body: [
      "Walla Health Solutions (\"Walla\", \"we\", \"us\") operates whywalla.com. This policy explains what information we collect on this website, how we use it, and the choices you have.",
      "This policy covers our public marketing website only. Use of the Walla platform by our clinic customers is governed by their customer agreement and, where applicable, a Business Associate Agreement.",
    ],
  },
  {
    heading: "Information you give us",
    body: [
      "When you request a demo, we collect your name, email address, clinic name, clinic type, number of locations, and anything you choose to tell us about your operational challenges. We use this only to respond to your request, follow up about Walla, and improve how we talk about our product.",
      "Please do not include patient information in any form on this website.",
    ],
  },
  {
    heading: "Information collected automatically",
    body: [
      "Like most websites, we and our service providers automatically collect technical information when you visit: pages viewed, how you arrived (for example, from a search or an ad), approximate location derived from your IP address (city, region, country), device and browser type, and dates and times of visits.",
    ],
  },
  {
    heading: "Cookies and similar technologies",
    body: [
      "We use cookies and similar technologies to measure site traffic and understand how well our advertising performs. We currently use, or may use, the following services:",
    ],
    list: [
      "Google Ads — measures conversions from our ads and may be used to show Walla ads to past visitors.",
      "Google Analytics — reports on site traffic and visitor behavior in aggregate.",
      "Meta Pixel — measures conversions from our Facebook and Instagram ads and may be used to show Walla ads to past visitors.",
      "Microsoft Clarity — records how visitors interact with pages (clicks, scrolling) so we can improve the site. Text entered into form fields is masked.",
    ],
    after: [
      "Visitors in the EU/EEA, the UK, and Switzerland are asked for consent before any of these cookies are set. Everywhere else, you can decline at any time. We also treat a Global Privacy Control signal from your browser as a decline.",
    ],
    cookieButton: true,
  },
  {
    heading: "Health information",
    body: [
      "This marketing website is not designed to collect protected health information (PHI), and we do not ask for it. Analytics and advertising tools run only on our public marketing pages. They are never loaded on login, account, or other pages of the Walla platform that could display patient or clinic data.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We do not sell your personal information for money. We share information only with service providers that help us run this website and respond to you, such as our hosting, form, and analytics providers, and when required by law.",
      "Some U.S. state laws treat the use of advertising cookies to show you ads on other sites as \"sharing\" personal information. You can opt out of this by choosing Decline in our cookie settings or by enabling Global Privacy Control in your browser.",
    ],
  },
  {
    heading: "How long we keep information",
    body: [
      "We keep demo request information for as long as needed to respond to you and maintain our business relationship, and delete it on request. Analytics data is retained according to each provider's settings, typically 14 months or less.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information, to object to or restrict certain processing, and to withdraw consent. To make a request, email us at ${CONTACT_EMAIL}. We will not discriminate against you for exercising these rights.`,
    ],
  },
  {
    heading: "Children",
    body: [
      "This website is intended for healthcare businesses and is not directed to children under 16. We do not knowingly collect information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
    ],
  },
  {
    heading: "Contact us",
    body: [`Questions about this policy or your information? Email ${CONTACT_EMAIL}.`],
  },
];

export default function Privacy() {
  return (
    <>
      <HeroSmall
        pill="Privacy Policy"
        headline='Your privacy, <span class="text-teal">plainly.</span>'
        subheadline={`Last updated ${LAST_UPDATED}`}
      />

      <section className="bg-white px-5 py-16">
        <div className="max-w-[720px] mx-auto">
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="font-display font-bold text-[1.25rem] text-deep mb-3">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="text-[0.92rem] text-walla-text font-light leading-[1.8] mb-3">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-5 mb-3 space-y-2">
                  {s.list.map((item) => (
                    <li key={item} className="text-[0.92rem] text-walla-text font-light leading-[1.7]">{item}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="text-[0.92rem] text-walla-text font-light leading-[1.8] mb-3">{p}</p>
              ))}
              {s.cookieButton && (
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="mt-1 bg-deep text-white font-body text-[0.85rem] font-medium px-4 py-2.5 rounded-[7px] hover:bg-mid transition-colors"
                >
                  Change cookie settings
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

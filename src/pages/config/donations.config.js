import DonationsSection from "@/sections/DonationsSection/DonationsSection";
import SupportSection from "@/sections/SupportSection/SupportSection";
import { donationsSection } from "@/data/donations";
import { donationsSectionEn } from "@/data/donations.en";
import { mainSupport } from "@/data/main";

export function buildDonationsPageConfig(language = "ua") {
  const donations = language === "ua" ? donationsSection : donationsSectionEn;
  const support = mainSupport[language] || mainSupport.ua;

  // Customize support section for Donations page
  const donationsSupportProps = language === "ua"
    ? {
        ...support,
        title: "АКТИВНІ",
        ctaText: "ПРО ЗБОРИ",
        ctaHref: null,
      }
    : {
        ...support,
        title: "ACTIVE",
        bankTitles: {
          ...support.bankTitles,
          MONOBANK: "DONATE NOW",
          "CREDIT CARD": "DONATE NOW",
        },
        ctaText: "ABOUT FUNDRAISING",
        ctaHref: null,
      };

  return {
    startTheme: "surface",
    sections: [
      { id: "donations", Component: DonationsSection, props: donations },
      {
        id: "support",
        Component: SupportSection,
        props: donationsSupportProps,
      },
    ],
  };
}

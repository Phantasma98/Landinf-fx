import DonationsSection from "@/sections/DonationsSection/DonationsSection";
import SupportSection from "@/sections/SupportSection/SupportSection";
import { donationsSection } from "@/data/donations";
import { donationsSectionEn } from "@/data/donations.en";
import { supportSectionUa } from "@/data/support";
import { supportSectionEn } from "@/data/support.en";

export function buildFundraisingPageConfig(language = "ua") {
  const fundraising = language === "ua" ? donationsSection : donationsSectionEn;
  const supportSection = language === "ua" ? supportSectionUa : supportSectionEn;

  return {
    startTheme: "surface",
    sections: [
      { id: "fundraising", Component: DonationsSection, props: fundraising },
      {
        id: "support",
        Component: SupportSection,
        props: { ...supportSection, ctaText: null, ctaHref: null },
      },
    ],
  };
}

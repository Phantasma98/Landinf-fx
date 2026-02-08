import DonationsSection from "@/sections/DonationsSection/DonationsSection";
import SupportSection from "@/sections/SupportSection/SupportSection";
import { donationsSection } from "@/data/donations";
import { donationsSectionEn } from "@/data/donations.en";
import { supportSectionUa } from "@/data/support";
import { supportSectionEn } from "@/data/support.en";

export function buildDonationsPageConfig(language = "ua") {
  const donations = language === "ua" ? donationsSection : donationsSectionEn;
  const supportSection = language === "ua" ? supportSectionUa : supportSectionEn;

  return {
    startTheme: "surface",
    sections: [
      { id: "donations", Component: DonationsSection, props: donations },
      {
        id: "support",
        Component: SupportSection,
        props: { ...supportSection, ctaText: null, ctaHref: null },
      },
    ],
  };
}

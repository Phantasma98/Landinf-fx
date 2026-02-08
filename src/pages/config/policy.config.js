import PolicySection from "@/sections/PolicySection/PolicySection";
import { policySectionUa } from "@/data/policy.ua";
import { policySectionEn } from "@/data/policy.en";

export function buildPolicyPageConfig(language = "ua") {
  const policySection = language === "ua" ? policySectionUa : policySectionEn;

  return {
    startTheme: "surface",
    sections: [{ id: "policy", Component: PolicySection, props: policySection }],
  };
}

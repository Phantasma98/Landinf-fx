import VacancySection from "@/sections/VacancySection/VacancySection";
import VacancyJobSection from "@/sections/VacancyJobSection/VacancyJobSection";
import VacancyFormSection from "@/sections/VacancyFormSection/VacancyFormSection";
import {
  vacancyDetail,
  vacancyForm,
  vacancySimilarJobs,
} from "@/data/vacancy";

export const vacancyPageConfig = {
  startTheme: "surface",
  footerDark: true,
  sections: [
    { id: "vacancy", Component: VacancySection, props: vacancyDetail },
    { id: "similar-jobs", Component: VacancyJobSection, props: vacancySimilarJobs },
    { id: "form", Component: VacancyFormSection, props: vacancyForm },
  ],
};

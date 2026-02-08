import { supportSectionEn } from "./support.en";
import { arsenalSectionEn } from "./arsenal.en";

// Images
import { DronMain as dronMain } from "@/assets";
import {
  ValuesImage as valuesImg,
  CommanderImage as commanderImg,
  CarouselMain1 as carousel1,
  CarouselMain2 as carousel2,
  CarouselMain3 as carousel3,
} from "@/assets";

export const mainHeroEn = {
  backgroundImage: dronMain,
  meta: (
    <>
      MAIN DEPARTMENT OF UNMANNED AERIAL SYSTEMS <br /> OF THE STATE BORDER
      GUARD SERVICE OF UKRAINE "FENIKS"
    </>
  ),
  title: (
    <>
      burning <br /> the limits of possible
    </>
  ),
  primaryAction: { text: "Join us" },
  secondaryAction: { text: "Donate", href: "#support" },
};

export const mainValuesEn = {
  title: "our values",
  subtitle:
    "Fenix is a modern combat unit built on the speed, precision, and culture of a Formula 1 team. Our primary mission is the success of the operation, but our foundational value is the preservation of our soldiers' lives.",
  image: valuesImg,
  values: [
    {
      title: "Radical Honesty",
      description:
        "We are not afraid of the truth. If a problem exists, it is voiced immediately. Initiative is never punished; it is rewarded. In our team, dishonesty is the ultimate red flag.",
    },
    {
      title: "Result-Oriented Culture",
      description:
        "We prioritize outcomes over outdated protocols. If a legacy instruction stands in the way of efficiency or operational success, we bypass it to optimize the process.",
    },
    {
      title: "Anti-Stagnation",
      description:
        "We operate like a military startup. We learn every day. In this environment, standing still is the same as falling behind. We provide the drive; you provide the momentum.",
    },
    {
      title: "The Ecosystem of Excellence",
      description:
        "The drone pilot is the \"driver\" at the peak of our ecosystem, but they cannot fly without a world-class support crew. We value our \"mechanics\" just as much as our \"racers.\" Every role is mission-critical.",
    },
    {
      title: "Pit-Stop Specialization",
      description:
        "In a race, the mechanic doesn't drive, and the pilot doesn't change the tires. We guarantee that you will be placed where your specific skills are most effective. Focus on your expertise; we'll handle the rest.",
    },
    {
      title: "The Telemetry Principle",
      description:
        "We are driven by data, not emotions. We conduct warfare based on live streams, signals intelligence, and real-time analytics. If there is no data, there is no order.",
    },
  ],
};

export const mainCommanderEn = {
  title: "COMMANDER",
  roleTitle: "HERO OF UKRAINE",
  rank: "COLONEL",
  name: "DMYTRO OLEKSYUK",
  image: commanderImg,
  awardsTitle: "MILITARY AWARDS",
  awards: [
    "HERO OF UKRAINE WITH THE ORDER OF THE GOLDEN STAR",
    "ORDER OF BOHDAN KHMELNYTSKY, 2ND CLASS",
    "MEDAL \"FOR MILITARY SERVICE TO UKRAINE\"",
  ],
  bio: (
    <>
      A 2013 graduate of the Bohdan Khmelnytsky National Academy of the State Border Guard Service of Ukraine, Colonel began his service at the "Milove" border guard station in the Luhansk Border Guard Detachment.
      <br /><br />
      When the full-scale invasion began on February 24, 2022, he was serving as the Head of the "Zolote" border guard station in the Sievierodonetsk district. In the face of overwhelming enemy forces, he demonstrated exemplary leadership, courageously managing the regrouping of subordinate units and assets under fire.
      <br /><br />
      From February to July 2022, he led his unit through the most intense defensive operations in Kreminna, Lyman, Svyatohirsk, Horodychne, and Tetianivka. In December 2022, he spearheaded the formation of a new combat element within the Luhansk Border Guard Detachment. Under his command, this unit deployed to the Bakhmut sector, where he integrated various assets - including SPG-9s, 120mm mortars, MANPADS, UAVs, and AGS-17s - into a highly synchronized combat force.
      <br /><br />
      In January 2024, he assumed command of the 2nd Rapid Response Command, "Feniks". Under his leadership in the Bakhmut sector, the unit achieved significant tactical successes, neutralizing high-value targets including the "Zoopark-1" radar system and T-90M "Proryv" tanks.
      <br /><br />
      As of early 2026, Colonel Oleksyuk continues to lead at the forefront of military innovation, actively implementing new technologies and tactical formats to maximize the unit's operational effectiveness.
    </>
  ),
};

export const mainEcosystemEn = {
  title: "ECOSYSTEM",
  subtitle:
    "We have built a solid Unmanned Aerial Systems structure that operates with the precision of a Swiss watch.",
  items: [
    {
      title: "UAS LABORATORY",
      description:
        "Our own laboratory for developing and modifying unmanned aerial vehicles. Here we create innovative solutions to enhance the effectiveness of combat operations.",
    },
    {
      title: "MUNITION R&D WORKSHOP",
      description:
        "A specialized workshop for manufacturing and modifying munitions for UAVs. We provide the unit with high-quality strike capabilities.",
    },
    {
      title: "UAV OPERATOR TRAINING CENTER",
      description:
        "We have established a modern training center dedicated to aspiring UAV operators. Our program prepares pilots for their first missions by simulating highly realistic combat environments. Led by instructors with extensive frontline experience, we help every student unlock their full operational potential.",
    },
  ],
};

export const mainHistoryEn = {
  title: "HISTORY",
  description:
    "The combat path of the Feniks Regiment is a story of radical transformation: evolving from a border guard infantry unit into a cornerstone of Ukraine’s Unmanned Systems Forces.",
  images: [carousel1, carousel2, carousel3],
  years: [
    {
      year: "2022",
      title: "THE FIRST YEAR OF FULL-SCALE WAR",
      paragraphs: [
        "The Feniks unit grew from an infantry border guard department (special type) of the second rapid response border commandant's office of the 3rd Luhansk Border Guard Detachment.",
        "On February 24, 2022, the unit met the full-scale invasion at the easternmost positions of Ukraine — where the border was crossed first. The first year passed through a series of defensive battles: Kreminna, Rubizhne, Popasna, Lyman, Sviatohirsk. Each city added experience, each battle — new lessons.",
        "In December 2022, the unit entered the defense of Bakhmut, which at that time was one of the hottest areas of the front. During the Bakhmut campaign, hundreds of Wagner mercenaries were eliminated. Comrade 'Hudson' with a Stinger MANPADS shot down two enemy Su-25s — a rare success for an infantry unit.",
        "But the main thing Bakhmut gave was the birth of a new direction — it was there that the first multirotor UAV crews were formed for drops on enemy infantry. At that time, no one could predict that this would become the basis for the unit's future transformation.",
      ],
    },
    {
      year: "2023",
      title: "RESTRUCTURING AND EXPERIMENTATION",
      paragraphs: [
        "In May 2023, during the reorganization of the Luhansk Border Guard, the Second Rapid Response Border Commandant's Office 'Feniks' was formed.",
        "Recruitment yielded an unexpected result: 80% of newcomers had no military experience. Ordinary men and women who decided to fight. Six groups were sent to Great Britain for training under the Interflex program. We received our first heavy bombers and began training FPV crews.",
        "At the same time, the unit began experimenting with weapons atypical for border guards. For the first time in the history of the border service, crews of 120mm, 82mm, 60mm mortars, AGS-17, ZU, Stugna-P, and M113 APCs were deployed. The infantry department was gradually transforming into something more.",
      ],
    },
    {
      year: "2024",
      title: "KOSTIANTYNIVKA AND THE RISE OF DRONE WARFARE",
      paragraphs: [
        "On January 6, 2024, the unit entered the defense of Kostiantynivka. Over the next six months, from January to July, the enemy tried to break through, but not a single meter was lost in their sector.",
        "But the real story of that period is about drones. UAV crews stopped being an experiment and began working as a coordinated mechanism. In February, the 'Vampire' crew with senior 'Pako' destroyed three MT-12 guns. Tank offensives were shattered by FPV strikes. Despite having only 30-40 crew members, the unit regularly became the best in terms of strike count in OTU 'Luhansk'.",
        "In July 2024, Feniks officially became a commandant's office of RUBpAK — the first combat unit of unmanned systems in the SBGS structure. The unit deployed operations in the Kupyansk, Kurdiumivka, and Lyman directions. We created our own workshops for drone maintenance and repair. We organized a workshop for working with explosives.",
        "Much was achieved thanks to our brothers from the 24th OMBr, 28th OMBr, and the 'Code 9.2' unit of the 92nd OShBr.",
      ],
    },
    {
      year: "2025",
      title: "SCALING THE SYSTEM",
      paragraphs: [
        "In January 2025, the unit scaled to regiment size, becoming the Main Department of Unmanned Aerial Systems of the State Border Guard Service of Ukraine.",
        "In February 2025, the presidential project 'Drone Line' was launched, which included five of the best unmanned aerial systems units, including Feniks. The concept: a 'killzone' 10-15 km deep, where the enemy cannot move safely. Constant air cover for infantry. Detection and destruction of targets before they approach the line of contact.",
        "In June 2025, Feniks joined the Unmanned Systems Forces group, and this became a key event — centralized supply, management, implementation of new systems. System scaling — if in February the unit had one rapid response commandant's office, by the end of summer the number increased to three. In autumn, a long-range strike department, an NRK department, and an anti-aircraft UAV department were created. In 2025, the unit hit 28,000 targets worth approximately $2.5 billion.",
      ],
    },
  ],
};

export const mainStatisticEn = {
  title: (
    <>
      Feniks <br /> today
    </>
  ),
  items: [
    { num: "TOP-2", title: "IN THE UNMANNED SYSTEMS FORCES GROUP" },
    { num: "TOP-3", title: "IN THE DELTA UAS RANKING" },
    { value: 26500, title: "ENEMY TARGETS DAMAGED AND DESTROYED" },
    { value: 5130, title: "ENEMY PERSONNEL ELIMINATED" },
    { value: 2.2, prefix: "$ ", suffix: " Bln", decimals: 1, title: "TOTAL DAMAGE INFLICTED ON THE ENEMY" },
  ],
};

export const mainArsenalEn = arsenalSectionEn;

export const mainSupportEn = supportSectionEn;

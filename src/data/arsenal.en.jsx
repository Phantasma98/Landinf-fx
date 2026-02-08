import {
  DroneStalkerImage,
  DroneMatriceImage,
  DroneVampireImage,
  DroneInterceptorImage,
  DroneLelekaImage,
  GroundRobotImage,
} from "@/assets";

export const arsenalSectionEn = {
  title: "ARSENAL",
  subtitle:
    "Feniks regiment operates high-effectiveness systems for strike, reconnaissance, and logistics: from FPV drones to fixed-wing UAVs and ground robotic platforms.",
  items: [
    {
      title: "FPV DRONES",
      image: DroneStalkerImage,
      imageAlt:
        "Specialized fiber-optic FPV drone Stalker used by Feniks for EW-resistant missions.",
      description:
        "FPV drones are piloted in first-person view. Video can be transmitted via radio or fiber-optic cable. They are used as kamikaze platforms with different warheads and for munition drops.",
    },
    {
      title: "QUADCOPTERS",
      image: DroneMatriceImage,
      imageAlt:
        "Reconnaissance quadcopter Matrice 4 in flight during Feniks operations.",
      description:
        "Quadcopters are lightweight multirotor UAVs with vertical takeoff/landing and hover capability. Their strengths are maneuverability and stable flight. Typical use: ISR, fire correction, precision drops, and light cargo delivery.",
    },
    {
      title: "HEAVY BOMBERS",
      image: DroneVampireImage,
      imageAlt:
        "Night heavy bomber drone Vampire during a Feniks combat mission.",
      description:
        "Heavy bombers are larger strike multirotor UAVs with high accuracy, payload up to 15 kg, and range up to 15 km. They are used for munition delivery, mining, logistics, and at times casualty support tasks.",
    },
    {
      title: "INTERCEPTORS",
      image: DroneInterceptorImage,
      imageAlt:
        "P1-sun interceptor drone used by Feniks to counter hostile UAV activity.",
      description:
        "Interceptor UAVs are configured to engage enemy drones in airspace near the line of contact and to protect friendly units from persistent aerial threats.",
    },
    {
      title: "STRIKE & RECON WINGS",
      image: DroneLelekaImage,
      imageAlt:
        "Leleka-100 fixed-wing UAV performing aerial reconnaissance for Feniks.",
      description:
        "Fixed-wing systems are used for deep reconnaissance, target detection, and strike support over longer distances than multirotor platforms.",
    },
    {
      title: "GROUND ROBOTIC SYSTEMS",
      image: GroundRobotImage,
      imageAlt:
        "Ground robotic platform used by Feniks for frontline logistics and evacuation tasks.",
      description:
        "Ground robotic systems support logistics, ammunition movement, and mission support in high-risk zones with reduced exposure for personnel.",
    },
  ],
  primaryCta: { text: "JOIN THE TEAM" },
  secondaryCta: { text: "VIEW VACANCIES", href: "/vacancies" },
};

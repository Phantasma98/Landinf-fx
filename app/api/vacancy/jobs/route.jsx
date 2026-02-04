//app/api/vacancy/jobs/route.jsx

import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  try {
    // const headersList = await headers();
    // const result = await UserCheck(headersList);

    // if (result instanceof NextResponse) {
    //   return result;
    // }

    // if (!result.status) {
    //   return NextResponse.json(
    //     { error: "Unauthorized access, please log in." },
    //     { status: 403 },
    //   );
    // }

    //Main

    let units;
    switch (category) {
      case "БПЛА":
        units = Array(8).fill({
          title: "Оператор БПЛА розвідувального  типу",
          tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
          link: "/vacancy/2",
        });
        break;

      default:
        units = Array(8).fill({
          title: "Інженер мережевих інтеграцій",
          tags: ["#IT", "#КОНТРАКТ 18-24"],
          link: "/vacancy/1",
        });
        break;
    }

    return NextResponse.json({ units: units }, { status: 200 });
  } catch (error) {
    console.error("Vacancy GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch vacancy data due to a server error." },
      { status: 500 },
    );
  }
}

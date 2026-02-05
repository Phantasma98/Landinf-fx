import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
  // const { searchParams } = new URL(request.url);
  // const userUnit = searchParams.get("userUnit");

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
    const units = [
      "БПЛА",
      "НРК",
      "РЕБ / РЕР",
      "МАЙСТЕРНЯ",
      "IT",
      "ЗВʼЯЗОК",
      "ТРАНСПОРТ",
      "ШТАБ",
      "ІНШЕ",
    ];

    return NextResponse.json({ units: units }, { status: 200 });
  } catch (error) {
    console.error("Job GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data due to a server error." },
      { status: 500 },
    );
  }
}

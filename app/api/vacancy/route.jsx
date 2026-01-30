import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userUnit = searchParams.get("userUnit");

  try {
    const headersList = await headers();
    const result = await UserCheck(headersList);

    if (result instanceof NextResponse) {
      return result;
    }

    if (!result.status) {
      return NextResponse.json(
        { error: "Unauthorized access, please log in." },
        { status: 403 },
      );
    }

    //Main
    const { searchParams } = new URL(request.url);
    const prikkshrId = searchParams.get("prikkshrId");
  } catch (error) {
    console.error("All_position GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch all_position data due to a server error." },
      { status: 500 },
    );
  }
}

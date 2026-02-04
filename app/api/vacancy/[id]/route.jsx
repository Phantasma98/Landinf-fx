//app/api/vacancy/[id]/route.tsx
"use server";

import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(params) {
  // const { searchParams } = new URL(request.url);
  // const userUnit = searchParams.get("userUnit");
  const { id } = await params;

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

    const unit = {
      id: id,
      title: "Інженер мережевих інтеграцій",
      category: "IT / ЗВʼЯЗОК",
      duties: [
        "налаштування локальних мереж (LAN) та бездротових мостів на пунктах керування для передачі відеопотоків та даних телеметрії в режимі реального часу",
        "налаштування та обслуговування супутникового звʼязку (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція в єдину мережу підрозділу",
      ],
      require: [
        "налаштування локальних мереж (LAN) та бездротових мостів на пунктах керування для передачі відеопотоків та даних телеметрії в режимі реального часу",
        "налаштування та обслуговування супутникового звʼязку (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція в єдину мережу підрозділу",
      ],
      conditions: [
        "налаштування локальних мереж (LAN) та бездротових мостів на пунктах керування для передачі відеопотоків та даних телеметрії в режимі реального часу",
        "налаштування та обслуговування супутникового звʼязку (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція в єдину мережу підрозділу",
      ],
    };

    return NextResponse.json({ unit: unit }, { status: 200 });
  } catch (error) {
    console.error("Job GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data due to a server error." },
      { status: 500 },
    );
  }
}

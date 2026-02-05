import { NextResponse } from "next/server";
import mongoose from "mongoose";

import connectMongo from "@/utils/dbConfigMongo";
import Recruit from "../models/recruit";

// POST:
export async function POST(req) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const { name, phone, contact, type } = data;

    if (!name || !phone || !contact || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await connectMongo();

    const createdUnit = new Recruit({
      _id: new mongoose.Types.ObjectId(),
      name,
      phone,
      contact,
      type,
    });

    await createdUnit.save();

    return NextResponse.json(
      {
        name: createdUnit.name,
        phone: createdUnit.phone,
        contact: createdUnit.contact,
        type: createdUnit.type,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Error in POST /form:", err);
    return NextResponse.json(
      { error: err || "Internal Server Error" },
      { status: 500 },
    );
  }
}

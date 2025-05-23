import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({
    msg: "API Working",
  });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;

    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: `${imgUrl}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    // return NextResponse.json({ imgUrl });
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

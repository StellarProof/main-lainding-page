import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(req: NextRequest) {
  const { email, is_anchor } = await req.json();

  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Name: {
          title: [{ text: { content: email } }],
        },
        Email: {
          email: email,
        },
        "Is Anchor": {
          checkbox: is_anchor === "Yes — Stellar anchor",
        },
        Date: {
          date: { start: new Date().toISOString() },
        },
        Source: {
          rich_text: [{ text: { content: "Landing page" } }],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

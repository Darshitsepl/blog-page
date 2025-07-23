import { getAllAuthor } from "@/sanity/lib/query/query";
import { writeClient } from "@/sanity/lib/writeclient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await writeClient.fetch(getAllAuthor);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch authors" }, { status: 500 });
    }
}
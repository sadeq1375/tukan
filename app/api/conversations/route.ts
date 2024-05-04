import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId, isGroup, members, name } = body;
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse("Invalid Data", { status: 400 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

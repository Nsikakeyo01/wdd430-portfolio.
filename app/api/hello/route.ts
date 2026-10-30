
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Hello from Nsikak Eyo's Next.js Portfolio!",
    });
}

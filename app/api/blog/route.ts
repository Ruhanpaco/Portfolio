import { NextResponse } from "next/server";

/**
 * PUBLIC CONTENT API (READ-ONLY)
 * POST method is decommissioned in favor of Server Actions for security.
 */

export async function POST() {
    return NextResponse.json(
        { error: "This endpoint is deprecated. Use Server Actions for secure content creation." },
        { status: 405 }
    );
}

// We keep GET if needed for public listing, or decommission if fully handled by server components
export async function GET() {
    return NextResponse.json(
        { error: "Method not allowed. Use Server Components for data fetching." },
        { status: 405 }
    );
}

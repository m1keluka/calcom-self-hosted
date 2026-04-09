import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    {
      associatedApplications: [
        {
          applicationId: "706a016d-518a-4730-a00a-44b8390dcbca",
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body: unknown = await req.json();

  const result = signUpSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
};

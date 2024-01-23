import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import PasswordlessLoginEmail from "~/components/emails/PasswordlessLoginEmail";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sendVerificationRequest(params: {
  identifier: any;
  url: any;
}) {
  const { identifier, url } = params;
  const { host } = new URL(url);

  try {
    const data = await resend.emails.send({
      from: "YOUR_VERIFIED_DOMAIN",
      to: [identifier],
      subject: `Log in to ${host}`,
      text: `Sign in to ${host}\n${url}\n\n`,
      react: PasswordlessLoginEmail({ url, host }),
    });
    return { success: true, data };
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
}

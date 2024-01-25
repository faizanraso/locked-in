// verification-email.ts
import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

export interface VerificationEmailProps {
  url: any;
}

export default function VerificationEmail({ url }: VerificationEmailProps) {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}

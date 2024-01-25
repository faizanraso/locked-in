import { createTransport } from "nodemailer";
import { render } from "@react-email/render";

export interface Theme {
  colorScheme?: "auto" | "dark" | "light";
  logo?: string;
  brandColor?: string;
  buttonText?: string;
}

export default async function sendVerificationRequest(params: {
  identifier: any;
  url: any;
  provider: any;
  theme: any;
}) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email (${failed.join(", ")}) could not be sent`);
  }
}

function html(params: { url: string }) {
  const { url } = params;

  return `

<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-position:bottom;background-repeat:no-repeat, no-repeat">
      <tbody>
        <tr style="width:100%">
          <td><span style="display:block;outline:none;border:none;text-decoration:none;font-size:56px">🔒</span>
            <h1 style="font-size:28px;font-weight:bold;margin-top:48px">🪄 Your login link</h1>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:24px 0">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:16px;line-height:26px;margin:16px 0"><a href="${url}" style="color:#FF6363;text-decoration:none" target="_blank">👉 Click here to sign in 👈</a></p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">If you didn&#x27;t request this, please ignore this email.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />- Locked In</p>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dddddd;margin-top:48px" /><span style="display:block;outline:none;border:none;text-decoration:none;-webkit-filter:grayscale(100%);filter:grayscale(100%);margin:20px 0;font-size:56px"></span>
            <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px">Locked In </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

{
  /*
`<body style="background: ${color.background};">
<table width="100%" border="0" cellspacing="20" cellpadding="0"
  style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
  <tr>
    <td align="center"
      style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
      Sign in to <strong>${escapedHost}</strong>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 20px 0;">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
              target="_blank"
              style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
              in</a></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align="center"
      style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
      If you did not request this email you can safely ignore it.
    </td>
  </tr>
</table>
</body>`*/
}

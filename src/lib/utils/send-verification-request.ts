import { createTransport } from "nodemailer";

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
    from: { name: "Locked In 🔒", address: provider.from },
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
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td>
            <h1 style="font-weight:semibold;font-size:36px;">
              🔒 <span style="font-style: italic;">locked in</span>
            </h1>
            <p style="font-size:16px;line-height:26px;margin:16px 0">Hi <!-- -->there<!-- -->,</p>
            <p style="font-size:16px;line-height:26px;margin:16px 0">Click on the button below to log in.</p>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center">
            <br />
              <tbody>
                <tr>
                  <td><a href="${url}" style="background-color:#000000;border-radius:3px;color:#fff;font-weight:medium;font-size:16px;text-decoration:none;text-align:center;display:inline-block;padding:12px 12px 12px 12px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%;mso-text-raise:18" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Get started</span><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></td>
                </tr>
              </tbody>
            </table>
            <br />
            <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />The Locked In team</p>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
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

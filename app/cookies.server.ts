import {createCookie} from '@remix-run/node';

export const gdprConsent = createCookie("gdpr-consent", {
  secrets: ['asd'],
  httpOnly: true,
  maxAge: 31536000, // One Year
});

export function getCookieHeader (request: Request) {
  return request.headers.get("Cookie")
}

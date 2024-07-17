import { encodedData } from "../utils/encoded-data";
import { createHmac } from "node:crypto";

interface ISignOptions {
  data: Record<string, any>;
  exp: number;
  secret: string;
}

export function sign(options: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    ...options.data,
    iat: Date.now(),
    exp: options.exp,
  };

  const base64EncodedHeader = encodedData(header);

  const base64EncodedPayload = encodedData(payload);

  const hmac = createHmac("sha256", options.secret);

  const signature = hmac
    .update(`${base64EncodedHeader}.${base64EncodedPayload}`)
    .digest("base64url");

  return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
}

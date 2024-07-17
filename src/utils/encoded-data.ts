export function encodedData(data: Record<string, any>) {
  return Buffer.from(JSON.stringify(data)).toString("base64url");
}

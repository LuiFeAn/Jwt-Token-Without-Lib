import { sign } from "./sign";

const jwt = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    id: 1,
    name: "Luis Fernando",
  },
  secret: "S3cretJwtK3y",
});

console.log(jwt);

// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $slogan from "./routes/slogan.tsx";
import * as $subscribe_result from "./routes/subscribe-result.tsx";
import * as $subscribe from "./routes/subscribe.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $GetDenoLogo from "./islands/GetDenoLogo.tsx";
import * as $QuerySlogan from "./islands/QuerySlogan.tsx";
import * as $SubscribeResult from "./islands/SubscribeResult.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/slogan.tsx": $slogan,
    "./routes/subscribe-result.tsx": $subscribe_result,
    "./routes/subscribe.tsx": $subscribe,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/GetDenoLogo.tsx": $GetDenoLogo,
    "./islands/QuerySlogan.tsx": $QuerySlogan,
    "./islands/SubscribeResult.tsx": $SubscribeResult,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
#!/bin/bash
concurrently --kill-others --names "UI,AUTH,SIDEBAR,DASHBOARD,NOTES,PROFILE,HOST" --prefix name --prefix-colors "blue,magenta,green,yellow,cyan,red,whiteBright" \
"pnpm --prefix ui run start" \
"pnpm --prefix auth run start" \
"pnpm --prefix sidebar run start" \
"pnpm --prefix dashboard run start" \
"pnpm --prefix notes run start" \
"pnpm --prefix profile run start" \
"pnpm --prefix host run dev"
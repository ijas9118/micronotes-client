#!/bin/bash
concurrently --kill-others --names "UI,AUTH,HOST" --prefix name \
"pnpm --prefix ui run start" \
"pnpm --prefix host run dev"

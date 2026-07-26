#!/usr/bin/env bash
#
# Pre-commit checklist: update deps, lint/format, typecheck, and build.
#
# Usage:
#   bin/preflight.sh
#   npm run preflight
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT}"

step() {
    echo ""
    echo "==> $*"
}

step "npm update"
npm update

step "npm run lint"
npm run lint

step "npm run format"
npm run format

step "npm run typecheck"
npm run typecheck

step "npm run build"
npm run build

echo ""
echo "==> Preflight complete. Review the diff, then commit."

#!/usr/bin/env bash
#
# Build assets and package swissblue-fse as an installable WordPress theme ZIP.
# Run from anywhere: bin/build-zip.sh
#
set -euo pipefail

theme_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
theme_name="$( basename "$theme_dir" )"

cd "$theme_dir"
npm install
npm run build

cd ..
rm -f "${theme_name}.zip"
zip -r "${theme_name}.zip" "$theme_name" \
	-x "${theme_name}/node_modules/*" \
	-x "${theme_name}/.git/*" \
	-x "${theme_name}/bin/*"

echo "Created ${theme_name}.zip"

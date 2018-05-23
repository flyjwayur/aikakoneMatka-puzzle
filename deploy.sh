#!/bin/bash
set -e
boot build
cd target/public
git init
git add .
git commit -m "Deploy front-end to GitHub Pages"
git push --force "https://github.com/flyjwayur/aikakoneMatka-puzzle.git" master:gh-pages
rm -rf .git
#!/bin/bash

set -e

#
# BUILD
#
npm run build
if [ -d ../deploy-dist ]
then
  rm -rf ../deploy-dist
fi
mv dist ../deploy-dist
#
# GH-PAGES
#
git fetch -p
git checkout gh-pages
git pull
#
# CLEAN
#
rm -rf assets || true
rm -f index.html || true
rm -f *.js.map || true
rm -f *.js || true
rm -f *.css || true

#
# DEPLOY
#
mv ../deploy-dist/* .
git add . -A
git commit -m "deploy"
git push
#
# RESET AND CLEANUP
#
git checkout master
rm -rf ../deploy-dist/

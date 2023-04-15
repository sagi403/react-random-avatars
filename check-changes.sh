#!/bin/bash

set -e

FOLDER_TO_CHECK="src/insertYourAvatarHere"
BASE_BRANCH="master"

# Check if there are changes in the folder compared to the base branch
git fetch origin $BASE_BRANCH
CHANGES=$(git diff --quiet origin/$BASE_BRANCH HEAD -- $FOLDER_TO_CHECK; echo $?)

if [ $CHANGES -eq 1 ]; then
  echo "Changes detected in $FOLDER_TO_CHECK"
  exit 1
else
  echo "No changes detected in $FOLDER_TO_CHECK"
  exit 0
fi

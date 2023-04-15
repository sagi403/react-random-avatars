#!/bin/bash

set -e

FOLDER_TO_CHECK="src/insertYourAvatarHere"
BASE_BRANCH="master"

# Fetch and checkout the base branch
git fetch origin $BASE_BRANCH
git checkout origin/$BASE_BRANCH

# Create a temporary branch and switch to it
git checkout -b temp_branch

# Merge the changes from the HEAD branch
git merge --no-commit --no-ff HEAD

# Check if there are changes in the folder compared to the base branch
CHANGES=$(git diff --name-only -- $FOLDER_TO_CHECK)

echo "Changes:"
echo "$CHANGES"

if [ "$CHANGES" == 1 ]; then
  echo "Changes detected in $FOLDER_TO_CHECK"
  echo "UPDATED=true" >> $GITHUB_ENV
else
  echo "No changes detected in $FOLDER_TO_CHECK"
  echo "UPDATED=false" >> $GITHUB_ENV
fi

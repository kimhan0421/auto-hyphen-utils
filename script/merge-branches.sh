#!/bin/bash

read -p "Branch from (ex. develop): " from
read -p "Branch to (ex. main): " to

echo "----------------------------------------------"
echo "🚀 Start merging '$from' into '$to'..."
echo "----------------------------------------------"

echo "⚙️ [1/3] Checking working git tree"
if [[ $(git diff --stat) != "" ]]; then
  read -p "⚠️ You have uncommitted changes. Continue? (Y/n): " forceYn
  if [[ $forceYn != "Y" ]]; then
    echo "🚫 Aborted"
    exit 1
  fi
fi
echo "✅ Checked"

echo "⚙️ [2/3] Fetching and resetting branches"
git fetch origin
git checkout $from
git reset --hard origin/$from
git checkout $to
git reset --hard origin/$to

echo "⚙️ [3/3] Merging $from into $to"
if git merge --no-ff origin/$from -m "chore: merge $from into $to"; then
  echo "✅ Merge successful"
else
  echo "❌ Merge conflict! Please resolve manually."
  exit 1
fi

echo "⚙️ Pushing merged changes to '$to'"
git push origin $to

echo "✅ Merge completed! Now wait for the Changeset PR."

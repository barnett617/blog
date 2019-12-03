branch=master
git status
git add --all
git status
git commit -m $1
git pull origin $branch
git push origin $branch
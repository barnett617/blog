branch=master
cwd=.
git status
git add $cwd
git commit -m $1
git pull origin $branch
git push origin $branch
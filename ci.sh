# 使用： sh ci.sh 提交备注
branch=master
cwd=.
git status
git add $cwd
# 提交备注不能有空格，否则会被截断
str=$*
echo ${str}
git commit -m "${str}"
git pull origin $branch
git push origin $branch
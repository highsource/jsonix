call mvn versions:set -DnewVersion=%1
pause
call mvn versions:commit
pause
rem call mvn clean install -DperformRelease
pause
rem  -Psamples -Ptests -Pdist
git commit -a -m="Version %1"
pause
rem call mvn scm:tag -Dtag=%1
git tag -a %1 -m 'Version %1'
pause
cd compiler
call mvn -DperformRelease -Psonatype-oss-release clean deploy
cd ..
pause
cd full
call mvn -DperformRelease -Psonatype-oss-release clean deploy
cd ..
cd scripts
call mvn -DperformRelease -Psonatype-oss-release clean deploy
cd ..
pause
cd nodejs
cd scripts
call mnpm publish
pause
cd ..
cd ..
rem  -Psamples -Ptests -Pdist
call mvn versions:set -DnewVersion=%2
call mvn versions:commit
call mvn scm:commit -M="Version %2"
pause

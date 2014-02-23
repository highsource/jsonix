call mvn --batch-mode release:update-versions -DdevelopmentVersion=%1
call mvn clean install -DperformRelease
rem  -Psamples -Ptests -Pdist
call mvn scm:commit -M="Version %1"
call mvn scm:tag -Dtag=%1
call mvn -DperformRelease -Psonatype-oss-release clean deploy
rem  -Psamples -Ptests -Pdist
call mvn --batch-mode release:update-versions -DdevelopmentVersion=%2
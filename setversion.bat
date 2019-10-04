setlocal
echo Setting JAVA_HOME to %JAVA8_HOME%.
set JAVA_HOME=%JAVA8_HOME%

echo Setting new version to %1.
rem pause
call mvn versions:set -Pall,sonatype-oss-release -DnewVersion=%1
echo Version was set to %1.
rem pause
call mvn versions:commit -Pall
echo Version %1 committed.
rem pause
endlocal
setlocal
echo Setting JAVA_HOME to %JAVA6_HOME%.
set JAVA_HOME=%JAVA6_HOME%

echo Setting new version to %1.
rem pause
call mvn versions:set -Pall -DnewVersion=%1
echo Version was set to %1.
rem pause
call mvn versions:commit -Pall
echo Version %1 committed.
rem pause
endlocal
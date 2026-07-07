@echo off
setlocal
title SM preview 3125
cd /d "%~dp0"
set "SIBLING=%~dp0..\sumerian-merchant-site\node-portable\node-v24.18.0-win-x64"
where node >nul 2>nul || if exist "%SIBLING%\node.exe" set "PATH=%SIBLING%;%PATH%"
echo Derleniyor...
call npx astro build
echo Onizleme baslatiliyor: http://localhost:3125
start "SM-preview-browser" cmd /c "for /l %%i in (1,1,120) do (curl -s -o nul http://localhost:3125 && exit || timeout /t 2 >nul)"
call npx astro preview --port 3125
pause

@echo off
setlocal
title Sumerian Merchant (Astro) - local preview
cd /d "%~dp0"
set "PORTABLE=%~dp0node-portable\node-v24.18.0-win-x64"
set "SIBLING=%~dp0..\sumerian-merchant-site\node-portable\node-v24.18.0-win-x64"

echo ============================================
echo   SUMERIAN MERCHANT (Astro) - preview
echo ============================================

rem --- 1) Sistemde Node var mi? ---
where node >nul 2>nul && set "HAVE_NODE=1"

rem --- 2) Eski projedeki tasinabilir Node'u kullan (yeniden indirme yok) ---
if not defined HAVE_NODE if exist "%SIBLING%\node.exe" (set "PATH=%SIBLING%;%PATH%" & set "HAVE_NODE=1")

rem --- 3) Bu klasorde tasinabilir Node var mi? ---
if not defined HAVE_NODE if exist "%PORTABLE%\node.exe" (set "PATH=%PORTABLE%;%PATH%" & set "HAVE_NODE=1")

rem --- 4) Hicbiri yoksa resmi nodejs.org'dan indir (~30 MB) ---
if not defined HAVE_NODE (
  echo.
  echo Node.js bulunamadi. Resmi nodejs.org sitesinden tasinabilir Node
  echo indiriliyor - yaklasik 30 MB, yonetici izni gerekmez...
  mkdir node-portable 2>nul
  curl -L --retry 3 -o "node-portable\node.zip" https://nodejs.org/dist/v24.18.0/node-v24.18.0-win-x64.zip
  echo Arsiv aciliyor...
  tar -xf "node-portable\node.zip" -C node-portable
  del "node-portable\node.zip" 2>nul
  if exist "%PORTABLE%\node.exe" set "PATH=%PORTABLE%;%PATH%"
)

where node >nul 2>nul || (echo HATA: Node hazirlanamadi. Internet baglantisini kontrol edip tekrar dene. & pause & exit /b 1)
echo Node surumu:
node -v

rem --- 5) Site bagimliliklarini kur (sadece ilk calistirmada) ---
if not exist node_modules (
  echo.
  echo Ilk calistirma: site paketleri kuruluyor, birkac dakika surebilir...
  call npm install --no-audit --no-fund
)

rem --- 6) Siteyi baslat; sunucu cevap verince tarayiciyi otomatik ac ---
echo.
echo Site baslatiliyor: http://localhost:3124
echo Sunucu hazir olunca tarayici otomatik acilacak.
echo Bu pencereyi test ederken acik tut - kapatinca site durur.
echo.
start "SM-browser" cmd /c "for /l %%i in (1,1,300) do (curl -s -o nul http://localhost:3124 && start http://localhost:3124 && exit || timeout /t 2 >nul)"
call npm run dev
pause

@echo off
echo ========================================
echo Setting Git PATH
echo ========================================
echo.

if exist "C:\Program Files\Git\cmd\git.exe" (
    echo [OK] Git found at: C:\Program Files\Git\cmd
    echo.
    echo Adding Git to system PATH...
    setx PATH "%PATH%;C:\Program Files\Git\cmd" /M
    
    if %errorlevel%==0 (
        echo.
        echo ========================================
        echo SUCCESS! Git added to PATH
        echo ========================================
        echo.
        echo Please restart your command prompt to use 'git' command
        echo.
        echo Test: git --version
        echo.
    ) else (
        echo.
        echo ========================================
        echo FAILED! Cannot set PATH
        echo ========================================
        echo.
        echo Please set PATH manually:
        echo   1. Press Win+R, type: sysdm.cpl
        echo   2. Click Advanced -^> Environment Variables
        echo   3. Add to system PATH: C:\Program Files\Git\cmd
        echo.
    )
) else (
    echo ========================================
    echo Git not found at default location
    echo ========================================
)

pause
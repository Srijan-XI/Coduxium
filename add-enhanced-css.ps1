# PowerShell Script to Add linux-enhanced.css to All Linux Distro Pages
# This script adds the enhanced CSS link to all distro HTML files

$files = @(
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Alpine\Alpine.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Arch\BlackArch\blackarch.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Arch\Garuda\garuda.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Arch\RedArch\redarch.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Arch\SteamOS\SteamOS.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Kali\kali.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Mint\mint.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\MXLinux\MXLinux.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\ParrotSec\parrotsec.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\PopOS\PopOS.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Tails\Tails.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Ubuntu\ubuntu.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Zorin\Zorin.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Gentoo\gentoo.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Gentoo\ChromeOSFlex\ChromeOSFlex.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Qubes\Qubes.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\CentOS\centos.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\Fedora\fedora.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\Oracle\oracle.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\RHEL\rhel.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\RockyLinux\RockyLinux.html",
    "P:\CODE-SRI\Coduxium XI\pages\Linux\Slackware\slackware.html"
)

$enhancedCssLine = '    <link rel="stylesheet" href="../linux-enhanced.css">'
$counter = 0
$skipped = 0

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Check if already has linux-enhanced.css
        if ($content -match 'linux-enhanced\.css') {
            Write-Host "SKIPPED: $file (already has linux-enhanced.css)" -ForegroundColor Yellow
            $skipped++
            continue
        }
        
        # Add after distro.css line
        if ($content -match '(<link rel="stylesheet" href="\.\.(/\.\.)?/distro\.css">)') {
            $newContent = $content -replace '(<link rel="stylesheet" href="\.\.(/\.\.)?/distro\.css">)', "`$1`r`n$enhancedCssLine"
            Set-Content -Path $file -Value $newContent -NoNewline
            Write-Host "UPDATED: $file" -ForegroundColor Green
            $counter++
        } else {
            Write-Host "WARNING: Could not find distro.css in $file" -ForegroundColor Red
        }
    } else {
        Write-Host "ERROR: File not found - $file" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "SUMMARY:" -ForegroundColor Cyan
Write-Host "Updated: $counter files" -ForegroundColor Green
Write-Host "Skipped: $skipped files" -ForegroundColor Yellow
Write-Host "Total: $($files.Count) files" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

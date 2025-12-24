# PowerShell Script - Enhanced Version for Remaining Files
# Handles different CSS Path structures

$filesToUpdate = @(
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\PopOS\PopOS.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Zorin\Zorin.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\MXLinux\MXLinux.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Debian\Tails\Tails.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\RHEL\rhel.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\RedHat\RockyLinux\RockyLinux.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Gentoo\gentoo.html"; CssPath = "../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Gentoo\ChromeOSFlex\ChromeOSFlex.html"; CssPath = "../../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Qubes\Qubes.html"; CssPath = "../linux-enhanced.css" },
    @{Path = "P:\CODE-SRI\Coduxium XI\pages\Linux\Slackware\slackware.html"; CssPath = "../linux-enhanced.css" }
)

$updated = 0
$skipped = 0
$errors = 0

foreach ($fileInfo in $filesToUpdate) {
    $file = $fileInfo.Path
    $cssPath = $fileInfo.CssPath
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Check if already has linux-enhanced.css
        if ($content -match 'linux-enhanced\.css') {
            Write-Host "SKIPPED: $file (already has enhanced CSS)" -ForegroundColor Yellow
            $skipped++
            continue
        }
        
        # Find </head> tag and insert before it
        if ($content -match '</head>') {
            $enhancedCssLine = "    <link rel=`"stylesheet`" href=`"$cssPath`">`r`n"
            $newContent = $content -replace '(</head>)', "$enhancedCssLine`$1"
            Set-Content -Path $file -Value $newContent -NoNewline
            Write-Host "UPDATED: $file" -ForegroundColor Green
            $updated++
        }
        else {
            Write-Host "ERROR: Could not find </head> in $file" -ForegroundColor Red
            $errors++
        }
    }
    else {
        Write-Host "ERROR: File not found - $file" -ForegroundColor Red
        $errors++
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "BATCH UPDATE SUMMARY:" -ForegroundColor Cyan
Write-Host "Updated: $updated files" -ForegroundColor Green
Write-Host "Skipped: $skipped files" -ForegroundColor Yellow  
Write-Host "Errors: $errors files" -ForegroundColor Red
Write-Host "Total Processed: $($filesToUpdate.Count) files" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

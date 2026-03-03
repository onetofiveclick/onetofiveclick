$ErrorActionPreference = "Stop"
git add .
git commit -m "Codebase updates and revamp"

# Add remote if needed, then push
$remote = git remote get-url origin 2>$null
if ($remote -and $remote -ne "https://github.com/onetofiveclick/onetofiveclick-Revamp.git") {
    git remote set-url origin https://github.com/onetofiveclick/onetofiveclick-Revamp.git
} elseif (-not $remote) {
    git remote add origin https://github.com/onetofiveclick/onetofiveclick-Revamp.git
}

git branch -M main
git push -u origin main

Write-Host "Code successfully pushed to https://github.com/onetofiveclick/onetofiveclick-Revamp!"

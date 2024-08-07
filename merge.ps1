Set-Content "merged.css" ""

Get-ChildItem -Filter "section-*.css" | ForEach-Object {
    Get-Content $_.FullName | Add-Content "merged.css"
}
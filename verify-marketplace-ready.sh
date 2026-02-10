#!/bin/bash

# Marketplace Readiness Verification Script
# Run this before submitting to ensure everything is ready

echo "🔍 Verifying plugin is marketplace-ready..."
echo ""

ERRORS=0
WARNINGS=0

# Check plugin.json exists
if [ -f ".claude-plugin/plugin.json" ]; then
    echo "✅ plugin.json exists"
else
    echo "❌ plugin.json not found"
    ERRORS=$((ERRORS + 1))
fi

# Check README.md exists
if [ -f "README.md" ]; then
    echo "✅ README.md exists"
else
    echo "❌ README.md not found"
    ERRORS=$((ERRORS + 1))
fi

# Check git remote
if git remote -v | grep -q "github.com"; then
    echo "✅ GitHub remote configured"
    REPO_URL=$(git remote get-url origin)
    echo "   Repository: $REPO_URL"
else
    echo "⚠️  No GitHub remote found"
    WARNINGS=$((WARNINGS + 1))
fi

# Check if repo is clean
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Git working directory is clean"
else
    echo "⚠️  Uncommitted changes detected"
    echo "   Commit changes before creating a release"
    WARNINGS=$((WARNINGS + 1))
fi

# Check for required files
REQUIRED_DIRS=("commands" "agents" "skills")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/ directory exists"
    else
        echo "❌ $dir/ directory missing"
        ERRORS=$((ERRORS + 1))
    fi
done

# Check plugin.json has required fields
if command -v jq &> /dev/null; then
    echo ""
    echo "📋 Plugin Metadata:"
    jq -r '. | "   Name: \(.name)\n   Version: \(.version)\n   Author: \(.author)\n   Repository: \(.repository // "NOT SET")\n   License: \(.license // "NOT SET")"' .claude-plugin/plugin.json
else
    echo "⚠️  jq not installed (skipping JSON validation)"
    WARNINGS=$((WARNINGS + 1))
fi

# Check if there are any git tags
echo ""
if git tag -l | grep -q "v[0-9]"; then
    echo "✅ Version tags exist:"
    git tag -l | sed 's/^/   - /'
else
    echo "⚠️  No version tags found"
    echo "   Create a release tag with: git tag -a v1.0.0 -m 'Release v1.0.0'"
    WARNINGS=$((WARNINGS + 1))
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "✅ Plugin is marketplace-ready!"
    echo ""
    echo "Next steps:"
    echo "1. Create a GitHub release: git tag -a v1.0.0 -m 'Release v1.0.0' && git push origin v1.0.0"
    echo "2. Submit to community marketplace: https://claudecodecommands.directory/submit"
    echo "3. Consider submitting to official marketplace: https://github.com/anthropics/claude-plugins-official"
elif [ $ERRORS -eq 0 ]; then
    echo "⚠️  Plugin has $WARNINGS warnings"
    echo "   Review warnings above before submitting"
else
    echo "❌ Plugin has $ERRORS errors and $WARNINGS warnings"
    echo "   Fix errors before submitting to marketplace"
    exit 1
fi

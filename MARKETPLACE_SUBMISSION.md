# Marketplace Submission Guide

This guide will help you submit the claude-debug-mode plugin to Claude Code marketplaces.

## Pre-Submission Checklist

- [x] Plugin.json contains all required metadata
- [x] README.md is comprehensive and clear
- [x] All commands, agents, and skills are documented
- [x] Git repository is clean and pushed to GitHub
- [ ] Create a GitHub release with version tag
- [ ] Test plugin installation from GitHub

## Submission Options

### Option 1: Official Anthropic Marketplace

The official marketplace is curated by Anthropic for high-quality plugins.

**Repository:** https://github.com/anthropics/claude-plugins-official

**Steps:**
1. Fork the repository
2. Add your plugin to the appropriate category directory
3. Create a pull request with:
   - Plugin metadata
   - Link to your GitHub repository
   - Description of functionality
   - Test instructions

**Requirements:**
- High code quality standards
- Comprehensive documentation
- Security review passing
- Maintained and actively supported

### Option 2: Community Marketplaces

Community marketplaces offer faster submission with less strict requirements.

#### Claude Code Commands Directory

**Website:** https://claudecodecommands.directory

**Submission Forms:**
- Commands: https://claudecodecommands.directory/submit
- Agents: https://claudecodecommands.directory/submit-agent

**Steps:**
1. Visit the submission form
2. Fill out the form with:
   - Plugin name: `claude-debug-mode`
   - Repository URL: `https://github.com/Cenadros/claude-debug-plugin`
   - Description: Your plugin description from plugin.json
   - Category: Development Tools / Debugging
   - Keywords: debugging, development, logging, bug-fixing
3. Submit for review

## Creating a GitHub Release

Before submitting, create a release on GitHub:

```bash
# Tag the release
git tag -a v1.0.0 -m "Release v1.0.0 - Initial marketplace submission"

# Push the tag
git push origin v1.0.0
```

Then on GitHub:
1. Go to your repository
2. Click "Releases" → "Create a new release"
3. Select tag `v1.0.0`
4. Title: "v1.0.0 - Initial Release"
5. Description: Copy from README.md features section
6. Publish release

## Testing Installation

Test that users can install your plugin:

```bash
# Test GitHub installation
claude plugin add github:Cenadros/claude-debug-plugin

# Verify it loads
claude plugins list

# Test the command
claude /debug "test bug"
```

## Marketplace Categories

Your plugin fits these categories:
- **Development Tools** - Primary category
- **Debugging Tools** - Specific subcategory
- **Code Analysis** - Secondary category

## Support & Maintenance

After marketplace listing:
- Monitor GitHub issues for user feedback
- Keep documentation up to date
- Release bug fixes promptly
- Respond to community questions

## Promotional Tips

To increase plugin visibility:
- Share on X/Twitter with #ClaudeCode hashtag
- Post in Claude Code Discord/Slack communities
- Write a blog post about the debugging workflow
- Create demo videos showing the plugin in action

## Additional Resources

- [Claude Code Plugin Marketplace](https://claudemarketplaces.com/)
- [Official Plugins Repository](https://github.com/anthropics/claude-plugins-official)
- [Plugin Development Docs](https://code.claude.com/docs/en/discover-plugins)
- [Community Marketplace](https://claudecodecommands.directory/)

---

**Ready to Submit?**

1. Create GitHub release (see above)
2. Test installation works
3. Submit to community marketplace first (faster approval)
4. Consider official marketplace submission later

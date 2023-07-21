# README

This extension allows you to set window zoom level to any value you want and adds a command `Reset Window Zoom Level` which you can assign a shortcut to. It is most useful when you want your window to be scaled by default to a value between 0 and 1 and have a hotkey to do that quickly after zooming in for, say, presentation purposes. Currently VS Code allows to set `window.zoomLevel` to any value in the settings, however, there is no way to make `cmd+0` hotkey set the level to the one you've specified as a default zoom level - it always sets it to 0.

## Extension Settings

set `window-zoom-to-specific-value.zoomLevel` to specific value you want to use when resetting window zoom level

## How to install
- `npm install -g @vscode/vsce`
- `vsce package`
- from extensions tab click on 3dots and 'install from VSIX' and choose the generated `window-zoom-to-specific-value-1.0.0.vsix` file

## Release Notes
### 1.0.0

Initial release 

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

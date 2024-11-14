# Window Zoom Level Controller

This VS Code extension allows you to customize your window zoom level and provides a `Reset Window Zoom Level` command with configurable shortcuts. It solves the limitation where standard `View: Reset Zoom` always resets to `0` regardless of your preferred zoom level.

## Features

- Set custom default zoom level
- Reset to your preferred zoom level with a customizable shortcut
- Perfect for presentations where you might need to zoom in and then reset it to your preferred level

## Installation

1. Install vsce: `npm install -g @vscode/vsce`
2. Clone and package: `vsce package`
3. In VS Code, open Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
4. Select "Install from VSIX" and choose `window-zoom-to-specific-value-X.X.X.vsix`

## Configuration

In VS Code settings:

- Set `window-zoom-to-specific-value.zoomLevel` to your preferred zoom level in the `settings.json` file
- Optionally - assign a new keyboard shortcut to the `Reset Window Zoom Level` command instead of the default `Cmd+9` / `Ctrl+9`

## Release Notes

### 1.0.0

- Initial release
- Custom zoom level support
- Reset command implementation

### 1.0.1

- Added keyboard shortcut configuration and updated README with installation instructions

## Contributing

Issues and pull requests are welcome on [GitHub]

## License

[Add your license here]

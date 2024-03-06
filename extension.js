// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('window-zoom-to-specific-value is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const zoom = vscode.commands.registerCommand('window-zoom-to-specific-value.resetZoomLevel', () => {
		const zoomLevel = vscode.workspace.getConfiguration('').get('window-zoom-to-specific-value.zoomLevel');
		vscode.workspace.getConfiguration('').update('window.zoomLevel', parseFloat(zoomLevel.toFixed(2)), true)
	});

	context.subscriptions.push(zoom);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}

'use strict';

import * as vscode from 'vscode';

import { H5V2Explorer } from './h5Explorer';
import { WeappExplorer } from './weappExplorer';

export function activate(context: vscode.ExtensionContext) {

	// Samples of `window.registerTreeDataProvider`
	vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));

	new H5V2Explorer(context);

	// Test View
	new WeappExplorer(context);
}

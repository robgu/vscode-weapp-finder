import vscode from 'vscode';
import H5V2Explorer from './H5Explorer';
import WeappExplorer from './WeappExplorer';

export const activate = (context) => {
  // Samples of `window.registerTreeDataProvider`
  vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
  new H5V2Explorer(context);
  // Test View
  new WeappExplorer(context);
};

export const deactivate = () => { };

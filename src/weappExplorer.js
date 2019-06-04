import vscode from 'vscode';
import _ from 'lodash';

const tree = {
  a: {
    aa: {
      aaa: {
        aaaa: {
          aaaaa: {
            aaaaaa: {

            },
          },
        },
      },
    },
    ab: {},
  },
  b: {
    ba: {},
    bb: {},
  },
};

export default class WeappExplorer {
  constructor() {
    const output = vscode.window.createOutputChannel('test');
    vscode.window.createTreeView('weappExplorer', {
      treeDataProvider: {
        getParent: (e) => {
          output.appendLine(`111111111${JSON.stringify(e)}`);
          const key = e.key.substring(0, e.key.length - 1);
          return key && { key };
        },
        getChildren: (e) => {
          output.appendLine(`222222222${JSON.stringify(e)}`);
          if (!e) {
            return _.keys(tree).map(key => ({ key }));
          }

          const obj = _.get(tree, e.key);
          return _.keys(obj).map(key => ({ key }));
        },
        getTreeItem: (e) => {
          output.appendLine(`3333333${JSON.stringify(e)}`);
          const { key } = e;
          return {
            id: key,
            tooltip: 'tooltip',
            collapsibleState: vscode.TreeItemCollapsibleState.None,
            label: {
              label: key,
              highlights: [],
            },
          };
        },
      },
    });
  }
}

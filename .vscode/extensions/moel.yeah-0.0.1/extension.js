

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var myPythonScriptPath = 'main.py';

const {PythonShell} =require('python-shell');

var { exec } = require('child_process'); // native in nodeJs

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Test2!');
    const options = [
		{
			label: 'new django',
			command: 'ext.newDjango'
		},
		{
			label: 'new app',
			command: 'ext.newApp'
		},
		{
			label: 'makemigrations',
			command: 'ext.makemigrations'
		},
		{
			label: 'migrate',
			command: 'ext.migrate',
		},
		{
			label: 'run',
			command: 'ext.run',
		}
	];

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('yeah.helloWorld', async function () {



        let findprojectfolderPath = vscode.workspace.workspaceFolders.map(folder => folder.uri.path)

        console.log(findprojectfolderPath);


        vscode.window.showQuickPick(options).then( async function(option) {
            if(option.label=='run'){
                var wf = vscode.workspace.workspaceFolders[0].uri.path;
                let options = {
                    mode: 'text',
                    pythonOptions: ['-u'], // get print results in real-time
                      scriptPath: 'C:/Users/foadm/OneDrive/Dokumenter/projects/extensions/yeah/', //If you are having python_test.py script in same folder, then it's optional.

                    args: [wf,'run'] //An argument which can be accessed in the script using sys.argv[1]
                };
                 
             
                PythonShell.run('main.py', options, function (err, result){
                      if (err){
                        vscode.window.showInformationMessage(err);

                        throw err
                        
                      }
                      // result is an array consisting of messages collected
                      //during execution of script.
                    //   console.log('result:',result.toString());
                      
                });
                
                
            }
            if(option.label=='makemigrations'){
                var wf = vscode.workspace.workspaceFolders[0].uri.path;
                let options = {
                    mode: 'text',
                    pythonOptions: ['-u'], // get print results in real-time
                      scriptPath: 'C:/Users/foadm/OneDrive/Dokumenter/projects/extensions/yeah/', //If you are having python_test.py script in same folder, then it's optional.

                    args: [wf,'makemigrations'] //An argument which can be accessed in the script using sys.argv[1]
                };
                 
             
                PythonShell.run('main.py', options, function (err, result){
                      if (err){
                        vscode.window.showInformationMessage(err);

                        throw err
                        
                      }
                      // result is an array consisting of messages collected
                      //during execution of script.
                      vscode.window.showErrorMessage(result.toString());

                      
                });
                
                
            }
            if(option.label=='migrate'){
                var wf = vscode.workspace.workspaceFolders[0].uri.path;
                let options = {
                    mode: 'text',
                    pythonOptions: ['-u'], // get print results in real-time
                      scriptPath: 'C:/Users/foadm/OneDrive/Dokumenter/projects/extensions/yeah/', //If you are having python_test.py script in same folder, then it's optional.

                    args: [wf,'migrate'] //An argument which can be accessed in the script using sys.argv[1]
                };
                 
             
                PythonShell.run('main.py', options, function (err, result){
                      if (err){
                        vscode.window.showInformationMessage(err);

                        throw err
                        
                      }
                      // result is an array consisting of messages collected
                      //during execution of script.
                    //   console.log('result:',result.toString());
                      vscode.window.showErrorMessage(result.toString());

                      
                });
                
                
            }
            if(option.label=='new app'){
                const searchQuery = await vscode.window.showInputBox({
                    placeHolder: "Project Name",
                    prompt: "Name For Project",
                    value:"",
                });
                if(searchQuery === ''){
                    vscode.window.showErrorMessage('App Needs Name');
                }
                
                if(searchQuery !== undefined){
                    var wf = vscode.workspace.workspaceFolders[0].uri.path;
                    let options = {
                        mode: 'text',
                        pythonOptions: ['-u'], // get print results in real-time
                          scriptPath: 'C:/Users/foadm/OneDrive/Dokumenter/projects/extensions/yeah/', //If you are having python_test.py script in same folder, then it's optional.
    
                        args: [wf,'new app',searchQuery] //An argument which can be accessed in the script using sys.argv[1]
                    };
                     
                 
                    PythonShell.run('main.py', options, function (err, result){
                          if (err){
                            vscode.window.showInformationMessage(err);
    
                            throw err
                            
                          }
                          // result is an array consisting of messages collected
                          //during execution of script.
                        //   console.log('result:',result.toString());
                          
                    });
                }
                
                
            }
            if(option.label=='new django'){
                const searchQuery = await vscode.window.showInputBox({
                    placeHolder: "Project Name",
                    prompt: "Name For Project",
                    value:"",
                });
                if(searchQuery === ''){
                    vscode.window.showErrorMessage('Project Needs Name');
                }
                
                if(searchQuery !== undefined){
                    var wf = vscode.workspace.workspaceFolders[0].uri.path;
                    let options = {
                        mode: 'text',
                        pythonOptions: ['-u'], // get print results in real-time
                          scriptPath: 'C:/Users/foadm/OneDrive/Dokumenter/projects/extensions/yeah/', //If you are having python_test.py script in same folder, then it's optional.
    
                        args: [wf,'new django',searchQuery] //An argument which can be accessed in the script using sys.argv[1]
                    };
                     
                 
                    PythonShell.run('main.py', options, function (err, result){
                          if (err){
                            vscode.window.showInformationMessage(err);
    
                            throw err
                            
                          }
                          // result is an array consisting of messages collected
                          //during execution of script.
                        //   console.log('result:',result.toString());
                          
                    });
                }
                
                
            }
           

        });
        if(vscode.workspace.workspaceFolders !== undefined) {
            let wf = vscode.workspace.workspaceFolders[0].uri.path ;
            let f = vscode.workspace.workspaceFolders[0].uri.fsPath ; 
        
            var message = `YOUR-EXTENSION: folder: ${wf} - ${f}` ;
        
            vscode.window.showInformationMessage(message);
        } 
        else {
            message = "YOUR-EXTENSION: Working folder not found, open a folder an try again" ;
        
            vscode.window.showErrorMessage(message);
        }



    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
}

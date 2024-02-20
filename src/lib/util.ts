import { spawn } from 'child_process';

// Run a Python script and return output
export function runPythonScript(scriptPath: string, args:any) {

  // Use child_process.spawn method from 
  // child_process module and assign it to variable
  const pyProg = spawn('python', [scriptPath].concat(args));

  // Collect data from script and print to console
  let data = '';
  pyProg.stdout.on('data', (stdout:any) => {
    data += stdout.toString();
  });

  // Print errors to console, if any
  pyProg.stderr.on('data', (stderr:any) => {
    console.log(`stderr: ${stderr}`);
  });

  // When script is finished, print collected data
  pyProg.on('close', (code:string) => {
    console.log(`child process exited with code ${code}`);
    console.log(data);
  });
}

// Run the Python file
// runPythonScript('/path/to/python_file.py', [arg1, arg2]);
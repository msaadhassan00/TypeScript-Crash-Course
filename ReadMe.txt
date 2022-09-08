npm i -g typescript

if not working try this
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

create src folder and move index.tsc file init

in tsconfig.js:
go to moudels and change "rootDir":"./" to rootDir: "./src"

go to emit:
uncomment "outDir":"./" and change to "./dist"
go to removeComments and remove comments
go to noEmitOnError:"true" and remove comments
go to sourceMap:"true" and remove comments
go to strict:
	 "noUnusedParameters": true, "noImplicitReturns": true,"noUnusedLocals": true,  remove comments 


tsc --init

tsc

go to run and debug on left panel and click on "create a launch.json file" then select node
and in launch.json file add this line [ "preLaunchTask": "tsc: build - tsconfig.json", ] after program line



To run index.js file code // node dist/index.js


# eMDs

This project was generated created using version 14 and .NET 6; the templated was provided by Visual Studio. 
1. To start, just open the solution in Visual Studio and once the app has fully loaded, just press the Run button. Note: the app will automatically install node_modules; however, I've seen the past that sometimes you may have to install node_modules in the ClientApp manually. I'm 100% certian it will install them, but I wanted to provide a solution just in case.

2. The app will start a Node instance to compile the Angular code. 

3. Once it's complete, the Register App will load and you will see the Register form.

4. Every field has validators on it to include: patterns, max length, password matching, restritions, etc.. If you try to submit the form without filling out the form, it will display errors. Furthermore, the same will happen if you fail to properly input the required values for any field.

5. I thouroughly enjoyed creating this app, and I hope everyone who tries it out enjoys playing around with it. I will probably have a 2.0 version by the time we interview because I'm always looking for ways to improve things, and I look forward to meeting you soon.  


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) (Only the Registration-Form component has a Unit test).


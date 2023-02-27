**Quadratic equation solver**
=============================

**Short description**

This program is created by Nikita Sutulov, IM-12 group, FICE, KPI, to solve quadratic equations:

$ax^2+bx+c=0$, where $a \neq 0$.

**How to use**

Quadratic equation solver is made with **node.js**, so you'll need it to run the program.

Quadratic equation solver has two modes: interactive mode and file mode. 

<u>Interactive mode</u>

To run the program in the interactive mode, just type this command in your terminal in the project folder:

`node main.js`

Then there will be some dialogues for you to enter the coefficients for the equation. The equation itself will be displayed, and so will its solution.

<u>File mode</u>

To run the program in the file mode, you need to pass the file path into the arguments of the previous command:

`node main.js <your/file/path>`

*IMPORTANT!*

The file must be of a certain format for the program to successfully run it. For example:

`1 2 1\n`

where \n is a newline symbol.

If you are using an OS of Windows family, the default newline symbol is CRLF (\r\n). I took it into account and fixed this problem, so the program supports both LF (\n) and CRLF (\r\n) newline symbols.

There are five example files for you to comfortably test the file mode in the examples folder.

**Revert-commit link:**

https://github.com/NikitaSutulov/Methodologies-lab1/commit/faa4027c95224e1acbf5875fa9e3db6263fdc9a1
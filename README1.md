#### 1) What is the difference between var, let, and const?

1. var

Scope: Function-scoped (available inside the function where it is declared, or globally if outside any function).

Hoisting: Gets hoisted (moved to the top of scope) and initialized with undefined.

Re-declaration: Can be re-declared and updated in the same scope.

Problem: Can cause bugs because it ignores block scope.


2. let

Scope: Block-scoped (only available inside the nearest { } block).

Hoisting: Hoisted but not initialized (in Temporal Dead Zone until declared).

Re-declaration: Cannot be re-declared in the same scope, but can be updated.

Better than var for safer, predictable code.


3. const

Scope: Block-scoped (like let).

Hoisting: Same behavior as let (hoisted but not initialized).

Re-declaration: Cannot be re-declared or updated.

Must be initialized at the time of declaration.

For objects/arrays: The reference can’t change, but properties/elements inside can change.


#### 2) What is the difference between map(), forEach(), and filter()? 

1. map()

Purpose: Creates a new array by transforming each element.

Return Value: A new array with the same length.

Use case: When you want to transform data.


2. forEach()

Purpose: Runs a function for each element, but does not return a new array.

Return Value: undefined.

Use case: When you just want to perform side effects (like printing, updating external data, pushing to another array).


3. filter()

Purpose: Creates a new array containing only elements that pass a condition.

Return Value: A new array (may be smaller than original).

Use case: When you want to pick specific elements.


#### 3) What are arrow functions in ES6?

An arrow function is a shorter way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015).

#### 4) How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a syntax that lets you unpack values from arrays or properties from objects into distinct variables. It makes code cleaner and avoids repetitive access.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals are strings enclosed by backticks (`) instead of quotes (' or ").

Template Literals (ES6)

Use backticks (`) instead of quotes.

Use ${ } for inserting variables/expressions → no need for +.

Directly supports multi-line strings.

More readable and clean.
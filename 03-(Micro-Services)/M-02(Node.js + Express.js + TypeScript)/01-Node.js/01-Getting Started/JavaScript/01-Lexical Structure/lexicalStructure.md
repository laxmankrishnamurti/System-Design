# Lexical Grammar

In order to understand the _lexical grammer of javascript_ we should treat the srouce code like a _sequence of characters rather than a logic._ Now, we are ready to go.....

**1. As we have disscussed that first of all we should treat the source code as a _character_**

**2. JavaScript dosen't compile but it is interpreted by _JavaScript engine like V8, Siper-Monkey_. This step is crutial in order to understand how code either interpreted or compiled. Because, as we think that when we hit the compile button or run the program it will automatically generated. No, there has some sort of steps in order to compile or interpret any programming language.**

**3. Remember, JavaScript source code/text is just a sequence of characters. In order for the interpreter to understand it, the string has to be parsed to a more structural representation.**

**4. Initial step of parsing which we call _lexical analysis._**

**5. The test gets scanned from left to right**

**6. Converted into sequence of indivisuals.**

**7. Insignificant elements will be stripped after this step they include -> white space and comments**

**8. Identifiers, keywords, literals, and operators, will be used for further syntax analysis.**

**9. Although, _Line terminator_ and _multiline comments_ are also syntactically insignificant, but they guide the process of _automatic semocolon insertion_ to make certain invalid token sequences become valid.**

## Format-control characters

Format-control characters have no visual representaion but are used to control the interpretation of the text.

## White space

White space characters are used to improve the readability of the souce text. These characters are usually unnecessary for the functionality of the code.

To remove such kind of characters for reducing the amount of data that need to be transferred we use _minification tools_. This process is also called _minification programmming_.

```bash
# Horizontal tabulation
$ "\t"

# Vertical tabulation
$ "\v"

# Page breaking control character
$ "\f"
```

## Line terminators

- In addition to white-space characters, line terminator characters are used to improve the readability of the source text.

- It can influence the execution of JavaScript code
- Line terminators also affect the process of _automatic semicolon insertion._

```bash
# New line characters
$ "\n"
```

## Comments

- As we know comments are used to add hints, notes, description, or warning to JavaScript code.
- Enhance readability of the code
- Can be used to disable code to prevent it from being executed.
- Can be a valuable debugging tool.

```bash
# Line comments
// This is an example of line comment

# Block comment
/*This is an example of block comment*/

# Multi-line comment

/*
* This is
* an example
* of multiline
* comments
*/

# Hashbang comment

#!/usr/bin/env node
```

**\_Block comment that contain at least one line terminator behave like line-terminator in automatic semicolon insertion.\_\_**

## Identifiers

- An **_identifier_** is used to link a value with a name, this is what we called _variable_ in general purpose programming language.

- All variable rules are applied to identifiers.

```js
let name = "laxman krishnamurti"

Here, name is an identifier

function sayHello(){
    window.alert("Hi there")
}

Here, sayHello is an identifier

const user = {
    name: "laxman krishnamurti",
    age: 22
}

Here, user is an identifier

class User {
    name = "laxman krishnamurti"
}

Here, User is an identifier
```

## Keywords

In every programming language there are words which is reserved and we cannot use it in order to identify something. These are like tokens which is pre-built in almost every single programming language. They have special kind of meaning and have different use-cases.

For example the keyword _async_, this is used before a function declaration to make a function _asynchronous_

Identifiers are always compared by string value, so escape sequences are interpreted. For example, this is still a syntax error:

```js
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

In simple terms, this means that JavaScript interprets escape sequences in identifiers as actual characters. So, if you try to use `\u{65}` in `els\u{65}`, JavaScript reads it as `else` (because `\u{65}` is the Unicode for "e").

Since `else` is a reserved keyword in JavaScript, using it like this causes a syntax error. Escape sequences like `\u{65}` are interpreted as part of the identifier's name, not as separate symbols or characters.

### **It means ASCII table and Unicode are two different things? **

Yes, Unicode and ASCII are related but different systems for encoding characters.

1. **ASCII (American Standard Code for Information Interchange)**:

   - ASCII is an older, simpler character encoding that maps characters to numbers, using only 7 bits per character. It defines 128 characters (from 0 to 127), covering English letters (A-Z, a-z), digits (0-9), and some basic symbols (like punctuation and control characters).
   - ASCII works well for English, but it doesn’t support many characters from other languages.

2. **Unicode**:
   - Unicode was developed to cover a much broader range of characters, symbols, and scripts from languages around the world, making it more comprehensive than ASCII.
   - It uses up to 32 bits, supporting over a million characters. Unicode includes the entire ASCII set for backward compatibility but goes far beyond it, adding characters for various scripts (like Chinese, Arabic, Cyrillic) and symbols (like emojis and mathematical notations).

In short:

- ASCII is limited and mainly for English.
- Unicode is broader and includes all ASCII characters plus many more for global use.

Unicode ensures that software can display a wide range of symbols and languages consistently across systems.

### **_Reserved words_**

These reserved words cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.

- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- false
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- null
- return
- super
- switch
- this
- throw
- true
- try
- typeof
- var
- void
- while
- with

### **_The following are reserved when they are found in strict mode case_**

- let (also reserved in _const_, _let_, and class declarations)
- static
- yield (also reserved in generated function body)

### _The following are reserved when they are found in module code or async function bodies_

- await

### **_Future reserved words_**

The following are reserved as future keyword by the ECMAScript specification. They have no special functionality at present, but they might be at some future time, so they cannot be used as identifiers.

- enum

**_The following are reserved when they are found in strict mode code_**

- implements
- interface
- package
- private
- protected
- public

## Literals

A literal in programming represents a fixed value directly in the code, which means it's not computed or driven from other values.

For example number(22), string("laxman"), boolean(true), and more complex structures like objects({}) and arrays([]) are all literals because they represent fixed, specific values.

**_MDN FORMAL DEFINITION :: Literals that are atomic tokens._**

What does this mean? Let's understand......

The MDN line clearifies that literals can consist of multiple _atomic tokens._ An _Atomic token_ is the smallest unit of code that can't broken down further—for instance, numbers, strings, and variable names. Object literals ({ key: value }) and array literals ([value1, value2]) are slightly more complex literals. They’re expressions built from multiple atomic tokens (such as **key**, **:**, **value**, and { } for objects) but still represent a single value as a whole.

```js
// literal examples

//null
null

//string
"laxman krishnamurti"

//boolean
true
false

//numeric (decimal)
22
9034

// numeric (Exponential)
4e10 (4 res to the power 10 to the base of 10)

// numeric (Binary)

0b10 // 2
0b11 // 3
0b111 // 7

//Regular Expressions
/\d/g
/[a-zA-Z0-9]/g
```

```bash
# Escape Sequence

\0  ===> null character (U + 0000)
\'  ===> Single quote (U + 0027)
\"  ===> Double quote   (U + 0022)
\\  ===> backslash  (U + 005C)
\n  ===> newline    (U + 000A)
\r  ===> carriage return    (U + 00D)
\v  ===> vertical tab   (U + 000B)
\t  ===> tab    (U + 0009)
\b  ===> backspace  (U + 0008)
\f  ===> form feed  (U + 000C)
```

## Automatic semicolon insertion

Some JavaScript statements' syntax definitions require semicolon (;) at the end. They include:-

- **var, let, const**

  ```js
  var name = "laxman krishnamurti";
  let email = "laxmankrishnamurti@gmail.com";
  const age = 22;
  ```

- **Expression statement**

  - Expression ===> It can be anything that produce a value.

    - Ex :- 5 + 3; 2 \* 2; "Laxman Krishnamurti"

  - Statement ===> A statement is a complete line of code that performs some action.

    - Ex :- let name = "laxman krishnamurti"

  - It means an _expression statement_ is simply a statement in code that evaluate an expression, and it's written in a way that cause the expression to have some effects or produce some results.

  ```js
  // This is an expression statement because it perform an action.
  console.log("Hello world!");
  ```

- **do.....while**

  ```js
  let i = 0;
  do {
    i = i + 1;
    result = result + i;
  }
  ```

- **continue, break, return, throw**

  ```js
  if(i === 5){
      continue;
  }else if (i === 8){
      break;
  }else if (i === -1){
      throw Error("Invalid input");
  }else {
      return i;
  }
  ```

- **debugger**

  ```js
  function findPotentialBugs() {
    debugger;
  }
  ```

- **Class field declarations (public or private)**

  ```js
  class Customer {
    customerName;
    static accountNumber;
  }
  ```

- **import, export**

  ```js
  import express from "express";
  export default generateTokens;
  ```

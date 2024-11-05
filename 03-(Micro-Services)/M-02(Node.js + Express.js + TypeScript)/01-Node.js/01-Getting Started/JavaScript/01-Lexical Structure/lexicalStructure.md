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

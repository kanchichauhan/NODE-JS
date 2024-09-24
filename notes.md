# How come the variables and functions is private in different modules
- IIFE and require statement (wrapping our code in IIFE)

# How do you get access to module.export
- (function (module, require) {
    when our code is wrapped inside a function the module is passed as a parameter to an IIFE
  })();

# require function
1. resolving the module - validating the path
2. loading the module - file content is loaded
3. wraps inside IIFE - compile
4. Evaluation
5. Caching


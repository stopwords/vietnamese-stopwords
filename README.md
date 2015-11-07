# vietnamese-stopwords

Vietnamese stopwords dict, get here https://github.com/duyetdev/vietnamese-stopwords/blob/master/vietname-stopwords.txt

For PredictionIO EventServer, please using this tools [scala-parallel-textclassification/tools/create-stop-words](https://github.com/duyetdev/scala-parallel-textclassification/blob/master/tools/create-stop-words.js) to generate stopwords-import-file.

# Using 

### Method 1: Copy `vietname-stopwords.txt` data file to your project.
### Method 2: Using in Nodejs project

1. Install by `npm`
```sh
npm install vietnamese-stopwords
```

2. Require in Nodejs code
```js
var stopwords = require('vietnamese-stopwords');

console.log(stopwords);
// [ 'bị', 'bởi', 'cả', 'các', 'cái', ...]
```

# How to contribute
1. Fork the project on Github
2. Create a topic branch for your changes
3. Ensure that you provide documentation and test coverage for your changes (patches won’t be accepted without)
4. Create a pull request on Github (these are also a great place to start a conversation around a patch as early as possible)

# License
MIT License

Copyright (c) 2015 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

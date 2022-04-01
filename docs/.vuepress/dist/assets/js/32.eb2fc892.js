(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{436:function(t,s,a){"use strict";a.r(s);var r=a(34),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"typescript环境搭建与编译执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript环境搭建与编译执行"}},[t._v("#")]),t._v(" TypeScript环境搭建与编译执行")]),t._v(" "),a("h5",{attrs:{id:"typescript-编写的程序并不能直接通过浏览器运行-需要先通过-typescript-编译器把代码编译成-javascript-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-编写的程序并不能直接通过浏览器运行-需要先通过-typescript-编译器把代码编译成-javascript-代码"}},[t._v("#")]),t._v(" TypeScript 编写的程序并不能直接通过浏览器运行，需要先通过 TypeScript 编译器把代码编译成 JavaScript 代码")]),t._v(" "),a("h5",{attrs:{id:"typescript-的编译器是基于-node-js-的-需要先安装-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-的编译器是基于-node-js-的-需要先安装-node-js"}},[t._v("#")]),t._v(" TypeScript 的编译器是基于 Node.js 的，需要先安装 Node.js")]),t._v(" "),a("p",[t._v("1.安装Node.js")]),t._v(" "),a("p",[t._v("2.安装 TypeScript编译器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g typescript \n//查看当前 tsc 编译器版本 \ntsc -v\n")])])]),a("p",[t._v("3.编写代码")]),t._v(" "),a("p",[t._v("TypeScript 的文件的后缀为 .ts")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TypeScript'")]),t._v("\n")])])]),a("p",[t._v("4.编译")]),t._v(" "),a("p",[t._v("当前目录下执行指令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tsc ./index.ts\n")])])]),a("p",[t._v("默认情况下会在当前文件所在目录下生成同名的 js 文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TypeScript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"编译指令选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译指令选项"}},[t._v("#")]),t._v(" 编译指令选项")]),t._v(" "),a("p",[a("strong",[t._v("--outDir")])]),t._v(" "),a("p",[t._v("指定编译文件输出目录")]),t._v(" "),a("p",[a("strong",[t._v("--target")])]),t._v(" "),a("p",[t._v("指定编译的代码版本目标，默认为 ES3")]),t._v(" "),a("p",[a("strong",[t._v("--watch")])]),t._v(" "),a("p",[t._v("在监听模式下运行，当文件发生改变的时候自动编译")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("//编译当前路径文件\ntsc ./src/helloKaiKeBa.ts \n//编译当前路径文件输出到dist目录\ntsc --outDir ./dist ./src/helloKaiKeBa.ts \n//编译当前路径文件输出到dist目录，js代码版本为ES6\ntsc --outDir ./dist --target ES6 ./src/helloKaiKeBa.ts \n//编译当前路径文件输出到dist目录，js代码版本为ES6，并开启监听模式，后续在ts文件写代码会自动编译。\ntsc --outDir ./dist --target ES6 --watch ./src/helloKaiKeBa.ts\n")])])]),a("h2",{attrs:{id:"编译配置文件tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译配置文件tsconfig-json"}},[t._v("#")]),t._v(" 编译配置文件tsconfig.json")]),t._v(" "),a("p",[t._v("把编译的一些选项保存在一个指定的 json 文件中，")]),t._v(" "),a("p",[t._v("默认情况下 tsc 命令运行的时候会自动去加载运行命令所在的目录下的 tsconfig.json 文件")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//tsconfig.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../src/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//命令行指令")]),t._v("\ntsc \n")])])]),a("p",[t._v("也可以使用 --project 或 -p 指定配置文件目录或某个具体的配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tsc -p ./configs \ntsc -p ./configs/ts.json\n")])])]),a("h2",{attrs:{id:"语法转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法转换"}},[t._v("#")]),t._v(" 语法转换")]),t._v(" "),a("p",[t._v("TypeScript 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，对于API 是不会进行转换的（如promise），而是引入一些扩展库进行处理的。")]),t._v(" "),a("p",[t._v("如果我们的代码中使用了 target 中没有的 API ，则需要手动进行引入，默认情况下 TypeScript 会根据target 载入核心的类型库")]),t._v(" "),a("p",[t._v('target 为 es5 时: ["dom", "es5", "scripthost"]')]),t._v(" "),a("p",[t._v('target 为 es6 时: ["dom", "es6", "dom.iterable", "scripthost"]')]),t._v(" "),a("p",[t._v("如果代码中使用了这些默认载入库以外的代码，则可以通过 lib 选项来进行设置")]),t._v(" "),a("p",[t._v("https://www.typescriptlang.org/tsconfig/#lib")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zmouse'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("z")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//属性“assign”在类型“ObjectConstructor”上不存在。是否需要更改目标库? 请尝试将 “lib” 编译器选项更改为“es2015”或更高版本。")]),t._v("\n")])])]),a("p",[t._v("//解决方案，配置项里，lib项增加es6库")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//lib项增加es6库")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
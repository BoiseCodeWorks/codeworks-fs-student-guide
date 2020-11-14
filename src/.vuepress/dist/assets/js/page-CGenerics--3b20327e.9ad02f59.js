(window.webpackJsonp = window.webpackJsonp || []).push([[13], { 486: function(e, t, a) { "use strict"; a.r(t); var s = a(2), n = Object(s.a)({}, (function() { var e = this, t = e.$createElement, a = e._self._c || t; return a("ContentSlotsDistributor", { attrs: { "slot-key": e.$parent.slotKey } }, [a("h1", { attrs: { id: "c-generics" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#c-generics" } }, [e._v("#")]), e._v(" C# Generics")]), e._v(" "), a("h3", { attrs: { id: "value-types-reference-types-and-pointer-types" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#value-types-reference-types-and-pointer-types" } }, [e._v("#")]), e._v(" Value Types, Reference Types, and Pointer Types")]), e._v(" "), a("p", [e._v("In C#, these data types are categorized based on how they store their value in the memory. C# includes the following categories of data types:")]), e._v(" "), a("ol", [a("li", [e._v("Value type")]), e._v(" "), a("li", [e._v("Reference type")]), e._v(" "), a("li", [e._v("Pointer type")])]), e._v(" "), a("h2", { attrs: { id: "value-type" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#value-type" } }, [e._v("#")]), e._v(" Value Type")]), e._v(" "), a("p", [e._v("A data type is a value type if it holds a data value within its own memory space. It means the variables of these data types directly contain values.")]), e._v(" "), a("blockquote", [a("p", [e._v("TIP: All the value types derive from "), a("em", [e._v("System.ValueType")]), e._v(", which in-turn, derives from "), a("em", [e._v("System.Object")]), e._v(".")])]), e._v(" "), a("p", [e._v("For example, consider integer variable "), a("code", [e._v("int i = 100;")])]), e._v(" "), a("p", [e._v("The system stores 100 in the memory space allocated for the variable "), a("code", [e._v("i")]), e._v(". The following image illustrates how 100 is stored at some hypothetical location in the memory (0x239110) for 'i':")]), e._v(" "), a("p", [a("a", { attrs: { href: "https://www.tutorialsteacher.com/Content/images/csharp/value-type-memory-allocation.png", target: "_blank", rel: "noopener noreferrer" } }, [a("img", { attrs: { src: "https://www.tutorialsteacher.com/Content/images/csharp/value-type-memory-allocation.png", alt: "Memory Allocation of Value Type Variable" } }), a("OutboundLink")], 1)]), e._v(" "), a("p", [e._v("The following data types are all of value type:\n"), a("ul", { staticStyle: { columns: "3" } }, [a("li", [e._v("bool")]), e._v(" "), a("li", [e._v("byte")]), e._v(" "), a("li", [e._v("char")]), e._v(" "), a("li", [e._v("decimal")]), e._v(" "), a("li", [e._v("double")]), e._v(" "), a("li", [e._v("enum")]), e._v(" "), a("li", [e._v("float")]), e._v(" "), a("li", [e._v("int")]), e._v(" "), a("li", [e._v("long")]), e._v(" "), a("li", [e._v("sbyte")]), e._v(" "), a("li", [e._v("short")]), e._v(" "), a("li", [e._v("struct")]), e._v(" "), a("li", [e._v("uint")]), e._v(" "), a("li", [e._v("ulong")]), e._v(" "), a("li", [e._v("ushort")])])]), e._v(" "), a("h3", { attrs: { id: "passing-value-type-variables" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#passing-value-type-variables" } }, [e._v("#")]), e._v(" Passing Value Type Variables")]), e._v(" "), a("p", [e._v("When you pass a value-type variable from one method to another, the system creates a separate copy of a variable in another method. If value got changed in the one method, it wouldn't affect the variable in another method.")]), e._v(" "), a("p", [e._v("Example: Passing Value Type Variables")]), e._v(" "), a("div", { staticClass: "language-csharp extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-csharp" } }, [a("code", [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("static")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token return-type class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("void")])]), e._v(" "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("ChangeValue")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), a("span", { pre: !0, attrs: { class: "token class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("int")])]), e._v(" x"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("{")]), e._v("\n    x "), a("span", { pre: !0, attrs: { class: "token operator" } }, [e._v("=")]), e._v("  "), a("span", { pre: !0, attrs: { class: "token number" } }, [e._v("200")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n\n    Console"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("WriteLine")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("x"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token comment" } }, [e._v("// 200")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("}")]), e._v("\n\n"), a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("static")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token return-type class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("void")])]), e._v(" "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("Main")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), a("span", { pre: !0, attrs: { class: "token class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("string")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("[")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("]")])]), e._v(" args"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("{")]), e._v("\n    "), a("span", { pre: !0, attrs: { class: "token class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("int")])]), e._v(" i "), a("span", { pre: !0, attrs: { class: "token operator" } }, [e._v("=")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token number" } }, [e._v("100")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n\n    Console"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("WriteLine")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("i"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token comment" } }, [e._v("// 100")]), e._v("\n\n    "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("ChangeValue")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("i"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n\n    Console"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("WriteLine")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("i"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token comment" } }, [e._v("// 100")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("}")]), e._v("\n\n")])])]), a("p", [e._v("In the above example, variable "), a("code", [e._v("i")]), e._v(" in the "), a("code", [e._v("Main()")]), e._v(" method remains unchanged even after we pass it to the "), a("code", [e._v("ChangeValue()")]), e._v(" method and change it's value there.")]), e._v(" "), a("h2", { attrs: { id: "reference-type" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#reference-type" } }, [e._v("#")]), e._v(" Reference Type")]), e._v(" "), a("p", [e._v("Unlike value types, a reference type doesn't store its value directly. Instead, it stores the address where the value is being stored. In other words, a reference type contains a pointer to another memory location that holds the data.")]), e._v(" "), a("p", [e._v("For example, consider the following string variable:")]), e._v(" "), a("p", [a("code", [e._v('string s = "Hello World!!";')])]), e._v(" "), a("p", [e._v("The following image shows how the system allocates the memory for the above string variable.")]), e._v(" "), a("p", [a("a", { attrs: { href: "https://www.tutorialsteacher.com/Content/images/csharp/raference-type-memory-allocation.png", target: "_blank", rel: "noopener noreferrer" } }, [a("img", { attrs: { src: "https://www.tutorialsteacher.com/Content/images/csharp/raference-type-memory-allocation.png", alt: "Memory Allocation of Reference Type Variable" } }), a("OutboundLink")], 1)]), e._v(" "), a("p", [e._v("As you can see in the above image, the system selects a random location in memory "), a("code", [e._v("(0x803200)")]), e._v(" for the variable "), a("code", [e._v("s")]), e._v(". The value of a variable "), a("code", [e._v("s")]), e._v(" is "), a("code", [e._v("0x600000")]), e._v(", which is the memory address of the actual data value. Thus, reference type stores the address of the location where the actual value is stored instead of the value itself.")]), e._v(" "), a("p", [e._v("The followings are reference type data types:\n"), a("ul", { staticStyle: { columns: "2" } }, [a("li", [e._v("String")]), e._v(" "), a("li", [e._v("Arrays")]), e._v(" "), a("li", [e._v("Class")]), e._v(" "), a("li", [e._v("Delegate")])])]), e._v(" "), a("h3", { attrs: { id: "passing-reference-type-variables" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#passing-reference-type-variables" } }, [e._v("#")]), e._v(" Passing Reference Type Variables")]), e._v(" "), a("p", [e._v("When you pass a reference type variable from one method to another, it doesn't create a new copy; instead, it passes the variable's address. So, If we change the value of a variable in a method, it will also be reflected in the calling method.")]), e._v(" "), a("p", [e._v("Example: Passing Reference Type Variable")]), e._v(" "), a("div", { staticClass: "language-csharp extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-csharp" } }, [a("code", [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("static")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token return-type class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("void")])]), e._v(" "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("ChangeReferenceType")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), a("span", { pre: !0, attrs: { class: "token class-name" } }, [e._v("Student")]), e._v(" std2"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("{")]), e._v("\n    std2"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), e._v("StudentName "), a("span", { pre: !0, attrs: { class: "token operator" } }, [e._v("=")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token string" } }, [e._v('"Steve"')]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("}")]), e._v("\n\n"), a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("static")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token return-type class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("void")])]), e._v(" "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("Main")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), a("span", { pre: !0, attrs: { class: "token class-name" } }, [a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("string")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("[")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("]")])]), e._v(" args"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("{")]), e._v("\n    "), a("span", { pre: !0, attrs: { class: "token class-name" } }, [e._v("Student")]), e._v(" std1 "), a("span", { pre: !0, attrs: { class: "token operator" } }, [e._v("=")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token keyword" } }, [e._v("new")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token constructor-invocation class-name" } }, [e._v("Student")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n    std1"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), e._v("StudentName "), a("span", { pre: !0, attrs: { class: "token operator" } }, [e._v("=")]), e._v(" "), a("span", { pre: !0, attrs: { class: "token string" } }, [e._v('"Bill"')]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n\n    "), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("ChangeReferenceType")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("std1"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n\n    Console"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), a("span", { pre: !0, attrs: { class: "token function" } }, [e._v("WriteLine")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("(")]), e._v("std1"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(".")]), e._v("StudentName"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(")")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v(";")]), e._v("\n"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [e._v("}")]), e._v("\n\n")])])]), a("p", [e._v("Output: "), a("code", [e._v("Steve")])]), e._v(" "), a("p", [e._v("In the above example, we pass the "), a("code", [e._v("Student")]), e._v(" object "), a("code", [e._v("std1")]), e._v(" to the "), a("code", [e._v("ChangeReferenceType()")]), e._v(" method. Here, it actually pass the memory address of "), a("code", [e._v("std1")]), e._v(". Thus, when the "), a("code", [e._v("ChangeReferenceType()")]), e._v(" method changes "), a("code", [e._v("StudentName")]), e._v(", it is actually changing "), a("code", [e._v("StudentName")]), e._v(" of "), a("code", [e._v("std1")]), e._v(" object, because "), a("code", [e._v("std1")]), e._v(" and "), a("code", [e._v("std2")]), e._v(" are both pointing to the same address in memory.")]), e._v(" "), a("h2", { attrs: { id: "null" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#null" } }, [e._v("#")]), e._v(" Null")]), e._v(" "), a("p", [e._v("The default value of a reference type variable is "), a("code", [e._v("null")]), e._v(" when they are not initialized. "), a("code", [e._v("Null")]), e._v(" means not refering to any object.")]), e._v(" "), a("p", [a("a", { attrs: { href: "https://www.tutorialsteacher.com/Content/images/csharp/null.png", target: "_blank", rel: "noopener noreferrer" } }, [a("img", { attrs: { src: "https://www.tutorialsteacher.com/Content/images/csharp/null.png", alt: "Null Reference Type" } }), a("OutboundLink")], 1)]), e._v(" "), a("p", [e._v("A value type variable cannot be null because it holds value, not a memory address. C# 2.0 introduced "), a("a", { attrs: { href: "https://www.tutorialsteacher.com/csharp/csharp-nullable-types", target: "_blank", rel: "noopener noreferrer" } }, [e._v("nullable types"), a("OutboundLink")], 1), e._v(", using which you can assign null to a value type variable or declare a value type variable without assigning a value to it.")]), e._v(" "), a("br"), e._v(" "), a("br"), e._v(" "), a("hr"), e._v(" "), a("small", [e._v("TutorialsTeacher. (2020). Value Type and Reference Type. Retrieved November 12, 2020, from https://www.tutorialsteacher.com/csharp/csharp-value-type-and-reference-type")]), e._v(" "), a("br")]) }), [], !1, null, null, null); t.default = n.exports } }]);
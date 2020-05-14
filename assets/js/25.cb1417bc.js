(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{255:function(e,t,n){"use strict";n.r(t);var r=n(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"missing-elements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#missing-elements"}},[e._v("#")]),e._v(" Missing Elements")]),e._v(" "),n("p",[e._v("Missing elements are a collection of phenomenon that deals with things that are meant, but not explicitly mentioned in the text.\nThere are different kinds of missing elements, which have different aspects and behaviour.\nFor example, "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ellipsis_(linguistics)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ellipsis"),n("OutboundLink")],1),e._v(", Fused-Head, Bridging Anaphora, etc.")]),e._v(" "),n("h3",{attrs:{id:"numeric-fused-head-nfh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#numeric-fused-head-nfh"}},[e._v("#")]),e._v(" Numeric Fused-Head (NFH)")]),e._v(" "),n("p",[e._v("FHs constructions are noun phrases (NPs) in which the head noun is missing and is said to be “fused” with its dependent modifier.\nThis missing information is implicit and is important for sentence understanding.")]),e._v(" "),n("p",[e._v("The Numeric "),n("a",{attrs:{href:"https://github.com/yanaiela/num_fh/tree/master/data/resolution/processed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fused-Head dataset"),n("OutboundLink")],1),e._v("\nconsists of ~10K examples of crowd-sourced classified examples, labeled into 7 different categories, from two types.\nIn the first type, "),n("em",[e._v("Reference")]),e._v(", the missing head is referenced explicitly somewhere else in the discourse, either in the\nsame sentence or in surrounding sentences.\nIn the second type, "),n("em",[e._v("Implicit")]),e._v(", the missing head does not appear in the text and needs to be inferred by the reader or\nhearer based on the context or world knowledge. This category was labeled into the 6 most common categories of the dataset.\nModels are evaluated based on accuracy.")]),e._v(" "),n("p",[e._v("Annotated Examples:")]),e._v(" "),n("h4",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("I")]),e._v(" "),n("th",[e._v("bought")]),e._v(" "),n("th",[e._v("5")]),e._v(" "),n("th",[e._v("apples")]),e._v(" "),n("th",[e._v("but")]),e._v(" "),n("th",[e._v("got")]),e._v(" "),n("th",[e._v("only")]),e._v(" "),n("th",[e._v("4")]),e._v(" "),n("th",[e._v(".")])])]),e._v(" "),n("tbody",[n("tr",[n("td"),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td",[e._v("HEAD")]),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td",[e._v("NFH-REFERENCE")]),e._v(" "),n("td")])])]),e._v(" "),n("h4",{attrs:{id:"implicit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implicit"}},[e._v("#")]),e._v(" Implicit")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Let")]),e._v(" "),n("th",[e._v("'s")]),e._v(" "),n("th",[e._v("meet")]),e._v(" "),n("th",[e._v("at")]),e._v(" "),n("th",[e._v("5")]),e._v(" "),n("th",[e._v("tomorrow")]),e._v(" "),n("th",[e._v("?")])])]),e._v(" "),n("tbody",[n("tr",[n("td"),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td",[e._v("NFH-TIME")]),e._v(" "),n("td"),e._v(" "),n("td")])])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Model")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Accuracy")]),e._v(" "),n("th",[e._v("Paper / Source")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Code")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Bi-LSTM + Scoring (Elazar and Goldberg, 2019)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("60.8")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://arxiv.org/abs/1905.10886",target:"_blank",rel:"noopener noreferrer"}},[e._v("Where’s My Head? Definition, Dataset and Models for Numeric Fused-Heads Identification and Resolution"),n("OutboundLink")],1)]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://github.com/yanaiela/num_fh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),n("OutboundLink")],1)])]),e._v(" "),n("tr",[n("td",[e._v("Bi-LSTM + Elmo + Scoring (Elazar and Goldberg, 2019)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("74.0")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://arxiv.org/abs/1905.10886",target:"_blank",rel:"noopener noreferrer"}},[e._v("Where’s My Head? Definition, Dataset and Models for Numeric Fused-Heads Identification and Resolution"),n("OutboundLink")],1)]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://github.com/yanaiela/num_fh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),n("OutboundLink")],1)])])])]),e._v(" "),n("h2",{attrs:{id:"ptb-traces-and-null-elements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ptb-traces-and-null-elements"}},[e._v("#")]),e._v(" PTB Traces and Null Elements")]),e._v(" "),n("p",[e._v("These are evaluated on section 23 of the Penn Treebank, using a metric defined by Johnson (2002).\nAn implementation of the metric is available with the code from "),n("a",{attrs:{href:"https://github.com/jkkummerfeld/1ec-graph-parser/tree/master/evaluation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kummerfeld and Klein (2017)"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Model")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("F-score")]),e._v(" "),n("th",[e._v("Paper / Source")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Code")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Kato and Matsubara (2016)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("77.8")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://www.aclweb.org/anthology/P16-1088",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transition-Based Left-Corner Parsing for Identifying PTB-Style Nonlocal Dependencies"),n("OutboundLink")],1)]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),n("tr",[n("td",[e._v("Kummerfeld and Klein (2017)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("70.6")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://aclweb.org/anthology/papers/Q/Q17/Q17-1031/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parsing with Traces: An O(n^4) Algorithm and a Structural Representation"),n("OutboundLink")],1)]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://github.com/jkkummerfeld/1ec-graph-parser",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),n("OutboundLink")],1)])]),e._v(" "),n("tr",[n("td",[e._v("Johnson (2002)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("68")]),e._v(" "),n("td",[n("a",{attrs:{href:"https://www.aclweb.org/anthology/P02-1018",target:"_blank",rel:"noopener noreferrer"}},[e._v("A simple pattern-matching algorithm for recovering empty nodes and their antecedents"),n("OutboundLink")],1)]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"http://web.science.mq.edu.au/~mjohnson/code/Restorer.tbz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"http://web.science.mq.edu.au/~mjohnson/code/Restorer-README.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("README"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
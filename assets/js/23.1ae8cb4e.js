(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{257:function(t,e,n){"use strict";n.r(e);var a=n(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"lexical-normalization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexical-normalization"}},[t._v("#")]),t._v(" Lexical Normalization")]),t._v(" "),n("p",[t._v("Lexical normalization is the task of translating/transforming a non standard text to a standard register.")]),t._v(" "),n("p",[t._v("Example:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("new pix comming tomoroe\nnew pictures coming tomorrow\n")])])]),n("p",[t._v("Datasets usually consists of tweets, since these naturally contain a fair amount of\nthese phenomena.")]),t._v(" "),n("p",[t._v("For lexical normalization, only replacements on the word-level are annotated.\nSome corpora include annotation for 1-N and N-1 replacements. However, word\ninsertion/deletion and reordering is not part of the task.")]),t._v(" "),n("h3",{attrs:{id:"lexnorm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexnorm"}},[t._v("#")]),t._v(" LexNorm")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"http://people.eng.unimelb.edu.au/tbaldwin/etc/lexnorm_v1.2.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("LexNorm"),n("OutboundLink")],1),t._v(" corpus was originally introduced by "),n("a",{attrs:{href:"http://aclweb.org/anthology/P/P11/P11-1038.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Han and Baldwin (2011)"),n("OutboundLink")],1),t._v(".\nSeveral mistakes in annotation were resolved by "),n("a",{attrs:{href:"http://www.aclweb.org/anthology/D13-1007",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yang and Eisenstein"),n("OutboundLink")],1),t._v(";\non this page, we only report results on the new dataset. For this dataset, the 2,577\ntweets from "),n("a",{attrs:{href:"http://www.aclweb.org/anthology/P14-3012",target:"_blank",rel:"noopener noreferrer"}},[t._v("Li and Liu(2014)"),n("OutboundLink")],1),t._v(" is often\nused as training data, because of its similar annotation style.")]),t._v(" "),n("p",[t._v("This dataset is commonly evaluated with accuracy on the non-standard words. This\nmeans that the system knows in advance which words are in need of normalization.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Model")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Accuracy")]),t._v(" "),n("th",[t._v("Paper / Source")]),t._v(" "),n("th",[t._v("Code")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("MoNoise (van der Goot & van Noord, 2017)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("87.63")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.let.rug.nl/rob/doc/clin27.paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("MoNoise: Modeling Noise Using a Modular Normalization System"),n("OutboundLink")],1)]),t._v(" "),n("td",[n("a",{attrs:{href:"https://bitbucket.org/robvanderg/monoise/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Joint POS + Norm in a Viterbi decoding (Li & Liu, 2015)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("87.58*")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.aaai.org/ocs/index.php/IJCAI/IJCAI15/paper/download/10839/10838",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joint POS Tagging and Text Normalization for Informal Text"),n("OutboundLink")],1)]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Syllable based (Xu et al., 2015)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("86.08")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.aclweb.org/anthology/P15-1089",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tweet Normalization with Syllables"),n("OutboundLink")],1)]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("unLOL (Yang & Eisenstein, 2013)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("82.06")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.aclweb.org/anthology/D13-1007",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Log-Linear Model for Unsupervised Text Normalization"),n("OutboundLink")],1)]),t._v(" "),n("td")])])]),t._v(" "),n("p",[t._v("* used a slightly different version of the data")]),t._v(" "),n("h4",{attrs:{id:"lexnorm2015"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexnorm2015"}},[t._v("#")]),t._v(" LexNorm2015")]),t._v(" "),n("p",[t._v("The\n"),n("a",{attrs:{href:"https://github.com/noisy-text/noisy-text.github.io/blob/master/2015/files/lexnorm2015.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("LexNorm2015"),n("OutboundLink")],1),t._v("\ndataset was introduced for the shared task on lexical normalization, hosted at\nWNUT2015 ("),n("a",{attrs:{href:"http://aclweb.org/anthology/W15-4319",target:"_blank",rel:"noopener noreferrer"}},[t._v("Baldwin et al(2015)"),n("OutboundLink")],1),t._v(").  In\nthis dataset, 1-N and N-1 replacements are included in the annotation. The\nevaluation metrics used are precision, recall and F1 score. However, this is\ncalculated a bit odd:")]),t._v(" "),n("p",[t._v("Precision: out of all necessary replacements, how many correctly found")]),t._v(" "),n("p",[t._v("Recall: out of all normalization by system, how many correct")]),t._v(" "),n("p",[t._v("This means that if the system replaces a word which is in need of normalization,\nbut chooses the wrong normalization, it is penalized twice.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Model")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("F1")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Precision")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Recall")]),t._v(" "),n("th",[t._v("Paper / Source")]),t._v(" "),n("th",[t._v("Code")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("MoNoise (van der Goot & van Noord, 2017)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("86.39")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("93.53")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("80.26")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.let.rug.nl/rob/doc/clin27.paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("MoNoise: Modeling Noise Using a Modular Normalization System"),n("OutboundLink")],1)]),t._v(" "),n("td",[n("a",{attrs:{href:"https://bitbucket.org/robvanderg/monoise/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Random Forest + novel similarity metric (Jin, 2017)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("84.21")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("90.61")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("78.65")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.aclweb.org/anthology/W15-4313",target:"_blank",rel:"noopener noreferrer"}},[t._v("NCSU-SAS-Ning: Candidate Generation and Feature Engineering for Supervised Lexical Normalization"),n("OutboundLink")],1)]),t._v(" "),n("td")])])]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/"}},[t._v("Go back to the README")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
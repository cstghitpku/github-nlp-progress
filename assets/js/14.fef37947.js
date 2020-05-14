(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(e,t,r){"use strict";r.r(t);var n=r(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"coreference-resolution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coreference-resolution"}},[e._v("#")]),e._v(" Coreference resolution")]),e._v(" "),r("p",[e._v("Coreference resolution is the task of clustering mentions in text that refer to the same underlying real world entities.")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('               +-----------+\n               |           |\nI voted for Obama because he was most aligned with my values", she said.\n |                                                 |            |\n +-------------------------------------------------+------------+\n')])])]),r("p",[e._v('"I", "my", and "she" belong to the same cluster and "Obama" and "he" belong to the same cluster.')]),e._v(" "),r("h3",{attrs:{id:"conll-2012"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conll-2012"}},[e._v("#")]),e._v(" CoNLL 2012")]),e._v(" "),r("p",[e._v("Experiments are conducted on the data of the "),r("a",{attrs:{href:"http://www.aclweb.org/anthology/W12-4501",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoNLL-2012 shared task"),r("OutboundLink")],1),e._v(", which\nuses OntoNotes coreference annotations. Papers\nreport the precision, recall, and F1 of the MUC, B3, and CEAFφ4 metrics using the official\nCoNLL-2012 evaluation scripts. The main evaluation metric is the average F1 of the three metrics.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Model")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Avg F1")]),e._v(" "),r("th",[e._v("Paper / Source")]),e._v(" "),r("th",[e._v("Code")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Joshi et al. (2019)"),r("sup",[r("a",{attrs:{href:"#myfootnote1"}},[e._v("1")])])]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("76.9")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1908.09091",target:"_blank",rel:"noopener noreferrer"}},[e._v("BERT for Coreference Resolution: Baselines and Analysis"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/mandarjoshi90/coref",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Kantor and Globerson (2019)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("76.6")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P19-1066/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coreference Resolution with Entity Equalization"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/kkjawz/coref-ee",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Fei et al. (2019)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("73.8")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P19-1064/",target:"_blank",rel:"noopener noreferrer"}},[e._v("End-to-end Deep Reinforcement Learning Based Coreference Resolution"),r("OutboundLink")],1)]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("(Lee et al., 2017)+ELMo (Peters et al., 2018)+coarse-to-fine & second-order inference (Lee et al., 2018)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("73.0")]),e._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-2108",target:"_blank",rel:"noopener noreferrer"}},[e._v("Higher-order Coreference Resolution with Coarse-to-fine Inference"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/kentonl/e2e-coref",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("(Lee et al., 2017)+ELMo (Peters et al., 2018)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("70.4")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1802.05365",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deep contextualized word representations"),r("OutboundLink")],1)]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Lee et al. (2017)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("67.2")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1707.07045",target:"_blank",rel:"noopener noreferrer"}},[e._v("End-to-end Neural Coreference Resolution"),r("OutboundLink")],1)]),e._v(" "),r("td")])])]),e._v(" "),r("p",[r("a",{attrs:{name:"myfootnote1"}},[e._v("[1]")]),e._v(" Joshi et al. (2019): (Lee et al., 2017)+coarse-to-fine & second-order inference (Lee et al., 2018)+BERT (Devlin et al., 2019)")]),e._v(" "),r("h3",{attrs:{id:"gendered-ambiguous-pronoun-resolution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gendered-ambiguous-pronoun-resolution"}},[e._v("#")]),e._v(" Gendered Ambiguous Pronoun Resolution")]),e._v(" "),r("p",[e._v("Experiments are conducted on "),r("a",{attrs:{href:"https://github.com/google-research-datasets/gap-coreference",target:"_blank",rel:"noopener noreferrer"}},[e._v("GAP dataset"),r("OutboundLink")],1),e._v(".\nMetrics used are F1 score on Masculine (M) and Feminine (F) examples, Overall, and a Bias factor calculated as F / M.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Model")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Overall F1")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Masculine F1 (M)")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Feminine F1 (F)")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Bias (F/M)")]),e._v(" "),r("th",[e._v("Paper / Source")]),e._v(" "),r("th",[e._v("Code")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Attree et al. (2019)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("92.5")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("94.0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("91.1")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0.97")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1906.00839",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gendered Ambiguous Pronouns Shared Task: Boosting Model Confidence by Evidence Pooling"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/sattree/gap",target:"_blank",rel:"noopener noreferrer"}},[e._v("GREP"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Chada et al. (2019)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("90.2")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("90.9")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("89.5")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0.98")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1906.03695",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gendered Pronoun Resolution using BERT and an extractive question answering formulation"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/rakeshchada/corefqa",target:"_blank",rel:"noopener noreferrer"}},[e._v("CorefQA"),r("OutboundLink")],1)])])])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/"}},[e._v("Go back to the README")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);
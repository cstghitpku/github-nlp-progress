(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{249:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"semantic-textual-similarity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-textual-similarity"}},[t._v("#")]),t._v(" Semantic textual similarity")]),t._v(" "),a("p",[t._v("Semantic textual similarity deals with determining how similar two pieces of texts are.\nThis can take the form of assigning a score from 1 to 5. Related tasks are paraphrase or duplicate identification.")]),t._v(" "),a("h3",{attrs:{id:"senteval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#senteval"}},[t._v("#")]),t._v(" SentEval")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://arxiv.org/abs/1803.05449",target:"_blank",rel:"noopener noreferrer"}},[t._v("SentEval"),a("OutboundLink")],1),t._v(" is an evaluation toolkit for evaluating sentence\nrepresentations. It includes 17 downstream tasks, including common semantic textual similarity\ntasks. The semantic textual similarity (STS) benchmark tasks from 2012-2016 (STS12, STS13, STS14, STS15, STS16, STS-B) measure the relatedness\nof two sentences based on the cosine similarity of the two representations. The evaluation criterion is Pearson correlation.")]),t._v(" "),a("p",[t._v("The SICK relatedness (SICK-R) task trains a linear model to output a score from 1 to 5 indicating the relatedness of two sentences. For\nthe same dataset (SICK-E) can be treated as a three-class classification problem using the entailment labels (classes are 'entailment', 'contradiction', and 'neutral').\nThe evaluation metric for SICK-R is Pearson correlation and classification accuracy for SICK-E.")]),t._v(" "),a("p",[t._v("The Microsoft Research Paraphrase Corpus (MRPC) corpus is a paraphrase identification dataset, where systems\naim to identify if two sentences are paraphrases of each other. The evaluation metric is classification accuracy and F1.")]),t._v(" "),a("p",[t._v("The data can be downloaded from "),a("a",{attrs:{href:"https://github.com/facebookresearch/SentEval",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("MRPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SICK-R")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SICK-E")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("STS")]),t._v(" "),a("th",[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("XLNet-Large (ensemble) (Yang et al., 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("93.0/90.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("91.6/91.1*")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1906.08237.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/zihangdai/xlnet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("MT-DNN-ensemble (Liu et al., 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("92.7/90.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("91.1/90.7*")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1904.09482.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improving Multi-Task Deep Neural Networks via Knowledge Distillation for Natural Language Understanding"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/namisan/mt-dnn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Snorkel MeTaL(ensemble) (Ratner et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("91.5/88.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90.1/89.7*")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1810.02840.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Training Complex Models with Multi-Task Weak Supervision"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/HazyResearch/metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("GenSen (Subramanian et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("78.6/84.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.888")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("87.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("78.9/78.6")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1804.00079",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learning General Purpose Distributed Sentence Representations via Large Scale Multi-task Learning"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/Maluuba/gensen",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("InferSent (Conneau et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("76.2/83.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.884")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("86.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("75.8/75.5")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1705.02364",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supervised Learning of Universal Sentence Representations from Natural Language Inference Data"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/facebookresearch/InferSent",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("TF-KLD (Ji and Eisenstein, 2013)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80.4/85.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://www.aclweb.org/anthology/D/D13/D13-1090.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discriminative Improvements to Distributional Sentence Similarity"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("* only evaluated on STS-B")]),t._v(" "),a("h2",{attrs:{id:"paraphrase-identification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paraphrase-identification"}},[t._v("#")]),t._v(" Paraphrase identification")]),t._v(" "),a("h3",{attrs:{id:"quora-question-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quora-question-pairs"}},[t._v("#")]),t._v(" Quora Question Pairs")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://data.quora.com/First-Quora-Dataset-Release-Question-Pairs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quora Question Pairs dataset"),a("OutboundLink")],1),t._v("\nconsists of over 400,000 pairs of questions on Quora. Systems must identify whether one question is a\nduplicate of the other. Models are evaluated based on accuracy.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Accuracy")]),t._v(" "),a("th",[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("XLNet-Large (ensemble) (Yang et al., 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("74.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90.3")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1906.08237.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/zihangdai/xlnet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("MT-DNN-ensemble (Liu et al., 2019)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("73.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89.9")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1904.09482.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improving Multi-Task Deep Neural Networks via Knowledge Distillation for Natural Language Understanding"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/namisan/mt-dnn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Snorkel MeTaL(ensemble) (Ratner et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("73.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89.9")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1810.02840.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Training Complex Models with Multi-Task Weak Supervision"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/HazyResearch/metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("MwAN (Tan et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89.12")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://www.ijcai.org/proceedings/2018/0613.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multiway Attention Networks for Modeling Sentence Pairs"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("DIIN (Gong et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89.06")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1709.04348.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Natural Language Inference Over Interaction Space"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/YichenGong/Densely-Interactive-Inference-Network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("pt-DecAtt (Char) (Tomar et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88.40")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1704.04565",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Paraphrase Identification of Questions with Noisy Pretraining"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("BiMPM (Wang et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("88.17")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1702.03814",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bilateral Multi-Perspective Matching for Natural Language Sentences"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/zhiguowang/BiMPM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("GenSen (Subramanian et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("87.01")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1804.00079",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learning General Purpose Distributed Sentence Representations via Large Scale Multi-task Learning"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/Maluuba/gensen",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/"}},[t._v("Go back to the README")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
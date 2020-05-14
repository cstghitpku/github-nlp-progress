(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{253:function(t,e,a){"use strict";a.r(e);var n=a(1),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"multimodal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimodal"}},[t._v("#")]),t._v(" Multimodal")]),t._v(" "),a("h2",{attrs:{id:"multimodal-emotion-recognition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimodal-emotion-recognition"}},[t._v("#")]),t._v(" Multimodal Emotion Recognition")]),t._v(" "),a("h3",{attrs:{id:"iemocap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iemocap"}},[t._v("#")]),t._v(" IEMOCAP")]),t._v(" "),a("p",[t._v("The  IEMOCAP ("),a("a",{attrs:{href:"https://link.springer.com/article/10.1007/s10579-008-9076-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Busso  et  al., 2008"),a("OutboundLink")],1),t._v(") contains the acts of 10 speakers in a two-way conversation segmented into utterances. The medium of the conversations in all the videos is English. The database contains the following categorical labels: anger, happiness, sadness, neutral, excitement, frustration, fear, surprise,  and other.")]),t._v(" "),a("p",[a("strong",[t._v("Monologue:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Accuracy")]),t._v(" "),a("th",[t._v("Paper / Source")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CHFusion (Poria et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("76.5%")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1806.06228.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multimodal Sentiment Analysis using Hierarchical Fusion with Context Modeling"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("bc-LSTM (Poria et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("74.10%")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://sentic.net/context-dependent-sentiment-analysis-in-user-generated-videos.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Context-Dependent Sentiment Analysis in User-Generated Videos"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("strong",[t._v("Conversational:")]),t._v("\nConversational setting enables the models to capture emotions expressed by the speakers in a conversation. Inter speaker dependencies are considered in this setting.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Weighted Accuracy (WAA)")]),t._v(" "),a("th",[t._v("Paper / Source")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CMN (Hazarika et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("77.62%")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://aclweb.org/anthology/N18-1193",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conversational Memory Network for Emotion Recognition in Dyadic Dialogue Videos"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Memn2n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("75.08")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://aclweb.org/anthology/N18-1193",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conversational Memory Network for Emotion Recognition in Dyadic Dialogue Videos"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"multimodal-metaphor-recognition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimodal-metaphor-recognition"}},[t._v("#")]),t._v(" Multimodal Metaphor Recognition")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.aclweb.org/anthology/S16-2003",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mohammad et. al, 2016"),a("OutboundLink")],1),t._v(" created a dataset of verb-noun pairs from WordNet that had multiple senses. They annoted these pairs for metaphoricity (metaphor or not a metaphor). Dataset is in English.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F1 Score")]),t._v(" "),a("th",[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("5-layer convolutional network (Krizhevsky et al., 2012), Word2Vec")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.75")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://www.aclweb.org/anthology/N16-1020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shutova et. al, 2016"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Unavailable")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.aclweb.org/anthology/P14-1024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tsvetkov  et. al, 2014"),a("OutboundLink")],1),t._v(" created a dataset of adjective-noun pairs that they then annotated for metaphoricity. Dataset is in English.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("F1 Score")]),t._v(" "),a("th",[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("5-layer convolutional network (Krizhevsky et al., 2012), Word2Vec")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.79")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://www.aclweb.org/anthology/N16-1020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shutova et. al, 2016"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Unavailable")])])])]),t._v(" "),a("h2",{attrs:{id:"multimodal-sentiment-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimodal-sentiment-analysis"}},[t._v("#")]),t._v(" Multimodal Sentiment Analysis")]),t._v(" "),a("h3",{attrs:{id:"mosi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mosi"}},[t._v("#")]),t._v(" MOSI")]),t._v(" "),a("p",[t._v("The MOSI dataset ("),a("a",{attrs:{href:"https://arxiv.org/pdf/1606.06259.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zadeh et al., 2016"),a("OutboundLink")],1),t._v(") is a dataset rich in sentimental expressions where 93 people review topics in English. The videos are segmented with each segments sentiment label scored between +3 (strong positive) to -3 (strong negative)  by  5  annotators.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Model")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Accuracy")]),t._v(" "),a("th",[t._v("Paper / Source")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bc-LSTM (Poria et al., 2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80.3%")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://sentic.net/context-dependent-sentiment-analysis-in-user-generated-videos.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Context-Dependent Sentiment Analysis in User-Generated Videos"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("MARN (Zadeh et al., 2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("77.1%")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1802.00923.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multi-attention Recurrent Network for Human Communication Comprehension"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/"}},[t._v("Go back to the README")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
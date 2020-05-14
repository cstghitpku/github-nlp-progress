(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{228:function(t,e,a){"use strict";a.r(e);var n=a(1),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"entity-linking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-linking"}},[t._v("#")]),t._v(" Entity Linking")]),t._v(" "),a("h2",{attrs:{id:"task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[t._v("#")]),t._v(" Task")]),t._v(" "),a("p",[t._v("Entity Linking (EL) is the task of recognizing (cf. "),a("RouterLink",{attrs:{to:"/english/named_entity_recognition.html"}},[t._v("Named Entity Recognition")]),t._v(") and disambiguating (Named Entity Disambiguation) named entities to a knowledge base (e.g. Wikidata, DBpedia, or YAGO). It is sometimes also simply known as Named Entity Recognition and Disambiguation.")],1),t._v(" "),a("p",[t._v("EL can be split into two classes of approaches:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("End-to-End")]),t._v(": processing a piece of text to extract the entities (i.e. Named Entity Recognition) and then disambiguate these extracted entities to the correct entry in a given knowledge base (e.g. Wikidata, DBpedia, YAGO).")]),t._v(" "),a("li",[a("em",[t._v("Disambiguation-Only")]),t._v(": contrary to the first approach, this one directly takes gold standard named entities as input and only disambiguates them to the correct entry in a given knowledge base.")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Barack")]),t._v(" "),a("th",[t._v("Obama")]),t._v(" "),a("th",[t._v("was")]),t._v(" "),a("th",[t._v("born")]),t._v(" "),a("th",[t._v("in")]),t._v(" "),a("th",[t._v("Hawaï")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("https://en.wikipedia.org/wiki/Barack_Obama")]),t._v(" "),a("td",[t._v("https://en.wikipedia.org/wiki/Barack_Obama")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("https://en.wikipedia.org/wiki/Hawaii")])])])]),t._v(" "),a("p",[t._v("More in details can be found in this "),a("a",{attrs:{href:"http://dbgroup.cs.tsinghua.edu.cn/wangjy/papers/TKDE14-entitylinking.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("survey"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"current-sota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-sota"}},[t._v("#")]),t._v(" Current SOTA")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://arxiv.org/pdf/1802.01021.pdf",title:"DeepType: Multilingual Entity Linking by Neural Type System Evolution",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raiman"),a("OutboundLink")],1),t._v(" is the current SOTA in Cross-lingual Entity Linking. They construct a type system, and use it to constrain the outputs of a neural network to respect the symbolic structure. They achieve this by reformulating the design problem into a mixed integer problem: create a type system and subsequently train a neural network with it. They propose a 2-step algorithm: 1) heuristic search or stochastic optimization over discrete variables that define a type system\ninformed by an Oracle and a Learnability heuristic, 2) gradient descent to fit classifier parameters. They apply DeepType to the problem of Entity Linking on three standard datasets (i.e. WikiDisamb30, CoNLL (YAGO), TAC KBP 2010) and find that it outperforms all existing solutions by a wide margin, including approaches that rely on a human-designed type system or recent deep learning-based entity embeddings, while explicitly using symbolic information lets it integrate new entities without retraining.")]),t._v(" "),a("h2",{attrs:{id:"evaluation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluation"}},[t._v("#")]),t._v(" Evaluation")]),t._v(" "),a("h3",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[t._v("#")]),t._v(" Metrics")]),t._v(" "),a("h4",{attrs:{id:"disambiguation-only-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disambiguation-only-approach"}},[t._v("#")]),t._v(" Disambiguation-Only Approach")]),t._v(" "),a("ul",[a("li",[t._v("Micro-Precision: Fraction of correctly disambiguated named entities in the full corpus.")]),t._v(" "),a("li",[t._v("Macro-Precision: Fraction of correctly disambiguated named entities, averaged by document.")])]),t._v(" "),a("h4",{attrs:{id:"end-to-end-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-to-end-approach"}},[t._v("#")]),t._v(" End-to-End Approach")]),t._v(" "),a("ul",[a("li",[t._v("Gerbil Micro-F1 - strong matching: micro InKB F1 score for correctly linked and disambiguated mentions in the full corpus as computed using the Gerbil platform. InKB means only mentions with valid KB entities are used for evaluation.")]),t._v(" "),a("li",[t._v("Gerbil Macro-F1 - strong matching: macro InKB F1 score for correctly linked and disambiguated mentions in the full corpus as computed using the Gerbil platform. InKB means only mentions with valid KB entities are used for evaluation.")])]),t._v(" "),a("h3",{attrs:{id:"datasets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datasets"}},[t._v("#")]),t._v(" Datasets")]),t._v(" "),a("h4",{attrs:{id:"aida-conll-yago-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aida-conll-yago-dataset"}},[t._v("#")]),t._v(" AIDA CoNLL-YAGO Dataset")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.mpi-inf.mpg.de/departments/databases-and-information-systems/research/yago-naga/aida/downloads/",title:"AIDA CoNLL-YAGO Dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("AIDA CoNLL-YAGO"),a("OutboundLink")],1),t._v(" Dataset by "),a("a",{attrs:{href:"http://www.aclweb.org/anthology/D11-1072",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Hoffart]"),a("OutboundLink")],1),t._v(" contains assignments of entities to the mentions of named entities annotated for the original "),a("a",{attrs:{href:"http://www.aclweb.org/anthology/W03-0419.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("[CoNLL]"),a("OutboundLink")],1),t._v(" 2003 NER task. The entities are identified by "),a("a",{attrs:{href:"http://yago-knowledge.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAGO2"),a("OutboundLink")],1),t._v(" entity identifier, by "),a("a",{attrs:{href:"https://en.wikipedia.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia URL"),a("OutboundLink")],1),t._v(", or by "),a("a",{attrs:{href:"http://wiki.freebase.com/wiki/Machine_ID",target:"_blank",rel:"noopener noreferrer"}},[t._v("Freebase mid"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"disambiguation-only-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disambiguation-only-models"}},[t._v("#")]),t._v(" Disambiguation-Only Models")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Paper / Source")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Micro-Precision")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Macro-Precision")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Raiman et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("94.88")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://arxiv.org/pdf/1802.01021.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DeepType: Multilingual Entity Linking by Neural Type System Evolution"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/openai/deeptype",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Sil et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("94.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16501/16101",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Cross-Lingual Entity Linking"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Radhakrishnan et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("93.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("93.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://aclweb.org/anthology/N18-1167",target:"_blank",rel:"noopener noreferrer"}},[t._v("ELDEN: Improved Entity Linking using Densified Knowledge Graphs"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Le et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("93.07")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://aclweb.org/anthology/P18-1148",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improving Entity Linking by Modeling Latent Relations between Mentions"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/lephong/mulrel-nel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Ganea and Hofmann (2017)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("92.22")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://www.aclweb.org/anthology/D17-1277",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deep Joint Entity Disambiguation with Local Neural Attention"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/dalab/deep-ed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Hoffart et al. (2011)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("82.29")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("82.02")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://www.aclweb.org/anthology/D11-1072",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robust Disambiguation of Named Entities in Text"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("h5",{attrs:{id:"end-to-end-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-to-end-models"}},[t._v("#")]),t._v(" End-to-End Models")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Paper / Source")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Micro-F1-strong")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Macro-F1-strong")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Kolitsas et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("86.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://arxiv.org/pdf/1808.07699.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("End-to-End Neural Entity Linking"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/dalab/end2end_neural_el",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Piccinno et al. (2014)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("69.32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("72.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://dl.acm.org/citation.cfm?id=2634350",target:"_blank",rel:"noopener noreferrer"}},[t._v("From TagME to WAT: a new entity annotator"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Hoffart et al. (2011)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("68.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("72.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://www.aclweb.org/anthology/D11-1072",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robust Disambiguation of Named Entities in Text"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"tac-kbp-english-entity-linking-comprehensive-and-evaluation-data-2010"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tac-kbp-english-entity-linking-comprehensive-and-evaluation-data-2010"}},[t._v("#")]),t._v(" TAC KBP English Entity Linking Comprehensive and Evaluation Data 2010")]),t._v(" "),a("p",[t._v("The Knowledge Base Population (KBP) Track at "),a("a",{attrs:{href:"https://tac.nist.gov/2010",target:"_blank",rel:"noopener noreferrer"}},[t._v("TAC 2010"),a("OutboundLink")],1),t._v(" will explore extraction of information about entities with reference to an external knowledge source. Using basic schema for persons, organizations, and locations, nodes in an ontology must be created and populated using unstructured information found in text. A collection of "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Help:Infobox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia Infoboxes"),a("OutboundLink")],1),t._v(" will serve as a rudimentary initial knowledge representation. You can download the dataset from "),a("a",{attrs:{href:"https://www.ldc.upenn.edu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LDC"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/ChrisLeeJ/TAC_KBP_English_EL_2010",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"disambiguation-only-models-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disambiguation-only-models-2"}},[t._v("#")]),t._v(" Disambiguation-Only Models")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Paper / Source")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Micro-Precision")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Macro-Precision")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Paper / Source")]),t._v(" "),a("th",[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Raiman et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90.85")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://arxiv.org/pdf/1802.01021.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DeepType: Multilingual Entity Linking by Neural Type System Evolution"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/openai/deeptype",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Sil et al. (2018)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("87.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16501/16101",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Cross-Lingual Entity Linking"),a("OutboundLink")],1)]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Yamada et al. (2016)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("85.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://arxiv.org/pdf/1601.01343.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joint Learning of the Embedding of Words and Entities for Named Entity Disambiguation"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platforms"}},[t._v("#")]),t._v(" Platforms")]),t._v(" "),a("p",[t._v('Evaluating Entity Linking systems in a manner that allows for direct comparison of performance can be difficult. The precise definition of a "correct" annotation can be somewhat subjective and it is easy to make mistakes. To provide a simple example, given the input surface form '),a("strong",[t._v('"Tom Waits"')]),t._v(", an evaluation dataset might record the dbpedia resource "),a("code",[t._v("http://dbpedia.org/resource/Tom_Waits")]),t._v(" as the correct referent. Yet an annotation system which returns a reference to "),a("code",[t._v("http://dbpedia.org/resource/PEHDTSCKJBMA")]),t._v(" has technically provided an appropriate annotation as this resource is a redirect to "),a("code",[t._v("http://dbpedia.org/resource/Tom_Waits")]),t._v(". Alternatively if evaluating an End-to-End EL system, then accuracy with respect to word boundaries must be considered e.g. if a system only annotates "),a("strong",[t._v('"Obama"')]),t._v(" with the URI "),a("code",[t._v("http://dbpedia.org/resource/Barack_Obama")]),t._v(" in the surface form "),a("strong",[t._v('"Barack Obama"')]),t._v(", then is the system correct or incorrect in its annotation?")]),t._v(" "),a("p",[t._v("Furthermore, the performance of an EL system can be strongly affected by the nature of the content on which the evaluation is performed e.g. news content versus Tweets. Hence comparing the relative performance of two EL systems which have been tested on two different corpora can be fallicious. Rather than allowing these little subjective points to creep into the evaluation of EL systems, it is better to make use of a standard evaluation platform where these assumptions are known and made explicit in the configuration of the experiment.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://aksw.org/Projects/GERBIL.html",title:"General Entity Annotator Benchmarking framework",target:"_blank",rel:"noopener noreferrer"}},[t._v("GERBIL"),a("OutboundLink")],1),t._v(", developed by "),a("a",{attrs:{href:"http://aksw.org/About.html",title:"Agile Knowledge Engineering and Semantic Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("AKSW"),a("OutboundLink")],1),t._v(" is an evaluation platform that is based on the "),a("a",{attrs:{href:"https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/40749.pdf",title:"A Framework for Benchmarking Entity-Annotation Systems",target:"_blank",rel:"noopener noreferrer"}},[t._v("BAT framework"),a("OutboundLink")],1),t._v(". It defines a number of standard experiments which may be run for any given EL service. These experiment types determine how strict the evaluation is with respect to measures such as word boundary alignment and also dictates how much responsibility is assigned to the EL service with respect to Entity Recognition, etc. GERBIL hosts 38 evaluation datasets obtained from a variety of different EL challenges. At present it also has hooks for 17 different EL services which may be included in an experiment.")]),t._v(" "),a("p",[t._v("GERBIL may be used to test your own EL system either by downloading the source code and deploying GERBAL locally, or by making your service available on the web and giving GERBIL a link to your API endpoint. The only condition is that your API must accept input and respond with output in "),a("a",{attrs:{href:"http://persistence.uni-leipzig.org/nlp2rdf/",title:"NLP Interchange Formt",target:"_blank",rel:"noopener noreferrer"}},[t._v("NIF"),a("OutboundLink")],1),t._v(" format. It is also possible to upload your own evaluation dataset if you would like to test these services on your own content. Note the dataset must also be in NIF format. The "),a("a",{attrs:{href:"http://apps.yovisto.com/labs/ner-benchmarks/data/dbpedia-spotlight-nif.ttl",title:"GERBIL DBpedia Spotlight Dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("DBpedia Spotlight evaluation dataset"),a("OutboundLink")],1),t._v(" is a good example of how to structure your content.")]),t._v(" "),a("p",[t._v("GERBIL does have a number of shortcomings, the most notable of which are:")]),t._v(" "),a("ol",[a("li",[t._v("There is no way to view the annotations returned by each system you test. These are handled internally by GERBIL and then discarded. This can make it difficult to determine the source of error with an EL system.")]),t._v(" "),a("li",[t._v("There is no way to observe the candidate list considered for each surface form. This is, of course, a standard problem with any third party EL API, but if one is conducting a detailed investigation into the performance of an EL system, it is important to know if the source of error was the EL algorithm itself, or the candidate retrieval process which failed to identify the correct referent as a candidate. This was listed as an important consideration by "),a("a",{attrs:{href:"http://benhachey.info/pubs/hachey-aij12-evaluating.pdf",title:"Evaluating Entity Linking with Wikipedia",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hachey et al"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("Nevertheless, GERBIL is an excellent resource for standardising how EL systems are tested and compared. It is also a good starting point for anyone new to Entity Linking as it contains links to a wide variety of EL resources. For more information, see the research paper by "),a("a",{attrs:{href:"http://svn.aksw.org/papers/2015/WWW_GERBIL/public.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Usbeck]"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("p",[t._v("[Hoffart] Johannes Hoffart, Mohamed Amir Yosef, Ilaria Bordino, Hagen Fürstenau, Manfred Pinkal, Marc Spaniol, Bilyana Taneva, Stefan Thater, and Gerhard Weikum. Robust Disambiguation of Named Entities in Text. EMNLP 2011. http://www.aclweb.org/anthology/D11-1072")]),t._v(" "),a("p",[t._v("[CoNLL] Erik F Tjong Kim Sang and Fien De Meulder. Introduction to the CoNLL-2003 Shared Task: Language-Independent Named Entity Recognition. CoNLL 2003. http://www.aclweb.org/anthology/W03-0419.pdf")]),t._v(" "),a("p",[t._v("[Usbeck] Usbeck et al. GERBIL - General Entity Annotator Benchmarking Framework. WWW 2015. http://svn.aksw.org/papers/2015/WWW_GERBIL/public.pdf")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/"}},[t._v("Go back to the README")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
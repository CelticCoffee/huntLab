$(document).ready(function() {



  function journalArticle (id, myLink, myTitle, myAuthor, journalName) {
    this.id = id;
    this.myLink = myLink;
    this.myTitle = myTitle;
    this.myAuthor = myAuthor;
    this.journalName = journalName;
  }

  var jA47 = new journalArticle( 'jA47', 'http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0108392','In Silico, Experimental, Mechanistic Model for Extended-Release Felodipine Disposition Exhibiting Complex Absorption and a Highly Variable Food Interaction', 'S.H.J. Kim, A.J. Jackson, C.A. Hunt  ', ' PLoS ONE 9(9):e108392, (2014)');

  var jA46 = new journalArticle('jA46', 'http://bmcsystbiol.biomedcentral.com/articles/10.1186/s12918-014-0095-1', 'Toward modular biological models: defining analog modules based on referent physiological mechanisms.', 'B.K. Petersen, G.E.P. Ropella, C.A. Hunt.', 'BMC Systems Biology 8(95) (2014).');

  var jA45 = new journalArticle('jA45', 'http://onlinelibrary.wiley.com/doi/10.1002/wsbm.1270/full', 'Tuneable resolution as a systems biology approach for multi-scale, multi-compartment computational models.', 'D.E. Kirschner, C.A. Hunt, S. Marino, M. Fallahi-Sichani, J.J. Linderman.', 'Wiley Interdisciplinary Reviews: Systems Biology and Medicine 6(4):289-309 (2014).');

  var jA44 = new journalArticle('jA44', 'http://onlinelibrary.wiley.com/doi/10.1002/wsbm.1222/full', 'Agent-based modeling&#58; a systematic assessment of use cases and requirements for enhancing pharmaceutical research and development productivity.', 'C.A. Hunt, R.C. Kennedy, S.H.J. Kim, G.E.P. Ropella.', 'Wiley Interdisciplinary Reviews: Systems Biology and Medicine 5(4):461-480 (2013).');

  var jA43 = new journalArticle('jA43', 'http://www.igi-global.com/article/falsifying-enzyme-induction-mechanism-within/72718', 'Falsifying an Enzyme Induction Mechanism within a Validated, Multiscale Liver Model.', '  G.E.P. Ropella, R.C. Kennedy, C.A. Hunt.', 'International Journal of Agent Technologies and Systems 4(3):1-14 (2012).');

  var jA42 = new journalArticle('jA42', 'http://www.tbiomed.com/content/9/1/39', 'Individualized, discrete event, simulations provide insight into inter- and intra-subject variability of extended-release, drug products.','S.H.J. Kim, A.J. Jackson, R. Hur, C.A. Hunt.', 'Theor Biol Med Model 9:39 (2012).');

  var jA41 = new journalArticle('jA41', 'http://www.tbiomed.com/content/8/1/35', 'Relational Grounding Facilitates Development of Scientifically Useful Multiscale Models.', 'C.A. Hunt, G.E.P. Ropella, T.N. Lam, A.D. Gewitz.', 'Theor Biol Med Model 8:35 (2011).');

  var jA40 = new journalArticle('jA40', 'http://dmd.aspetjournals.org/content/early/2011/07/18/dmd.111.038703.abstract', 'Enabling Clearance Predictions to Emerge from In Silico Actions of Quasi-autonomous Hepatocyte Components.', '<a href="doc/publications/Sheikh-Bahaei_DMD_2011.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy) S. Sheikh-Bahaei, C.A. Hunt.', 'Drug Metabolism and Disposition 39:1910-1920 (2011).');

  var jA39 = new journalArticle('jA39', 'http://dx.doi.org/10.1371/journal.pcbi.1002030', 'MDCK Cystogenesis Driven by Cell Stabilization within Computational Analogues.','J.A. Engelberg, A. Datta, K.E. Mostov, C.A. Hunt.','PLoS Comput Biol 7(4): e1002030 (2011).');

  var jA38 = new journalArticle ('jA38', 'http://onlinelibrary.wiley.com/doi/10.1002/ddr.20412/full', 'Moving Beyond In Silico Tools to In Silico Science in Support of Drug Development Research.', '<a href="doc/publications/Hunt_DDR_2010.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy) C.A. Hunt, G.E.P. Ropella.', 'Drug Development Research 72(2):153-161 (2011).' );


  var jA37 = new journalArticle('jA37', 'http://www.biomedcentral.com/1752-0509/4/168', 'Cloud Computing and Validation of Expandable In Silico Livers.','G.E.P. Ropella, C.A. Hunt.', 'BMC Systems Biology 4:168 (2010).');

  var jA36 = new journalArticle('jA36', 'http://www.igi-global.com/article/agent-directed-tracing-multi-scale/45907', 'Agent-Directed Tracing of Multi-Scale Drug Disposition Events within Normal and Diseased In Silico Livers.', '<a href="doc/publications/Kim_IJATS_2010.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy) S.H.J. Kim, S. Park, G.E.P. Ropella, C.A. Hunt.', 'International Journal of Agent Technologies and Systems 2(3):1-19 (2010).');

  var jA35 = new journalArticle('jA35', 'http://dx.doi.org/10.1016/j.jtbi.2010.06.011', 'Computational Experiments Reveal Plausible Mechanisms for Changing Patterns of Hepatic Zonation of Xenobiotic Clearance and Hepatotoxicity.','<a href="doc/publications/Sheikh-Bahaei_JTB_2010.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy) S. Sheikh-Bahaei, J.J. Maher, C.A. Hunt. &#32;  &#42;This paper is recommended by Faculty of 1000 Biology&#32;&#42;', 'J Theor Biol 265(4)&#58;718-733 (2010).');

  var jA34 = new journalArticle('jA34', 'http://dx.doi.org/10.1124/jpet.110.168526', 'Tracing Multiscale Mechanisms of Drug Disposition in Normal and Diseased Livers.','S. Park, S.H. Kim, G.E. Ropella, M.S. Roberts, C.A. Hunt.','J Pharmacol Exp Ther 334(1):124-136 (2010).');

  var jA33 = new journalArticle('jA33', 'http://dx.doi.org/10.1371/journal.pcbi.1000681', 'Identifying the rules of engagement enabling leukocyte rolling, activation, and adhesion.','J. Tang, C.A. Hunt.','PLoS Comput Biol 6(2):e1000681 (2010).');

  var jA32 = new journalArticle('jA32', 'http://dx.doi.org/10.1098/rsif.2010.0041', 'Simulation of lung alveolar epithelial wound healing in vitro.','S.H.J. Kim, M.A. Matthay, K. Mostov, C.A. Hunt.','J R Soc Interface 7:1157-1170 (2010).');

  var jA31 = new journalArticle('jA31', 'http://dx.doi.org/10.1124/jpet.109.160739', 'Mechanistic insight from in silico pharmacokinetic experiments: roles of P-glycoprotein, Cyp3A4 enzymes, and microenvironments.','T.N. Lam, C.A. Hunt.','J Pharmacol Exp Ther 332(2):398-412 (2010).');

  var jA30 = new journalArticle('jA30', 'http://dx.doi.org/10.1186/1752-0509-3-122', 'A Computational Approach to Resolve Cell Level Contributions to Early Glandular Epithelial Cancer Progression.', 'S.H.J. Kim, J. Debnath, K. Mostov, S. Park, C.A. Hunt.','BMC Systems Biology 3(1):122 (2009).');

  var jA29 = new journalArticle('jA29', 'http://www.ncbi.nlm.nih.gov/pubmed/19756975', 'At the Biological Modeling and Simulation Frontier.','C.A. Hunt, G.E. Ropella, T.N. Lam, J. Tang, S.H. Kim, J.A. Engelberg, S. Sheikh-Bahaei.','Pharm Res 26(11): 2369-2400 (2009).');

  var jA28 = new journalArticle('jA28', 'http://dx.doi.org/10.1186/1742-4682-6-8', 'Computational Investigation of Epithelial Cell Dynamic Phenotype In Vitro.','S.H.J. Kim, S. Park, K. Mostov, J. Debnath, and C.A. Hunt.','Theoretical Biology and Medical Modelling. 6:8 (2009).');

  var jA27 = new journalArticle('jA27', 'http://www.ijics.org/', 'Understanding the Role of Liver Zonation in Toxin Elimination.','S. Sheikh-Bahaei, S.H.J. Kim, S. Sheikhbahaei, and C.A. Hunt.','  The International Journal of Intelligent Controls and Systems 14(1): 33-40 (2009).');

  var jA26 = new journalArticle('jA26', 'http://www.ijics.org/', 'Multi-Agent Simulation of Self-Organizing Behaviors of Alveolar Cells In Vitro.','S.H.J. Kim, S. Sheikh-Bahaei, and C.A. Hunt.','The International Journal of Intelligent Controls and Systems 14(1): 41-50 (2009).');

  var jA25 = new journalArticle('jA25', 'http://dx.doi.org/10.1371/journal.pone.0004819', 'A Computational Approach to Understand In Vitro Alveolar Morphogenesis.','S.H.J. Kim, W. Yu, K. Mostov, M.A. Matthay, and C.A. Hunt.','PLoS ONE 4(3): e4819 (2009).'
  );
  var jA24 = new journalArticle('jA24', 'http://dx.doi.org/10.1124/dmd.108.023820', 'Discovering plausible mechanistic details of hepatic drug interactions.', 'T.N. Lam and C.A. Hunt.','Drug Metab Dispos 37(1):237-246 (2009).');

  var jA23 = new journalArticle('jA23', 'http://dx.doi.org/10.1124/jpet.108.142497', 'Computational strategies unravel and trace how liver disease changes hepatic drug disposition.','S. Park, G.E. Ropella, S.H. Kim, M.S. Roberts, and C.A. Hunt.','J Pharmacol Exp Therap 328(1):294-305 (2009).');
  var jA22 = new journalArticle('jA22', 'http://dx.doi.org/10.1186/1752-0509-2-110', 'Essential operating principles for tumor spheroid growth.','J.A. Engelberg, G.E. Repolla, C.A. Hunt.','BMC Syst Biol 2:110 (2008).');

  var jA21 = new journalArticle('jA21', 'http://dx.doi.org/10.1002/cplx.20253', 'Evaluating an Hepatic Enzyme Induction Mechanism through Coarse- and Fine-Grained Measurements of an In Silico Liver.','G.E. Ropella, S. Park, and C.A. Hunt.','Complexity. 14(6):28-34 (2008).');

  var jA20 = new journalArticle('jA20', 'http://www.nature.com/nbt/journal/v26/n7/full/nbt0708-737.html', 'Dichotomies Between Computational and Mathematical Models.','C.A. Hunt, G.E. Ropella, S. Park, and J. Engelberg.','  Nat Biotechnol 26:737-8 (2008).');

  var jA19 = new journalArticle('jA19', 'http://dx.doi.org/10.1124/dmd.107.020164','In Silico Methods for Unraveling the Mechanistic Complexities of Intestinal Absorption: Metabolism–Efflux Transport Interactions.','Lana X. Garmire and C.A. Hunt.','Drug Metab Dispos 36: 1414-24 (2008).');

  var jA18 = new journalArticle('jA18', 'http://dx.doi.org/10.1007/s10956-008-9106-6', 'New Simulation Methods to Facilitate Achieving a Mechanistic Understanding of Basic Pharmacology Principles in the Classroom.','A. Grover, T.N. Lam, and C.A. Hunt.','J Scie Ed Technol 17: 366-72 (2008).');
  var jA17 = new journalArticle('jA17', 'http://dx.doi.org/10.1124/dmd.107.019067', 'Predictions of Hepatic Disposition Properties Using a Mechanistically Realistic, Physiologically Based Model.  ', 'L. Yan, S. Sheihk-Bahaei, S. Park, G.E. Ropella, and C.A. Hunt.',' Drug Metab Dispos 36(4): 759-768 (2008). (Featured Article).');

  var jA16 = new journalArticle('jA16', '','Modeling and Simulation of Hepatic Drug Disposition Using a Physiologically Based, Multi-agent In Silico Liver.','L. Yan, G.E. Ropella, S. Park, M.S. Roberts, and C.A. Hunt.','Pharm Res 25: 1023-36 (2008).')

  var jA15 = new journalArticle('jA15', 'http://dx.doi.org/10.1016/j.jconrel.2007.09.007', 'Synthetic Nano-LDL with Paclitaxel Oleate as a Targeted Drug Delivery Vehicle for Glioblastoma Multiforme.','M. Nikanjam, A.R. Gibbs, C.A. Hunt, T.F. Budinger, and T.M. Forte.','J Cont Release 24: 163-71 (2007).');
  var jA14 = new journalArticle('jA14', 'http://dx.doi.org/10.1007/s11095-007-9391-4', 'An In Silico Transwell Device for the Study of Drug Transport and Drug-Drug Interactions.',' L.X. Garmire, D.G. Garmire, and C.A. Hunt.','  Pharm Res 24: 2171-86 (2007) (Featured Article).');
  var jA13 = new journalArticle('jA13', 'http://dx.doi.org/10.1016/j.jcrc.2006.12.011', 'Challenges and rewards on the road to translational systems biology in acute illness&#58; four case reports from interdisciplinary teams.','  G. An, C.A. Hunt, G. Clermont, E. Neugebauer, and Y Vodovotz.',' J Crit Care 22:169-75 (2007).');
  var jA12 = new journalArticle('jA12','http://dx.doi.org/10.1186/1752-0509-1-14', 'Dynamics of in Silico Leukocyte Rolling, Activation, and Adhesion.','J. Tang, K.F. Ley, and C.A. Hunt.','BMC Systems Biology 1: 14 (2007).' );
  var jA11 = new journalArticle('jA11','http://dx.doi.org/10.1091/mbc.E06-11-1052', 'Formation of cysts by alveolar type II cells in three-dimensional culture reveals a novel mechanism for epithelial morphogenesis.','W. Yu, X. Fang, A. Ewald, K. Wong, C.A. Hunt, Z. Werb, M.A. Matthay, and K. Mostov.',' Mol Biol Cell 18(5): 1693-700 (2007).' );
  var jA10 = new journalArticle('jA10','http://dx.doi.org/10.1177/0037549706075479', 'Cost-Based Partitioning For Distributed and Parallel Simulation of Decomposable Multiscale Constructive Models.','  S. Park, C.A. Hunt, and B.P. Zeigler.','  Simulation 82(12): 809-26 (2006).' );
  var jA9 = new journalArticle('jA9','http://dx.doi.org/10.1007/s10928-006-9031-3', 'Physiologically Based Synthetic Models of Hepatic Disposition.','C.A. Hunt, G.E. Ropella, L. Yan, D.Y. Hung, and M.S. Roberts.','J Pharmacokin Pharmacodyn 33(6): 737-72 (2006).' );
  var jA8 = new journalArticle('jA8','http://dx.doi.org/10.1371/journal.pcbi.0020129', 'Simulating Properties of In Vitro Epithelial Cell Morphogenesis.','  M.R. Grant, K.E. Mostov, T.D. Tlsty, and C.A. Hunt. ',' PLoS Computational Biology 2(10)&#58; e129, 1193-1209 (2006).' );
  var jA7 = new journalArticle('jA7','http://dx.doi.org/10.1007/11885191_20', 'An In Silico Analogue of In Vitro Systems Used to Study Epithelial Cell Morphogenesis.','  M.R. Grant and C.A. Hunt. ',' In: C. Priami (Ed.): CMSB 2006, LNCS 4210: 285-97 (2006).' );
  var jA6 = new journalArticle('jA6','http://dx.doi.org/10.1007/s11095-006-9505-4', 'Mechanistic study of the interplay of intestinal transport and metabolism using the synthetic modeling method.','<a href="doc/publications/Liu_PharmRes_v23p493_2006.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy) Y. Liu and C. A. Hunt.', 'Pharm Res 23(3): 493-505 (2006).');
  var jA5 = new journalArticle('jA5','http://dx.doi.org/10.1016/j.biosystems.2005.06.008', 'Studies of Intestinal Drug Transport Using an In Silico Epithelio-Mimetic Device.','<a href="doc/publications/Liu_Biosystems_v82p154_2005.pdf" target="_blank"><img src="img/pdf_icon.gif"></a> (author copy)&#32;&#32;Y. Liu and C.A. Hunt.','Biosystems 82(2): 154-167 (2005).');
  var jA4 = new journalArticle('jA4','http://www.springerlink.com/content/tqbqkf0124jg4hmk/', 'Biomimetic in silico devices.','C.A. Hunt, G.E. Ropella, M.S. Roberts, L. Yan.  In: V. Danos and V. Schachter','(Eds.): CMBS 2004, LNCS 3082: 35-43 (2005).' );
  var jA3 = new journalArticle('jA3','http://dx.doi.org/10.1016/j.brainresrev.2005.03.002', 'Glucose transport to the brain: A systems model.','A.A. Qutub and C.A. Hunt.','Brain Research Rev 49(3): 595-617 (2005).' );
  var jA2 = new journalArticle('jA2','http://dx.doi.org/10.1016/j.jocn.2003.05.008', 'Plasticity of Gene Expression in Injured Human Dorsal Root Ganglia Revealed by GeneChip Oligonucleotide Microarrays.','D. Rabert, Y. Xiao, Y. Yiangou, D. Kreder, L. Sangameswaran, M.R. Segal, C.A. Hunt, R. Birch, P. Anand.',' J Clin Neurosci 11(3): 289-99 (2004).' );
  var jA1 = new journalArticle('jA1','http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.1.2664', 'Foundations for Extended Life Cycle Biological Models.','<a href="doc/publications/Ropella_UCITR_2003.pdf" target="_blank"><img src="img/pdf_icon.gif"></a>  G. Ropella, L. Yan, C.A. Hunt (2003).',' Internal Technical Report.' );


  var journalArray = [jA47, jA46, jA45, jA44, jA43, jA42, jA41, jA40, jA39, jA38, jA37, jA36, jA35, jA34, jA33, jA32, jA31, jA30, jA29, jA28, jA27, jA26, jA25, jA24, jA23, jA22, jA21, jA20, jA19, jA18, jA17, jA16, jA15, jA14, jA13, jA12, jA11, jA10, jA9, jA8, jA7, jA6, jA5, jA4, jA3, jA2, jA1];

  for (var i = 0; i < journalArray.length; i++) {
    $('<li class="journalEntry"><a href="' + journalArray[i].myLink + '" + target="blank" class="title">' + journalArray[i].myTitle + '<br>' +  '</a>' +  '<p class="author">' + journalArray[i].myAuthor + '</p>' +   '<p class="journal">'  + journalArray[i].journalName +  '</p>' + '</li>' ).appendTo('.peerReviewed');
  }






  function peerArticle (id, myLink, myTitle, myAuthor, sourceName) {
    this.id = id;
    this.myLink = myLink;
    this.myTitle = myTitle;
    this.myAuthor = myAuthor;
    this.sourceName = sourceName;

  }

  var pR52 = new peerArticle('pR52', 'doc/peerDoc/GMU-CS-TR-2013-9.pdf', 'Future MASON Directions&#58; Community Recommendations.','N. Payette, M. Bujorianu, G. Ropella et al.',
  'Report of the 2013 MASON NSF Workshop, George Mason University Campus, Fairfax, VA, USA, June 15-16.');

  var pR51 = new peerArticle('pR51', 'doc/peerDoc/SEDEManuscript20Jun14.pdf', 'Towards Mechanistically Explanatory Biomimetic Analogs for Fracture Healing.','M. Marmor, C. Bahney, and C.A. Hunt.','Forthcoming in The Proceedings of the ISCA 27th International Conference on Computers and Their Applications in Industry and Engineering (CAINE-2014), New Orleans, LA, USA, October 13-15.');

  var pR50 = new peerArticle('pR50', 'doc/peerDoc/FinalSSCManuscript15May14authCopy.pdf', 'Mechanistic Agent-based Damage and Repair Models as Hypotheses for Patterns of Necrosis Caused by Drug Induced Liver Injury.',' A.K. Smith, G.E.P. Ropella, N. Kaplowitz, M. Ookhtens, C.A. Hunt.','  In Proceedings of the Summer Simulation Multiconference 2014 (SummerSim &#39;14), The Society for Modeling and Simulation International (SCS), Monterey, CA.');

  var pR49 = new peerArticle('pR49', 'doc/peerDoc/Ropella_ADS2012.pdf', 'Zonation of Drug-induced, Hepatic Enzyme Induction&#58; Falsifying Fine Grained Mechanisms within a Validated, Multiscale In Silico Liver.',' G.E.P. Ropella, C.A. Hunt.','  Spring Simulation Multiconference 2012, Agent-Directed Simulation Symposium (ADS&#39;12), The Society for Modeling and Simulation International, Orlando, FL.');

  var pR48 = new peerArticle('pR48', 'doc/peerDoc/Yilmaz_SCSC2011.pdf', 'Towards Simulation-based Robust Computational Scientific Discovery Systems.','L. Yilmaz, T. Oren, C.A. Hunt.',' In Proceedings of the Summer Computer Simulation Conference. pp. 75-81, June 26-30, 2011, Hague, Netherlands.');

  var pR47 = new peerArticle('pR47', 'doc/peerDoc/Hunt_SyntheticMethodsAuthCopy.pdf','Modeling and Simulation: Synthetic Models and Methods.','  C.A. Hunt, A.D. Gewitz, T.N. Lam.','In&#58; Encyclopedia of Systems Biology (W. Dubitzky, O. Wolkenhauer, K.H. Cho, H. Yokota, Eds.), Springer, November 5, 2011 (ID: 00569)');

  var pR46 = new peerArticle('pR46', 'http://www.springerlink.com/content/r2731475w7626211', 'Advanced Concepts and Generative Simulation Formalisms for Creative Discovery Systems Engineering.','L. Yilmaz, C.A. Hunt.','  In&#58; Intelligent-Based Systems Engineering ISRL 10 (A. Tolk and L.C. Jain, eds.), Ch. 9, pp.233-258 (2011).');

  var pR45 = new peerArticle('pR45', 'doc/peerDoc/Kim_ADS2011.pdf', 'Composite Cell Agent Model of Epithelial Culture In Vitro.',' S.H.J. Kim, C.A. Hunt.','  Spring Simulation Multiconference 2011, Agent-Directed Simulation Symposium (ADS&#39;11), The Society for Modeling and Simulation International, Boston, MA.  Kim_ADS2011.pdf');
  var pR44 = new peerArticle('pR44', 'doc/peerDoc/Engelberg_ADS2011.pdf', 'A Robust In Silico Analogue of MDCK Cystogenesis Mimics Growth in Multiple Culture Conditions.',' J. A. Engelberg, A. Datta, K. E. Mostov, C. A. Hunt.','  Spring Simulation Multiconference 2011, Agent-Direction Simulation Symposium (ADS&#39;11), The Society of Modeling and Simulation International, Boston, MA.');
  var pR43 = new peerArticle('pR43', 'https://www.novapublishers.com/catalog/product_info.php?products_id=15561', 'In Silico Bioreactors for the Computer-Aided Design of Tissue Engineering Applications.','F. Consolo, L. Gaetano, G. Benedetto, C.A. Hunt, U. Morbiducci, F.M. Montevecchi.','  In: Computational Engineering: Design, Development and Applications (J.E. Browning and A.K. McMann, eds.), in press (2011).');
  var pR42 = new peerArticle('pR42', 'doc/peerDoc/Sheikh-Bahaei_SEDE2010.pdf', 'Predicting Human Hepatic Clearance Using Hypernet Neural Network.',' S. Sheikh-Bahaei, K.A. Ali, S.R. Bera, C.A. Hunt.','  19th International Conference on Software Engineering and Data Engineering (SEDE-2010), San Francisco, CA, June 16-18, 2010, pp. 355-359 (ISBN&#58; 978-1-880843-77-2).');
  var pR41 = new peerArticle('pR41', 'doc/peerDoc/Kim_ADS2010.pdf', 'Agent-Based Simulation of Drug Disposition in Cirrhotic Liver.',' S. H. J. Kim, S. Park, G. E. P. Ropella, and C. A. Hunt.','  Spring Simulation Multiconference 2010, Agent-Directed Simulation Symposium (ADS&#39;10), The Society for Modeling and Simulation International, San Diego, CA.');
  var pR40 = new peerArticle('pR40', 'doc/peerDoc/Tang_CAINE2009.pdf', 'In Silico White Blood Cell: A Synthetic Model of Leukocyte Rolling, Activation, and Adhesion During Inflammation.','  J. Tang and C.A. Hunt.','  The Proceedings of the ISCA 22nd International Conference on Computers and Their Applications in Industry and Engineering (CAINE-2009), San Francisco, CA, USA, November 4-6, 2009, 225-230.');
  var pR39 = new peerArticle('pR39', 'doc/peerDoc/Kim_ADS2009.pdf', 'Agent-Based Modeling of Alveolar Type II Cyst Formation In Vitro.','  S.H.J. Kim, S. Sheikh-Bahaei, and C.A. Hunt. ',' Spring Simulation Multiconference 2009, Agent-Directed Simulation Symposium (ADS&#39;09), The Society for Modeling and Simulation International, San Diago, CA.');
  var pR38 = new peerArticle('pR38', 'doc/peerDoc/Sheikh-Bahaei_ADS2009.pdf', 'Multi-Agent Based Modeling of Liver Detoxification.','  S. Sheikh-Bahaei, S.H.J. Kim, and C.A. Hunt.','  Spring Simulation Multiconference 2009, Agent-Directed Simulation Symposium (ADS&#39;09), The Society for Modeling and Simulation International, San Diago, CA.');
  var pR37 = new peerArticle('pR37', 'doc/peerDoc/Yilmaz_WSC2008.pdf', 'Generative Parallax Simulation: Toward M&S Formalisms for Creative Problem Solving. ',' L. Yilmaz, C.A. Hunt.  In: S.J. Mason, R.R. Hill, L. Moench, O. Rose,',' eds., Proceedings of the 2008 Winter Simulation Conference, Miami, FL, Dec. 7-10, 2008.');
  var pR36 = new peerArticle('pR36', 'doc/peerDoc/Engelberg_IEEE2008.pdf', 'In Silico Simulation of Epithelial Cell Tubulogenesis.','  J.A. Engelberg, M. Kim, K.E. Mostov, and C.A. Hunt,',' in Proceedings of the 2008 IEEE Annual International Conference of the IEEE Engineering in the Medicine and Biology Society, pp 1036-39, IEEE Press, Piscataway, NJ.');
  var pR35 = new peerArticle('pR35', 'doc/peerDoc/Hunt_IEEE2008.pdf', 'Using an In Silico Liver to Evaluate a Hepatic Enzyme Induction Mechanism. ',' C.A. Hunt and G.E. Ropella,',' in Proceedings of the 2008 IEEE Annual International Conference of the IEEE Engineering in the Medicine and Biology Society, pp 2415-18, IEEE Press, Piscataway, NJ.');
  var pR34 = new peerArticle('pR34', 'doc/peerDoc/Lam_IEEE2008.pdf', 'Mechanistic Simulations Explain Paradoxical Saquinavir Metabolism During In Vitro Vectorial Transport Study.','  T.N. Lam TN and C.A. Hunt,',' in Proceedings of the 2008 IEEE Annual International Conference of the IEEE Engineering in the Medicine and Biology Society, pp 5462-65, IEEE Press, Piscataway, NJ.');
  var pR33 = new peerArticle('pR33', 'doc/peerDoc/Tang_ADS2008.pdf', 'In Silico White Blood Cell: Mechanisms Underlying Leukocyte Rolling and Adhesion during Inflammation. ',' Jon Tang and C. Anthony Hunt.','  Spring Simulation Multiconference 2008, Agent-Directed Simulation Symposium (ADS&#39;08), The Society for Modeling and Simulation International, San Diago, CA., pp. 170-76 (ISBN: 1-56555-319-5).');
  var pR32 = new peerArticle('pR32', 'doc/peerDoc/Yan_ADS2008.pdf', 'Predicting Hepatic Disposition Properties of Cationic Drugs Using a Physiologically Based, Agent-Oriented In Silico Liver. ',' Li Yan, Sunwoo Park, Shahab Sheikh-Bahaei, Glen E. P. Ropella, and C. Anthony Hunt. ',' Spring Simulation Multiconference 2008, Agent-Directed Simulation Symposium (ADS&#39;08), The Society for Modeling and Simulation International, San Diago, CA., pp. 162-69 (ISBN: 1-56555-319-5).');
  var pR31 = new peerArticle('pR31', 'doc/peerDoc/Hunt_AMIA2008.pdf', 'A Framework and Mechanistically Focused, In Silico Method for Enabling Rational Translational Research. ',' C. Anthony Hunt, Sergio Baranzini, Michael A. Matthay, and Sunwoo Park.','  2008 AMIA Summit on Translational Bioinformatics, San Francisco, CA, March 10-12, 2008.');

  var pR30 = new peerArticle('pR30', 'doc/peerDoc/Hunt_JCC2007.pdf', 'The multiscale in silico liver.','  C. Anthony Hunt, Li Yan, Glen E.P. Ropella, Sunwoo Park, Shahab Sheikh-Bahaei and Michael S. Roberts.','  J Crit Care 22: 348-49, Abstracts for the 2007 International Conference on Complexity in Acute Illness (ICCAI), Long Beach, CA, October 5-7, 2007.  Hunt_JCC2007.pdf');
  var pR29 = new peerArticle('pR29', 'doc/peerDoc/Sheikh-Bahaei_CAINE2007.pdf', 'Parameter Estimation via Analysis of Fuzzy Clusters (PEAF)&#58;An Algorithm to Estimate Parameters of Agent-Based Models.  ','Shahab Sheikh-Bahaei and C. Anthony Hunt.','  In G. Hu, ed., Proc ISCA 20th Intern Conf Comp Appl Ind Engr, ISCA, Cary, NC (ISBN&#58; 978-1-880843-65-9), San Francisco, CA, Novebmer 7-9, 2007.');
  var pR28 = new peerArticle('pR28', 'doc/peerDoc/Kim_CAINE2007.pdf', 'Systems Modeling of Alveolar Morphogenesis In Vitro. ',' Sean H. J. Kim, Sunwoo Park, Wei Yu, Keith E. Mostov, Michael A. Matthay, and C. Anthony Hunt.','  op.cit., 141-4.');
  var pR27 = new peerArticle('pR27', 'doc/peerDoc/Park_CAINE2007_01.pdf', 'Tracking Compounds and Their Interactions within In Silico Liver.  ','Sunwoo Park, Sean H.J. Kim, Glen E.P. Ropella, and C. Anthony Hunt. ',' op.cit., 257-62.  ');
  var pR26 = new peerArticle('pR26', 'doc/peerDoc/Engelberg_CAINE2007.pdf', 'Affects of surface detection on shape and growth of model tumor spheroids.','  Jesse Engelberg, Glen E. P. Ropella, and C. Anthony Hunt.',' op.cit., 53-7.');
  var pR25 = new peerArticle('pR25', 'doc/peerDoc/Park_CAINE2007_02.pdf', 'Simulation Processors and Their Collaboration for DEVS Models Integrated with Universal Coupling Specification.','  Sunwoo Park, Sean H.J. Kim, and C. Anthony Hunt. ',' op.cit., 151-5.  Park_CAINE2007.pdf');
  var pR24 = new peerArticle('pR24', 'doc/peerDoc/Park_ISITC2007.pdf', 'DEVS Peer-to-Peer Protocol for Distributed and Parallel Simulation of Hierarchical and Decomposable DEVS Models.  ','Sunwoo Park, Sean H.J. Kim, C. Anthony Hunt, and Dongsun Park. ',' In Press&#58; Proceedings of the International Symposium on Information Technology Convergence (ISITC), Jeonju, Korea, November 23-24, 2007.');
  var pR23 = new peerArticle('pR23','doc/peerDoc/Sheikh-Bahaei_WSC2006.pdf','Prediction of In Vitro Hepatic Biliary Excretion Using Stochastic Agent-Based Modeling and Fuzzy Clustering.','  Shahab Sheikh-Bahaei and C. Anthony Hunt.','  In&#58;  L. F. Perrone, et al., eds., Proceedings of the 37th conference on Winter Simulation, Monterey, CA, Dec 03 - 06, 1617-24, 2006.');
  var pR22 = new peerArticle('pR22', 'doc/peerDoc/Grant_ICCS2006.pdf', 'Understanding Emergent Biological Behaviors: Agent Based Simulations of In vitro Epithelial Morphogenesis in Multiple Environments. ',' Mark R. Grant, Sean H. J. Kim, and C. Anthony Hunt.  ','In&#58; Proceedings of the Sixth International Conference on Complex Systems, June 25-30, Boston, MA, Ed: A. Minai, D. Braha, Y. Bar-Yam, &#35;42 (2006).');
  var pR21 = new peerArticle('pR21','doc/peerDoc/Grant_CSB2006.pdf','Simulating In Vitro Epithelial Morphogenesis in Multiple Environments.','  Mark R. Grant, Sean H. J. Kim, and C. Anthony Hunt.',' In&#58;  Proc 5th Comp Syst Bioinform Conf (CSB 2006), IEEE Computer Society Press, 381-4 (2006).');
  var pR20 = new peerArticle('pR20', 'doc/peerDoc/Park_SprSim2006.pdf', 'Coupling Permutation and Model Migration Based on Dynamic and Adaptive Coupling Mechanisms. ',' Sunwoo Park and C. Anthony Hunt. ',' In&#58;  Proc 2006 DEVS Symp, Sp Simul Conf, (Huntsville, AL, Apr 2-6), SCS Press, San Diego, CA, 9-15 (2006).');
  var pR19 = new peerArticle('pR19', 'doc/peerDoc/Sheikh-Bahaei_SprSim2006.pdf', 'In Silico Hepatocyte: Agent-based Modeling of the Biliary Excretion of Drugs In Vitro. ',' Shahab Sheikh-Bahaei, Glen E. P. Ropella, and C. Anthony Hunt. ',' In: L. Yilmaz, et al., eds., Proc 2006 Agent-Direc Simul Symp (Huntsville, AL, Apr 3-9), SCS Press, San Diego, CA (ADS&#39;06), 157-163 (2006).');
  var pR18 = new peerArticle('pR18', 'doc/peerDoc/Engelberg_SprSim2006.pdf', 'Agent-Based Simulations of In Vitro Multicellular Tumor Spheroid Growth.',' Engelberg, Jesse A., Ganguli, Suman, and C. Anthony Hunt. ',' op.cit., 141-148.');
  var pR17 = new peerArticle('pR17', 'doc/peerDoc/Nag_HSC2005.pdf', 'Similarity measures and validation in automated modeling. ',' D. A. Nag, Glen E. P. Ropella, and C. A. Hunt. ',' Proceedings&#58;  Huntsville Simulation Conference, Huntsville, AL, October 25-27, 2005.');
  var pR16 = new peerArticle('pR16', 'doc/peerDoc/Sheikh-Bahaei_SEAC2006.pdf', 'Modeling and Simulation of Hepatic Drug Metabolism: In Silico Hepatic Intrinsic Clearance.','  Shahab Sheikh-Bahaei, Glen E. P. Ropella, C. Anthony Hunt,',' in Systems Engineering and Autonomous Control: A Tribute to Professor Mo Jamshidi, ed. Aly El-Osery and Edward Tunstel, TSI, Inc. San Antonio (ISBN&#58;  1-889335-28-2) pp. 137-146 (2006).');
  var pR15 = new peerArticle('pR15', 'doc/peerDoc/Ropella_WMSCI2005.pdf', 'Methodological Considerations of Heuristic Modeling of Biological Systems. ',' Glen E. P. Ropella, C. Anthony Hunt, and Shahab Sheikh-Bahaei. ',' In&#58; Proc 9th World Multi-Conf Systemics, Cybernetics and Informatics, Orlando, FL July 10-13, 2005.');
  var pR14 = new peerArticle('pR14', 'doc/peerDoc/Ropella_ADS2005.pdf', 'Using Heuristic Models to Bridge the Gap Between Analytic and Experimental Models in Biology. ','Glen E. Ropella, C. Anthony Hunt, Dev A. Nag.  In: L. Yilmaz,',' ed., Proc 2005 Agent-Direc Simul Symp (San Diego, CA, Apr 2-8), Simulation Series 37(2), SCS Press, San Diego, CA (ADS&#39;05), 182-190.');
  var pR13 = new peerArticle('pR13', 'doc/peerDoc/Kim_ADS2005.pdf', 'In Silico Modeling of Blood-Brain Barrier: An Agent-Based Simulation of Cerebral Glucose Transport. ',' Sean H.J. Kim, Amina Qutub, C. Anthony Hunt.','  ADS&#39;05, op.cit. 177-81.  ');
  var pR12 = new peerArticle('pR12', 'doc/peerDoc/Sheikh-Bahaei_ADS2005.pdf', 'Agent-Based Simulation of In Vitro Hepatic Drug Metabolism&#58;  In Silico Hepatic Intrinsic Clearance. ','Shahab Sheikh-Bahaei, Glen E. P. Ropella, and C. Anthony Hunt.','  ADS&#39;05, op.cit. 157-163.');
  var pR11 = new peerArticle('pR11', 'doc/peerDoc/Park_ADS2005_01.pdf', 'Generic Model Partitioning with LookAhead k&#58;  A Multi-Scale Partitioning Algorithm for DEVS Biomimetic In Silico Devices.  Sunwoo Park, C. Anthony Hunt, and Bernard P. Zeigler.  ADS&#39;05, op.cit.');
  var pR10 = new peerArticle('pR10', 'doc/peerDoc/Park_ADS2005_02.pdf', 'PISL&#58;  A Large-Scale In Silico Experimental Framework for Agent-Directed Physiological Models. ',' Sunwoo Park, C. Anthony Hunt, and Glen E. P. Ropella. ',' ADS&#39;05, op.cit. 205-210.');
  var pR9 = new peerArticle('pR9', 'doc/peerDoc/Grant_IEEE2004.pdf','Modeling Mammary Gland Morphogenesis as a Reaction-Diffusion Process. ',' M.R. Grant, C.A. Hunt, L. Xia, J.E. Fata, M.J. Bissell.','In&#58;  Proceedings of the 26th Annual International Conference of the IEEE EMBS, San Francisco, CA, USA, Sept. 1-5, 2004, 679-682.');
  var pR8 = new peerArticle('pR8', 'doc/peerDoc/Chen_IEEE2004.pdf', 'An Agent-based Computational Approach for Representing Aspects of In Vitro Multi-cellular Tumor Spheroid Growth. ',' S. Chen, S. Ganguli, C.A. Hunt. ',' IEEE&#39;04, op.cit. 691-694.  ');
  var pR7 = new peerArticle('pR7', 'doc/peerDoc/Liu_IEEE2004.pdf', 'Representing Intestinal Drug Transport In Silico&#58;  An Agent-Oriented Approach. ',' Y. Liu, C.A. Hunt. ',' IEEE&#39;04, op.cit. 770-773.');
  var pR6 = new peerArticle('pR6', 'doc/peerDoc/Wong_IEEE2004.pdf', 'Modeling Transport Kinetics with StarLogo. ',' D.Y. Wong, A. Qutub, C.A. Hunt.','  IEEE&#39;04, op.cit. 845-848.');
  var pR5 = new peerArticle('pR5', 'doc/peerDoc/Xiao_IEEE2004.pdf', 'A Novel Stepwise Normalization Method for Two-Channel cDNA Microarrays. ',' Y. Xiao, C.A. Hunt, M.R. Segal, Y.H. Yang. ',' IEEE&#39;04, op.cit. 2921-2924.');
  var pR4 = new peerArticle('pR4', 'doc/peerDoc/Lin_IEEE2004.pdf', 'Modeling Liver Physiology&#58;  Combining Fractals, Imaging and Animation. ',' D.W. Lin, S. Johnson, C.A. Hunt.','  IEEE&#39;04, op.cit. 3120-3123.');
  var pR3 = new peerArticle('pR3', 'doc/peerDoc/Lam_IEEE2004.pdf', 'Applying Models of Targeted Drug Discovery to Gene Delivery. ',' T.N. Lam, C.A. Hunt. ',' IEEE&#39;04, op.cit. 3535-3538. ');
  var pR2 = new peerArticle('pR2', 'doc/peerDoc/Tang_IEEE2004.pdf', 'Simulating Leukocyte-Venule Interactions - A Novel Agent-Oriented Approach.','  J. Tang, C.A. Hunt, J. Mellein, K. Ley. ',' IEEE&#39;04, op.cit. 4978-4981. ');
  var pR1 = new peerArticle('pR1', 'doc/peerDoc/Ganguli_IEEE2004.pdf', 'The Necessity of a Theory of Biology for Tissue Engineering&#58;  Metabolism-Repair Systems. ',' S. Ganguli, C.A. Hunt. ',' IEEE&#39;04, op.cit. 5031-5034.');


  var peerArray = [pR52, pR51, pR50, pR49, pR48, pR47, pR46, pR45, pR44, pR43, pR42, pR41, pR40, pR39, pR38, pR37, pR36, pR35, pR34, pR33, pR32, pR31, pR30, pR29, pR28, pR27, pR26, pR25, pR24, pR23, pR22, pR21, pR20, pR19, pR18, pR17, pR16, pR15, pR14, pR13, pR12, pR11, pR10, pR9, pR8, pR7, pR6, pR5, pR4, pR3, pR2, pR1];

  for(var j = 0; j < peerArray.length; j++) {
    $('<li class="journalEntry"><a href="' + peerArray[j].myLink + '" + target="blank" class="title">' + peerArray[j].myTitle  + '</a>' + '<p class="author">' + peerArray[j].myAuthor + '</p>' + '<p class="journal">' + peerArray[j].sourceName + '<img src="img/pdf_icon.gif">' + '</p>'  + '</li>').appendTo('.peerProceedings');

}


});

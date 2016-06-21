
console.log('testingJs')

$(document).ready(function() {
  //This opens the different articles//
  $('div.list-group').click(function(){
    $('div.list-group-item-text', this).show('slow');
    console.log(this);
  });

  $('.specialHeader').click(function(){
    $('.specialText').toggle('slow');
  })

  $('.closeArticle').click(function(){
    $('.specialText').toggle('slow');
  })

  $('.secondSpecialHeader').click(function(){
    $('.secondSpecialText').toggle('slow');
  })

  $('.secondCloseArticle').click(function(){
    $('.secondSpecialText').toggle('slow');
  })

  //Alphabet Objects//
  var Dictionary = function Dictionary() {
    this.wordType = {},
    this.word = {},
    this.defOfWord = {}
    this.whatClass = function whatClass(word) {
      var select = this.word.charAt(0);
      return select;
    this.combo = this.wordType + ':' + ' ' + this.word + ':' + ' ' + this.defOfWord;
    }
  };

  //A//

  var abstraction = new Dictionary('abstraction');
  abstraction.wordType = 'n';
  abstraction.word = 'abstraction';
  abstraction.defOfWord = 'a description or representation abstracted from another description or representation.';
  abstraction.combo = abstraction.combo = abstraction.wordType + ':' + ' ' + abstraction.word + ':' + ' ' + abstraction.defOfWord;
  console.log(abstraction.whatClass());


  var abstraction2 = new Dictionary('abstraction');
  abstraction2.wordType = 'v';
  abstraction2.word = 'abstraction';
  abstraction2.defOfWord = 'the process of removing concrete and particular detail from a description or representation. The concrete and particular details removed are left undescribed or unrepresented and subject to inference by the audience.';
  abstraction2.combo = abstraction2.wordType + ':' + ' ' + abstraction2.word + ':' + ' ' + abstraction2.defOfWord;
  console.log(abstraction2.whatClass());


  var actor = new Dictionary('actor');
  actor.wordType = 'n';
  actor.word = 'actor';
  actor.defOfWord = 'an entity identifiable by an observer as a cause of an effect; an entity that performs &#91;a part&#93;; an entity that participates in a process or representation as in a pre-specified script. The general sense is that of an observer identifying an entity that acts or causes things to happen. Technically, such an entity is an OO object with the ability to schedule its own actions.';
  actor.combo = actor.wordType + ':' + ' ' + actor.word + ':' + ' ' + actor.defOfWord;
  console.log(actor.combo);

  var agent = new Dictionary('agent');
  agent.wordType = 'n';
  agent.word = 'agent';
  agent.defOfWord = 'Notes&#58;<ol type = &quot;1&quot; class = alphaLetters><li>The best definition of &quot;agent&quot; in the literature: &quot;An autonomous agent is a system situated within and a part of an environment that senses that environment and acts on it, over time, in pursuit of its own agenda and so as to effect what it senses in the future.&quot; [1] [1] Franklin, S. and Graesser, A. &quot;Is it an Agent, or just a Program?: A Taxonomy for Autonomous Agents&quot; in Intelligent Agents III. Agent Theories, Architectures, and Languages. ECAI&rsquot;96 Workshop (ATAL), Budapest, Hungary, August 12-13, 1996, Proceedings. Müller, Jörg P.; Wooldridge, Michael J.; Jennings, Nicholas R. (Eds.) 1997.</li><br><li>The IE root ag- &quot;to drive, draw, move.&quot; Also the IE root of &quot;axiom&quot;.</li><br><li>The definition of agent-based might seem to present a contradiction because it is ontological; but the definition of &quot;actor&quot; assumes the capability (or actuality) of an actor being observable. Ultimately, however, &quot;identifiability&quot; is an ontological characteristic that doesn&#44;t imply that an observer actually exists. So, there is no contradiction.</li></ol>';
  agent.combo = agent.wordType + ':' + ' ' + agent.word + ':' + ' ' + agent.defOfWord;

  var agentBased = new Dictionary('agentBased');
    agentBased.wordType = 'adj';
    agentBased.word = 'agent&#45;based';
    agentBased.defOfWord = 'something formulated with or built up from agents&#59; a statement whose components are agents or whose salient characteristics arise from agents. Agents in this sense are akin to axioms and assertions.';
    agentBased.combo = agentBased.wordType + ':' + ' ' + agentBased.word + ':' + ' ' + agentBased.defOfWord;

  var agentDirected = new Dictionary('agentDirected');
  agentDirected.wordType = 'adj';
  agentDirected.word = 'agent&#45;directed';
  agentDirected.defOfWord = 'a process or statement guided, constrained, or controlled by an agent. Technically, this is ontological and is agnostic about how a system is viewed or thought about.';
  agentDirected.combo = agentDirected.wordType + ':' + ' ' + agentDirected.word + ':' + ' ' + agentDirected.defOfWord;

  var agentOriented = new Dictionary('agentOriented');
  agentOriented.wordType = 'adj';
  agentOriented.word = 'agent&#45;oriented';
  agentOriented.defOfWord = 'a statement which is easy to understand, interpret, or develop in terms of agents. Technically, this is epistemological and describes the way a system is thought about or understood and is agnostic about the system&#39;s ontological status.';
  agentOriented.combo = agentOriented.wordType + ':' + ' ' + agentOriented.word + ':' + ' ' + agentOriented.defOfWord;


  var algorithm = new Dictionary('algorithm');
  algorithm.wordType = 'n';
  algorithm.word = 'algorithm';
  algorithm.defOfWord = 'a finite set of well-defined actions for accomplishing some task which, given an initial state, will result in a corresponding recognizable end-state.';
  algorithm.combo = algorithm.wordType + ':' + ' ' + algorithm.word + ':' + ' ' + algorithm.defOfWord;

  var analog = new Dictionary('analog');
  analog.wordType= 'n';
  analog.word = 'analog';
  analog.defOfWord = 'anything that is analogous or similar to something else, and that exists and operates in isolation even in the absence of a referent; a system that has aspects and attributes that are similar to those of a referent system; a model implemented in software that, when executed, produces phenomena that mimic those of the model&#39;s referent.';
  analog.combo = analog.wordType + ':' + ' ' + analog.word + ':' + ' ' + analog.defOfWord;

  var applicability = new Dictionary('applicability');
  applicability.wordType= 'n';
  applicability.word = 'applicability';
  applicability.defOfWord = 'capable of being applied. This means that if A can be applied to B, then A has a characteristic that gives evidence of a particular usage relationship to B.';
  applicability.combo = applicability.wordType + ':' + ' ' + applicability.word + ':' + ' ' + applicability.defOfWord;

  var applicable = new Dictionary('applicable');
  applicable.wordType= 'n';
  applicable.word = 'applicable';
  applicable.defOfWord = 'capable of being applied. This means that if A can be applied to B, then A has a characteristic that gives evidence of a particular usage relationship to B.';
  applicable.combo = applicable.wordType + ':' + ' ' + applicable.word + ':' + ' ' + applicable.defOfWord;

  var apply = new Dictionary('apply');
  apply.wordType= 'v';
  apply.word = 'apply';
  apply.defOfWord = 'to put to use; to employ.';
  apply.combo = apply.wordType + ':' + ' ' + apply.word + ':' + ' ' + apply.defOfWord;

  var apply2 = new Dictionary('apply');
  apply2.wordType= 'tv';
  apply2.word = 'apply';
  apply2.defOfWord = 'to have relevance or a valid connection.';
  apply2.combo = apply2.wordType + ':' + ' ' + apply2.word + ':' + ' ' + apply2.defOfWord;

  var assertion = new Dictionary('assertion');
  assertion.wordType= 'n';
  assertion.word = 'assertion';
  assertion.defOfWord = 'a statement that acts as an atomic or composite element of an argument or representation; an emphatic statement; an affirmation; a claim that a given state or situation is the case. The Indo-European root is &quot;ser-&quot; &quot;to line up&quot; or &quot;to arrange.&quot; Assertions carry the connotation that they are well-formed or syntactically correct statements. They also connote a skepticism as to their veracity.';
  assertion.combo = assertion.wordType + ':' + ' ' + assertion.word + ':' + ' ' + assertion.defOfWord;

  var attribute = new Dictionary('attribute');
  attribute.wordType= 'n';
  attribute.word = 'attribute';
  attribute.defOfWord = 'a characteristic or quality, inherent in or ascribed to, someone or something. Syn: property. In computing, an attribute is a named value or relationship that exists for some or all instances of some class and is directly associated with that instance or that class.';
  attribute.combo = attribute.wordType + ':' + ' ' + attribute.word + ':' + ' ' + attribute.defOfWord;

  var attribute2 = new Dictionary('attribute');
  attribute2.wordType= 'v';
  attribute2.word = 'attribute';
  attribute2.defOfWord = 'to regard as a characteristic or quality of a person or thing, including a cause effect relationship. Syn. ascribe, impute.';
  attribute2.combo = attribute2.wordType + ':' + ' ' + attribute2.word + ':' + ' ' + attribute2.defOfWord;

  //B//

  var biomimetic = new Dictionary('biomimetic');
  biomimetic.wordType = 'adj';
  biomimetic.word = 'biomimetic';
  biomimetic.defOfWord = 'measurably resembling multiple aspects of a referent biological system.';
  biomimetic.combo = biomimetic.wordType + ':' + ' ' + biomimetic.word + ':' + ' ' + biomimetic.defOfWord;

  var biomimeticAnalog = new Dictionary('biomimetic analog');
  biomimeticAnalog.wordType = 'n';
  biomimeticAnalog.word = 'biomimetic analog';
  biomimeticAnalog.defOfWord = 'an analog aspiring to emulate aspects (including phenomenal, componential, causal, and organizational) of a referent biological system.';
  biomimeticAnalog.combo = biomimeticAnalog.wordType + ':' + ' ' + biomimeticAnalog.word + ':' + ' ' + biomimeticAnalog.defOfWord;

  var biomimicry = new Dictionary('biomimicry');
  biomimetic.wordType = 'n';
  biomimetic.word = 'biomimicry';
  biomimetic.defOfWord = 'the emulation or imitation of aspects of a referent biological system, usually for a particular scientific or engineering purpose; an instance of being biomimetic.';
  biomimetic.combo = biomimetic.wordType + ':' + ' ' + biomimetic.word + ':' + ' ' + biomimetic.defOfWord;

  var bisimulation = new Dictionary('bisimulation');
  bisimulation.wordType = 'n';
  bisimulation.word = 'bisimulation';
  bisimulation.defOfWord = 'two modules whose state transitions are identical. This is the dual of congruence.';
  bisimulation.combo = bisimulation.wordType + ':' + ' ' + bisimulation.word + ':' + ' ' + bisimulation.defOfWord;

 //C//

  var calibration = new Dictionary('calibration');
  calibration.wordType = 'n';
  calibration.word = 'calibration';
  calibration.defOfWord = 'the confirmation of and/or adjustment to parameters such that standard inputs result in standard outputs.';
  calibration.combo = calibration.wordType + ':' + ' ' + calibration.word + ':' + ' ' + calibration.defOfWord;

  var complex = new Dictionary('complex');
  complex.wordType = 'adj';
  complex.word = 'complex';
  complex.defOfWord = 'consisting of interconnected or interwoven parts; composed of two or more units; involved or intricate. Technically, a complex system has many cause-effect relationships or one in which it is difficult to tease out cause-effect relations.';
  complex.combo = complex.wordType + ':' + ' ' + complex.word + ':' + ' ' + complex.defOfWord;

  var complexity = new Dictionary('complexity');
  complexity.wordType = 'n';
  complexity.word = 'complexity';
  complexity.defOfWord = 'a measure of the number of constituents of a system and their degree of interconnection. Technically, the resource requirements and representation difficulty associated with a model or simulation is a direct function of its complexity. Note&#58; Typically, the complexity increases with the amount of detail, i.e., simulating a model that has many components, and interactions, each described with high resolution is likely to require great resource consumption no matter what simulator is used. Under this assumption, for fixed resource availability, there must be a trade off between scope and resolution in a simulated model.';
  complexity.combo = complexity.wordType + ':' + ' ' + complexity.word + ':' + ' ' + complexity.defOfWord;

  var concrete = new Dictionary('concrete');
  concrete.wordType = 'adj';
  concrete.word = 'concrete';
  concrete.defOfWord = 'embodied in material; something real, actual, or standing for that which so exists : not abstract or ideal; the quality or characteristic of being unique; standing for a particular instance or object.';
  concrete.combo = concrete.wordType + ':' + ' ' + concrete.word + ':' + ' ' + concrete.defOfWord;

  var concurrent = new Dictionary('concurrent');
  concurrent.wordType = 'adj';
  concurrent.word = 'concurrent';
  concurrent.defOfWord = 'operating or acting in conjunction with another; being in accordance; harmonious; contributing to the same event or effect. Technically, a partial ordering where any component can be directly preceded or succeeded by more than one other component. <ol type = &quot;1&quot; class = charlieLetters><li>The gist of the word is to cooperate, to meet, to coincide, to run together.</li><br><li>The order parameter for sequence and concurrency is usually time; but, it doesn&#39;t have to be. It can be any monotonically increasing magnitude.  When the order parameter is not time, sequence and concurrency refer to the dependence of one constituent upon another. For example, components in a data-driven computation will be capable of starting whenever their input is available regardless of any other components that also require the same input data state.</li></ol>';
  concurrent.combo = concurrent.wordType + ':' + ' ' + concurrent.word + ':' + ' ' + concurrent.defOfWord;

  var concurrentSimulation = new Dictionary('concurrent simulation');
  concurrentSimulation.wordType = 'n';
  concurrentSimulation.word = 'concurrent simulation';
  concurrentSimulation.defOfWord ='a simulation in which actions are partially ordered such that some actions are independent and might, in principle, happen at the same time or be executable regardless of the execution of other actions.';
  concurrentSimulation.combo = concurrentSimulation.wordType + ':' + ' ' + concurrentSimulation.word + ':' + ' ' + concurrentSimulation.defOfWord;

  var concurrentSimulator = new Dictionary('concurrent simulator');
  concurrentSimulator.wordType = 'n';
  concurrentSimulator.word = 'concurrent simulator';
  concurrentSimulator.defOfWord ='a simulator that facilitates concurrent simulations.';
  concurrentSimulator.combo = concurrentSimulator.wordType + ':' + ' ' + concurrentSimulator.word + ':' + ' ' + concurrentSimulator.defOfWord;

  var congruence = new Dictionary('congruence');
  congruence.wordType = 'adj';
  congruence.word = 'congruence';
  congruence.defOfWord = 'two modules have identical sets of possible states. This is the dual of bisimulation.';
  congruence.combo = congruence.wordType + ':' + ' ' + congruence.word + ':' + ' ' + congruence.defOfWord;

  var huntConstruct = new Dictionary('construct');
  huntConstruct.wordType = 'v';
  huntConstruct.word = 'construct';
  huntConstruct.defOfWord = 'to form by assembling or combining parts; build.  Notes&#58; Construct literallly parses into &#34;to pile up&#34; or &#34;to spread together&#34;.  The implictaion being that the verb doesn&#39;t assume that the composition is done purposefully.  Construction can be accidental, haphazard, and arbitrary as well as well-planned or thought out.';
  huntConstruct.combo = huntConstruct.wordType + ':' + ' ' + huntConstruct.word + ':' + ' ' + huntConstruct.defOfWord;

  var h2Construct = new Dictionary('construct');
  h2Construct.wordType = 'n';
  h2Construct.word = 'construct';
  h2Construct.defOfWord = 'something formed or constructed from parts; a concrete image or idea.<br>Notes&#58;<br><ol type = &quot;1&quot; class = charlieLetters><li>The word &#34;construct&#34; is usually but not always synonymous with &#34;synthesis&#34;</li><br><li>&#34Construct&#34; carries connotations of both artificially created objects like bridges and naturally occurring objects.  It is often used in absence of a teleological end or without assuming an intelligent designer.  For example, a planet can be constructed via accretion.  This distinguishes its use from that of &#34;synthetic&#34;, which usually assumes artificial origins.</li><br><li>&#34;Construct&#34; often carries connotations of concreteness as in &#34;constructive proof&#34; which requires that an explicit procedure for creating an object be specified.</li>';
  h2Construct.combo = h2Construct.wordType + ':' + ' ' + h2Construct.word + ':' + ' ' + h2Construct.defOfWord;

  var constructiveModel = new Dictionary('constructive model');
  constructiveModel.wordType = 'n';
  constructiveModel.word = 'constructive model';
  constructiveModel.defOfWord = 'a type of constructive proof or argument where the model is built to demonstrate characteristics of the model&#39;s referent. It is axiomatic in that all components of the model are built from a given set of primitives and no outside interaction is allowed.';
  constructiveModel.combo = constructiveModel.wordType + ':' + ' ' + constructiveModel.word + ':' + ' ' + constructiveModel.defOfWord;

  var constructiveProof = new Dictionary('constructive proof');
  constructiveProof.wordType ='n';
  constructiveProof.word = 'constructive proof';
  constructiveProof.defOfWord = 'a method of proof that demonstrates the existence of a mathematical object with certain properties by creating or providing a method for creating such an object.';
  constructiveProof.combo = constructiveProof.wordType + ':' + ' ' + constructiveProof.word + ':' + ' ' + constructiveProof.defOfWord;

  var constructiveSimulation = new Dictionary('constructive simulation');
  constructiveSimulation.wordType ='n';
  constructiveSimulation.word = 'constructive simulation';
  constructiveSimulation.defOfWord = 'an implementation of a model which is composed of primitive building blocks and the behavior of the simulation arises solely from those building blocks and not from outside interference.';
  constructiveSimulation.combo = constructiveSimulation.wordType + ':' + ' ' + constructiveSimulation.word + ':' + ' ' + constructiveSimulation.defOfWord;

  var correctModel = new Dictionary('correct model');
  correctModel.wordType ='n';
  correctModel.word = 'correct model';
  correctModel.defOfWord = 'a model that is valid in every relevant characteristic.';
  correctModel.combo = correctModel.wordType + ':' + ' ' + correctModel.word + ':' + ' ' + correctModel.defOfWord;

  var correctSimulation = new Dictionary('correct simulation');
  correctSimulation.wordType ='n';
  correctSimulation.word = 'correct simulation';
  correctSimulation.defOfWord = 'a simulation that is verifiable in every relevant characteristic.';
  correctSimulation.combo = correctSimulation.wordType + ':' + ' ' + correctSimulation.word + ':' + ' ' + correctSimulation.defOfWord;

  var correctSimulator = new Dictionary('correct simulator');
  correctSimulator.wordType ='n';
  correctSimulator.word = 'correct simulator';
  correctSimulator.defOfWord = 'a simulator that generates correct simulations.';
  correctSimulator.combo = correctSimulator.wordType + ':' + ' ' + correctSimulator.word + ':' + ' ' + correctSimulator.defOfWord;

  var correctness = new Dictionary('correctness');
  correctness.wordType ='n';
  correctness.word = 'correctness';
  correctness.defOfWord = 'The degree to which some thing is free of error.';
  correctness.combo = correctness.wordType + ':' + ' ' + correctness.word + ':' + ' ' + correctness.defOfWord;

  var coSimulation = new Dictionary('co-simulation');
  coSimulation.wordType ='n';
  coSimulation.word = 'co-simulation';
  coSimulation.defOfWord = 'a composition of modules relying on heterogeneous formalisms or computational paradigms. Formally&#58; Co-simulation is a special form of observational congruence or weak bisimulation because in order to hook them together, the outputs of the source module must match, in both states and state transitions, the inputs of the destination module.';
  coSimulation.combo = coSimulation.wordType + ':' + ' ' + coSimulation.word + ':' + ' ' + coSimulation.defOfWord;

  var crossmodelValidity = new Dictionary('crossmodel validity');
  crossmodelValidity.wordType ='n';
  crossmodelValidity.word = 'crossmodel validity';
  crossmodelValidity.defOfWord = 'synonym for validity. Validity assumes two or more models. Sometimes, however, an assumption is made stating that the truth is accessible and one model is more real than another. Crossmodel validity is used to emphasize that two models are being compared rather than comparing one model to a real system.';
  crossmodelValidity.combo = crossmodelValidity.wordType + ':' + ' ' + crossmodelValidity.word + ':' + ' ' + crossmodelValidity.defOfWord;


  //D//

  var derivability = new Dictionary('derivability');
  derivability.wordType = 'n';
  derivability.word = 'derivability';
  derivability.defOfWord = 'the state or degree of being derivable.';
  derivability.combo = derivability.wordType + ':' + ' ' + derivability.word + ':' + ' ' + derivability.defOfWord;

  var derivable = new Dictionary('derivable');
  derivable.wordType = 'adj';
  derivable.word = 'derivable';
  derivable.defOfWord = 'capable of being derived. This means that if C can be derived from A, then C and A have characteristics that give evidence of a particular inheritance relationship from A to C.';
  derivable.combo = derivable.wordType + ':' + ' ' + derivable.word + ':' + ' ' + derivable.defOfWord;

  var derive = new Dictionary('derive');
  derive.wordType = 'v';
  derive.word = 'derive';
  derive.defOfWord = 'to generate a new thing from a source thing; to arrive at by reasoning. Syn&#58; infer.';
  derive.combo = derive.wordType + ':' + ' ' + derive.word + ':' + ' ' + derive.defOfWord;

  var descriptiveModel = new Dictionary('descriptive model');
  descriptiveModel.wordType = 'n';
  descriptiveModel.word = 'descriptive model';
  descriptiveModel.defOfWord = 'a generative model where the mapping between generators &#40;premises&#41; and phenomena &#40;conclusions&#41; is direct and obvious. Technically, a descriptive model is a degenerate or trivial generative model. A table lookup &#40;with no interpolation&#41; for a function is a descriptive model. An over-fitted model is a descriptive model.';
  descriptiveModel.combo = descriptiveModel.wordType + ':' + ' ' + descriptiveModel.word + ':' + ' ' + descriptiveModel.defOfWord;

  var detail = new Dictionary('detail');
  detail.wordType = 'n';
  detail.word = 'detail';
  detail.defOfWord = 'an individual part or item; a particular; a characteristic considered individually and in relation to a whole&#59; a minor or an inconsequential item or aspect&#59; a minutia&#59; a discrete part or portion of a thing. A detail is concretely associated with a thing or situation. It is not abstract.';
  detail.combo = detail.wordType + ':' + ' ' + detail.word + ':' + ' ' + detail.defOfWord;

  var distributedSimulator = new Dictionary('distributed simulator');
  distributedSimulator.wordType = 'n';
  distributedSimulator.word = 'distributed simulator';
  distributedSimulator.defOfWord = 'a simulator that uses multiple components &#40;possibly geographically remote&#41; to execute the actions of a simulation.';
  distributedSimulator.combo = distributedSimulator.wordType + ':' + ' ' + distributedSimulator.word + ':' + ' ' + distributedSimulator.defOfWord;

  //E//

  var emergence = new Dictionary('emergence');
  emergence.wordType = 'n';
  emergence.word = 'emergence';
  emergence.defOfWord = 'a descriptive term for systems that have complex maps between mechanisms and phenomena, where it is not obvious how the properties and characteristics of the mechanisms generate the observed phenomena.';
  emergence.combo = emergence.wordType + ':' + ' ' + emergence.word + ':' + ' ' + emergence.defOfWord;

  var execution = new Dictionary('execution');
  execution.wordType = 'n';
  execution.word = 'execution';
  execution.defOfWord = 'a particular carrying out of a procedure or set of actions. An instance of computational inference.';
  execution.combo = execution.wordType + ':' + ' ' + execution.word + ':' + ' ' + execution.defOfWord;

  var extrapolate = new Dictionary('extrapolate');
  extrapolate.wordType = 'v';
  extrapolate.word = 'extrapolate';
  extrapolate.defOfWord = 'to infer or estimate by extending or projecting known information.';
  extrapolate.combo = extrapolate.wordType + ':' + ' ' + extrapolate.word + ':' + ' ' + extrapolate.defOfWord;

  var extrapolation = new Dictionary('extrapolation');
  extrapolation.wordType = 'n';
  extrapolation.word = 'extrapolation';
  extrapolation.defOfWord = 'a result arrived at through inference from an initial state.';
  extrapolation.combo = extrapolation.wordType + ':' + ' ' + extrapolation.word + ':' + ' ' + extrapolation.defOfWord;

  //F//
  var formalSystem = new Dictionary('formal system');
  formalSystem.wordType = 'n';
  formalSystem.word = 'formal system';
  formalSystem.defOfWord = 'a type of formalism, particularly as defined by&#58;<ol type = &quot;1&quot; class = foxtrotLetters><li>A set of symbols or &quot;undefined terms.&quot;</li><li>A constructive &#40;explicit mechanical&#41; procedure for assembling the symbols into formulae.</li><li>An initial set of formulae, assumed to be true, called axioms.</li><li>A set of inference rules for deriving new formulae from previous formulae.&#42;</li></ol><p class="foxtrotLetters"><br>Technically, formal systems take the form of logical or mathematical inference systems.<br>&#42;Following Gödel, 1934. &quot;On Undecidable Propositions of Formal Mathematical Systems&quot; in &quot;The Undecidable&quot; ed. Davis, Martin.</p>';
  formalSystem.combo = formalSystem.wordType + ':' + ' ' + formalSystem.word + ':' + ' ' + formalSystem.defOfWord;

  var formalism = new Dictionary('formalism');
  formalism.wordType = 'n';
  formalism.word = 'formalism';
  formalism.defOfWord = 'any doctrine emphasizing form and de-emphasizing content where instances of the doctrine manipulate symbols independent of their referents; an instance of such a doctrine.';
  formalism.combo = formalism.wordType + ':' + ' ' + formalism.word + ':' + ' ' + formalism.defOfWord;

  //G//

  var generativeModel = new Dictionary('generative model');
  generativeModel.wordType = 'n';
  generativeModel.word = 'generative model';
  generativeModel.defOfWord = 'a model with some premises that produce &#40;to some extent&#41; unpredictable conclusions in the model&#59; a model that produces data, typically with random variables or by interaction with an outside, independent, process&#59; a constructive model where the systemic phenomena are consequents of the components.';
  generativeModel.combo = generativeModel.wordType + ':' + ' ' + generativeModel.word + ':' + ' ' + generativeModel.defOfWord;

  var granular = new Dictionary('granular');
  granular.wordType = 'adj';
  granular.word = 'granular';
  granular.defOfWord = 'consisting of or appearing to consist of small particles&#59; a composite &#40;non-atomic&#41; thing&#59; a thing that has distinguishable constituents&#59; divisible; &#40;math&#41; an analytic thing.';
  granular.combo = granular.wordType + ':' + ' ' + granular.word + ':' + ' ' + granular.defOfWord;


  var granularity = new Dictionary('granularity');
  granularity.wordType = 'n';
  granularity.word = 'granularity';
  granularity.defOfWord = 'the degree to which a thing is granular.';
  granularity.combo = granularity.wordType + ':' + ' ' + granularity.word + ':' + ' ' + granularity.defOfWord;

  //H//
  var homomorphicModels = new Dictionary('homomorphic models');
  homomorphicModels.wordType = 'n';
  homomorphicModels.word = 'homomorphic models';
  homomorphicModels.defOfWord = '2 or more models such that homomorphisms can be defined between them.';
  homomorphicModels.combo = homomorphicModels.wordType + ':' + ' ' + homomorphicModels.word + ':' + ' ' + homomorphicModels.defOfWord;

  var homomorphism = new Dictionary('homomorphism');
  homomorphism.wordType = 'n';
  homomorphism.word = 'homomorphism';
  homomorphism.defOfWord = 'a morphism exhibiting similarities between the two objects. Technically&#58; Let X and Y be objects such that Cx is a characteristic of X and Cy is a characteristic of Y. A morphism f&#59; X -> Y is a homomorphism if f&#40;Cx&#41; &#61; Cy.';
  homomorphism.combo = homomorphism.wordType + ':' + ' ' + homomorphism.word + ':' + ' ' + homomorphism.defOfWord;

  var hypothesis = new Dictionary('hypothesis');
  hypothesis.wordType = 'n';
  hypothesis.word = 'hypothesis';
  hypothesis.defOfWord = 'a degenerate or incomplete thesis often tentatively asserted in order to reach a desired conclusion; something not proved, but assumed for the purpose of argument, or to account for a fact or an occurrence.';
  hypothesis.combo = hypothesis.wordType + ':' + ' ' + hypothesis.word + ':' + ' ' + hypothesis.defOfWord;

  var hystersis = new Dictionary('hystersis');
  hystersis.wordType = 'n';
  hystersis.word = 'hystersis';
  hystersis.defOfWord = 'the degree to which a system is dependent on its previous states; the sum of all metastable states of a system.';
  hystersis.combo = hystersis.wordType + ':' + ' ' + hystersis.word + ':' + ' ' + hystersis.defOfWord;

  //I//
  var inherit = new Dictionary('inherit');
  inherit.wordType = 'v';
  inherit.word = 'inherit';
  inherit.defOfWord = 'to obtain or receive a characteristic or thing from a predecessor or ancestor.';
  inherit.combo = inherit.wordType + ':' + ' ' + inherit.word + ':' + ' ' + inherit.defOfWord;

  var inscriptionError = new Dictionary('inscription error');
  inscriptionError.wordType = 'n';
  inscriptionError.word = 'inscription error';
  inscriptionError.defOfWord = 'the error of inscribing a set of characteristics into a representation and then observing those characteristics or their direct consequences from the system as an independent empirical discovery or result. Technically, inscription error is the conflation of experimentation &#40;discovering characteristics of a device&#41; with verification &#40;ensuring that a synthetic device does what you designed it to do&#41;.';
  inscriptionError.combo = inscriptionError.wordType + ':' + ' ' + inscriptionError.word + ':' + ' ' + inscriptionError.defOfWord;

  var interaction = new Dictionary('interaction');
  interaction.wordType = 'n';
  interaction.word = 'interaction';
  interaction.defOfWord = 'mutual influence or the reciprocal actions between more than one entity.';
  interaction.combo = interaction.wordType + ':' + ' ' + interaction.word + ':' + ' ' + interaction.defOfWord;

  var interactiveSimulation = new Dictionary('interactive simulation');
  interactiveSimulation.wordType = 'n';
  interactiveSimulation.word = 'interactive simulation';
  interactiveSimulation.defOfWord = 'an implementation of a model whose execution or outcome depends on interaction with the external environment.';
  interactiveSimulation.combo = interactiveSimulation.wordType + ':' + ' ' + interactiveSimulation.word + ':' + ' ' + interactiveSimulation.defOfWord;

  //L//

  var levelOfResolution = new Dictionary('level of resolution');
  levelOfResolution.wordType = 'n';
  levelOfResolution.word = 'level of resolution';
  levelOfResolution.defOfWord = 'the granularity of a resolution; the extent to which a representation shows constituents or details.';
  levelOfResolution.combo = levelOfResolution.wordType + ':' + ' ' + levelOfResolution.word + ':' + ' ' + levelOfResolution.defOfWord;

  //M//

  var measure = new Dictionary('measure');
  measure.wordType = 'n';
  measure.word = 'measure';
  measure.defOfWord = 'dimension, quantity, or capacity as ascertained by comparison with a standard. A distinguishable characteristic of a system that can be quantified. Syn&#59; observable.';
  measure.combo = measure.wordType + ':' + ' ' + measure.word + ':' + ' ' + measure.defOfWord;

  var measurement = new Dictionary('measurement');
  measurement.wordType = 'n';
  measurement.word = 'measurement';
  measurement.defOfWord = 'value exhibited by an observable.';
  measurement.combo = measurement.wordType + ':' + ' ' + measurement.word + ':' + ' ' + measurement.defOfWord;

  var mechanism = new Dictionary('mechanism');
  mechanism.wordType = 'n';
  mechanism.word = 'mechanism';
  mechanism.defOfWord = 'a set of objects and interactions that measurably transforms material.  An analog mechanism has four aspects&#58; &#40;i&#41; phenomenal, &#40;ii&#41; componential &#40;iii&#41; causal, and &#40;iv&#41; organizational. Each aspect is measured differently.  We can measure: 1&#41; how that mechanism is perceived by the systems it affects; 2&#41; how many, or the type of, subcomponents that constitute it; 3&#41; the causal &#40;AKA stimulus-response, data driven&#41; event chains within; and 4&#41; network/graph of relationships amongst subcomponents or events. Each measure provides a different way of looking at, and/or thinking about, an analog mechanism.Each aspect is measured differently. Each measure provides a different way of mapping analog mechanisms to biological counterparts.<br>Adapted from a Darden L (2002) Strategies for Discovering Mechanisms: Schema Instantiation, Modular Subassembly, Forward/Backward Chaining. Phil Sci 69(S3):S354¡©S365.'
  mechanism.combo = mechanism.wordType + ':' + ' ' + mechanism.word + ':' + ' ' + mechanism.defOfWord;

  var model = new Dictionary('model');
  model.wordType = 'n';
  model.word = 'model';
  model.defOfWord = 'a physical, mathematical, or logical representation of a referent system, entity, phenomenon, or process such that a homomorphism can be defined between the representation and the referent. The similarities exhibited by the homomorphism might include but are not limited to behavior or structure.';
  model.combo = model.wordType + ':' + ' ' + model.word + ':' + ' ' + model.defOfWord;

  var modelingFormalism = new Dictionary('modeling formalism');
  modelingFormalism.wordType = 'n';
  modelingFormalism.word = 'modeling formalism';
  modelingFormalism.defOfWord = 'a formalism for expressing models. Specifically, a modeling formalism is a set of symbols and rules that encourage the separation of the symbols from their referent and manipulation of those symbols independent from the referent, but where those symbols have definite unambiguous referents. Notes&#58; All computer models and simulations are formal systems. But, there exist modeling formalisms that are not formal systems. In particular, graphical models, &#40;unimplemented&#41; mathematical equations, etc. are not formal systems because they lack the mechanical procedure for assembling formulae. A mathematical equation can be considered a formula within the larger formal system of mathematics; but, by itself, it is not a formal system. It needs a machine or integrator to execute it. A graphical model is a formula but the machine by which new formulae are created resides in the thing or person doing the drawing.';
  modelingFormalism.combo = modelingFormalism.wordType + ':' + ' ' + modelingFormalism.word + ':' + ' ' + modelingFormalism.defOfWord;

  var morphism = new Dictionary('morphism');
  morphism.wordType = 'n';
  morphism.word = 'morphism';
  morphism.defOfWord = 'an abstract directional relationship between two different objects. Technically: Let X and Y be objects of any kind. Then a morphism f is defined as a relationship from X to Y, denoted by f: X -> Y such that the following operations are defined for the morphism&#59;<br>Domain&#58; X &#61; dom&#40;f&#41;<br>Codomain Y &#61; cod&#40;f&#41;';
  morphism.combo = morphism.wordType + ':' + ' ' + morphism.word + ':' + ' ' + morphism.defOfWord;

  //o//

  var observationalCongruency = new Dictionary('observational congruency');
  observationalCongruency.wordType = 'adj';
  observationalCongruency.word = 'observational congruency';
  observationalCongruency.defOfWord = 'a subset of observable states of one module are identical with a subset of the observable states of another module.';
  observationalCongruency.combo = observationalCongruency.wordType + ':' + ' ' + observationalCongruency.word + ':' + ' ' + observationalCongruency.defOfWord;

  //p//

  var parallel = new Dictionary('parallel');
  parallel.wordType = 'n';
  parallel.word = 'parallel';
  parallel.defOfWord = 'having comparable parts, analogous aspects, or readily recognized similarities&#59; having the same tendency or direction&#59; continuing a resemblance through many particulars&#59; applicable in all essential parts&#59; alike; similar.<br>Notes&#58; The gist of the word is to be alike, to have the same properties or tendencies. ';
  parallel.combo = parallel.wordType + ':' + ' ' + parallel.word + ':' + ' ' + parallel.defOfWord;

  var parallelSimulation = new Dictionary('parallel simulation');
  parallelSimulation.wordType = 'n';
  parallelSimulation.word = 'parallel simulation';
  parallelSimulation.defOfWord = 'a concurrent simulation in which some actions are executed simultaneously.';
  parallelSimulation.combo = parallelSimulation.wordType + ':' + ' ' + parallelSimulation.word + ':' + ' ' + parallelSimulation.defOfWord;

  var parallelSimulator = new Dictionary('parallel simulator');
  parallelSimulator.wordType = 'n';
  parallelSimulator.word = 'parallel simulator';
  parallelSimulator.defOfWord = 'a distributed simulator where the components carry out similar actions.  Notes&#58; The distinction between a parallel simulator and a non-parallel distributed simulator lies in the heterogeneity of the actions performed by the components. Parallelism is directly proportional to the homogeneity of the actions.';
  parallelSimulator.combo = parallelSimulator.wordType + ':' + ' ' + parallelSimulator.word + ':' + ' ' + parallelSimulator.defOfWord;

  var petitioPrincipii = new Dictionary('petitio principii');
  petitioPrincipii.wordType = 'n';
  petitioPrincipii.word = 'petitio principii';
  petitioPrincipii.defOfWord = 'the deductive logical fallacy of inferring a conclusion that is already stated as an assumption&#59; &quot;begging the question&quot;.';
  petitioPrincipii.combo = petitioPrincipii.wordType + ':' + ' ' + petitioPrincipii.word + ':' + ' ' + petitioPrincipii.defOfWord;

  var physiomimetic = new Dictionary('physiomimetic');
  physiomimetic.wordType = 'adj';
  physiomimetic.word = 'physiomimetic';
  physiomimetic.defOfWord = 'measurably resembling multiple aspects of referent physiology.';
  physiomimetic.combo = physiomimetic.wordType + ':' + ' ' + physiomimetic.word + ':' + ' ' + physiomimetic.defOfWord;

  var plectics = new Dictionary('plectics');
  plectics.wordType = 'n';
  plectics.word = 'plectics';
  plectics.defOfWord = 'the study of the separability of a system into constituent parts and the relationships between systemic and constituent phenomena. Notes&#58; Plectics was coined by Dr. Murray Gell-Mann in &quot;Let&#39;s Call It Plectics&quot;, an article in Complexity Vol. 1, No. 5, 1996. In that article, he states that the words &quot;simple&quot; and &quot;complex&quot; both descend from the Indo-European root &quot;plek-&quot;. Using it directly neatly avoids the cardinality that &quot;simple&quot;, denoting 1, and &quot;complex&quot;, denoting more than 1, specify. This makes it more appropriate as a moniker for studying the complexity, or lack thereof, of systems.';
  plectics.combo = plectics.wordType + ':' + ' ' + plectics.word + ':' + ' ' + plectics.defOfWord;

  var predict = new Dictionary('predict');
  predict.wordType = 'v';
  predict.word = 'predict';
  predict.defOfWord = 'to declare or state in advance on the basis of observation, experience, or scientific reason.';
  predict.combo = predict.wordType + ':' + ' ' + predict.word + ':' + ' ' + predict.defOfWord;

  var prediction = new Dictionary('prediction');
  prediction.wordType = 'n';
  prediction.word = 'prediction';
  prediction.defOfWord = 'an assertion specifying some future state. A prediction may or may not be an extrapolation.';
  prediction.combo = prediction.wordType + ':' + ' ' + prediction.word + ':' + ' ' + prediction.defOfWord;

  var predictiveValidity = new Dictionary('predictive validity');
  predictiveValidity.wordType = 'n';
  predictiveValidity.word = 'predictive validity';
  predictiveValidity.defOfWord = 'the believability or strength of a prediction. Technically, a model will be predictively valid if it has generated many valid predictions or if the prediction was arrived at by extrapolation from a valid initial state using a valid model.';
  predictiveValidity.combo = predictiveValidity.wordType + ':' + ' ' + predictiveValidity.word + ':' + ' ' + predictiveValidity.defOfWord;

  //R//
  var replicativeValidity = new Dictionary('replicative validity');
  replicativeValidity.wordType = 'n';
  replicativeValidity.word = 'replicative validity';
  replicativeValidity.defOfWord = 'similarity between the data characteristics of two or more representations, statements, or assertions. Technically, this is the degree to which two assertions have the same or equivalent effect. In particular, when two assertions are replicatively valid, they can serve as substitutions or replacements for one another. The strictest form of this is a homomorphism between data elements of two representations.';
  replicativeValidity.combo = replicativeValidity.wordType + ':' + ' ' + replicativeValidity.word + ':' + ' ' + replicativeValidity.defOfWord;

  var representation = new Dictionary('representation');
  representation.wordType = 'n';
  representation.word = 'representation';
  representation.defOfWord = 'a statement providing a likeness, description, or demonstration of some thing&#59; an attempt at a complete rhetorical position, description of a state of affairs, or a point of view&#59; an execution, &#39;acting out&#39;, or performance of a meaningful sequence of events &#40;as in a theatrical performance&#41;.'
  representation.combo = representation.wordType + ':' + ' ' + representation.word + ':' + ' ' + representation.defOfWord;

  var resolution = new Dictionary('resolution');
  resolution.wordType = 'n';
  resolution.word = 'resolution';
  resolution.defOfWord = 'a statement or explanation that resolves a thing or provides a method for resolving some thing. Technically, a resolution of a thing is a representation of the constituents of that thing and how those constituents interact.<br>Misc. important other definitions&#58; <ul class=romeoLetters><li>resolution &#40;music&#41;&#58;  in western tonal music theory is the &quot;need&quot; for a sounded note and/or chord to move from a dissonance or unstable sound to a more final or stable sounding one, a consonance. Resolution has a strong basis in tonal music, since atonal music generally contains a more constant level of dissonance and lacks a tonal center to resolve to.</li><li>resolution &#40;microscopy&#41;&#58;  the minimum distance between distinguishable objects.</li><li>resolution &#40;images&#41;&#58;  has something to do with graininess or how much information is (can be) contained in an image.</li></ul>'
  resolution.combo = resolution.wordType + ':' + ' ' + resolution.word + ':' + ' ' + resolution.defOfWord;

  var resolve = new Dictionary('resolve');
  resolve.wordType = 'v';
  resolve.word = 'resolve';
  resolve.defOfWord = 'to separate the component parts of; to reduce to the constituent elements; to reduce to simple or intelligible notions&#59; to make clear or certain&#59; to free from doubt&#59; to disentangle; to unravel&#59; to explain&#59; to cause to perceive or understand&#59; to acquaint&#59; to inform; to convince&#59; to assure; to make certain. Technically, resolving is an act of &quot;cutting up&quot;, analysis, and distinction.';
  resolve.combo = resolve.wordType + ':' + ' ' + resolve.word + ':' + ' ' + resolve.defOfWord;

  //S//

  var sequential = new Dictionary('sequential');
  sequential.wordType = 'n';
  sequential.word = 'sequential';
  sequential.defOfWord = 'Consisting of a sequence of things in fixed succession; arranged in a determined order. Technically, a total ordering where each component is preceded by only one other component and succeeded by only one other component.'
  sequential.combo = sequential.wordType + ':' + ' ' + sequential.word + ':' + ' ' + sequential.defOfWord;

  var similar = new Dictionary('similar');
  similar.wordType = 'adj';
  similar.word = 'similar';
  similar.defOfWord = 'related in appearance or nature&#59 having characteristics that correspond exactly or nearly. Technically, it means of the same class or kind, where the class or kind is defined by membership functions or predicates. This implies that there must be some characteristics upon which the similarity is based. E.g. simultaneity - at the same time.'
  similar.combo = similar.wordType + ':' + ' ' + similar.word + ':' + ' ' + similar.defOfWord;

  var similarityMeasure = new Dictionary('similarity measure');
  similarityMeasure.wordType = 'n';
  similarityMeasure.word = 'similarity measure';
  similarityMeasure.defOfWord = 'extent to which two observables take on the same value or magnitude.'
  similarityMeasure.combo = similarityMeasure.wordType + ':' + ' ' + similarityMeasure.word + ':' + ' ' + similarityMeasure.defOfWord;

  var simple = new Dictionary('simple');
  simple.wordType = 'adj';
  simple.word = 'simple';
  simple.defOfWord = 'consisting of only one or very few parts or components; having straightforward or obvious meaning, implication, or consequence; having little or no ornamentation; being a fundamental or rudimentary element; having no divisions or branches; not compound. Synonyms&#58; naive, sincere, ordinary, common, basic, atomic, unitary. Technically, a simple system has very few cause-effect relationships and is relatively easy to understand or interpret.'
  simple.combo = simple.wordType + ':' + ' ' + simple.word + ':' + ' ' + simple.defOfWord;

  var simulant = new Dictionary('simulant');
  simulant.wordType = 'n';
  simulant.word = 'simulant';
  simulant.defOfWord = 'A person who spends a lot of time creating, using, or studying simulation.'
  simulant.combo = simulant.wordType + ':' + ' ' + simulant.word + ':' + ' ' + simulant.defOfWord;

  var simulate = new Dictionary('simulate');
  simulate.wordType = 'v';
  simulate.word = 'simulate';

  simulate.defOfWord ='&#40;1a&#41; to have or take on the appearance, form, or sound of; imitate, mimic; &#40;1b&#41; to make in imitation of or as a substitute for; &#40;2&#41; to make a pretense of; feign; &#40;3&#41; to realize, act out, or effect a representation or model of. Technically, to execute a set of actions and show effects similar to another thing.';
  simulate.combo = simulate.wordType + ':' + ' ' + simulate.word + ':' + ' ' + simulate.defOfWord;

  var simulation = new Dictionary('simulation');
  simulation.wordType = 'v';
  simulation.word = 'simulation';
  simulation.defOfWord = 'a real, implemented, or instantiated model; a situated or embedded model; a set of actions such that, when executed, affect the environment.<br><ol type=&quot;1&quot; class=sierraLetters><li>A simulation is an effective model in the sense that it has a lasting effect on its environment. I.e., it is not just a metaphysical, logical, computational, or mental construct.</li><li>A simulation is an effective equivalent intended to trick or to fool in a satisficing but ultimately incomplete way. It is limited to the context of the characteristics being simulated. The degree to which the simulation and the simulated characteristics agree is variable; but, there is always a notion of a &quot;good enough&quot; match. Simulation is distinct from emulation.</li><li>The use of the term simulation carries implications about the similarity relationship between the simulator and the simulation. There is an implication that the similarity &#40;including a homomorphism&#41; is somewhat analytic, meaning that if the referent is decomposable, the simulation is decomposable and the similarity extends down into the components. But, the implication is that the similarity is incomplete and it is possible &#40;or easy&#41; to distinguish between the simulation and its referent. A simulation is ultimately a sham, a fake, or specious in some way. Again, these implications are dependent on subjective characteristics and require an observer.</li><li>There are also ontological implications to the term that imply a simulation is removed enough from its referent to be considered autotelic and important in and of itself, regardless of any correlation to a referent. In critical theory, this point of view is put forth by Baudrillard as a copy of a copy which has been so dissipated in its relation to the original that it can no longer be said to be a copy, stands on its own as a copy without a model.  It is this sense of the term that generates the technical distinction between a model and its implementation where a simulation is an implementation of the model as executed by a simulator as in DEVS.</li></ol>'
  simulation.combo = simulation.wordType + ':' + ' ' + simulation.word + ':' + ' ' + simulation.defOfWord;

  var simulator = new Dictionary('simulator');
  simulator.wordType = 'n';
  simulator.word = 'simulator';
  simulator.defOfWord = 'one that simulates, especially an apparatus that generates characteristics approximating those of the referent.'
  simulator.combo = simulator.wordType + ':' + ' ' + simulator.word + ':' + ' ' + simulator.defOfWord;

  var solution = new Dictionary('solution');
  solution.wordType = 'n';
  solution.word = 'solution';
  solution.defOfWord = 'a statement or explanation that solves a problem or provides a method for solving a problem.'
  solution.combo = solution.wordType + ':' + ' ' + solution.word + ':' + ' ' + solution.defOfWord;

  var solutionSet = new Dictionary('solution set');
  solutionSet.wordType = 'n';
  solutionSet.word = 'solution set';
  solutionSet.defOfWord = 'a statement of the initial situation and the outcome associated with a solution.'
  solutionSet.combo = solutionSet.wordType + ':' + ' ' + solutionSet.word + ':' + ' ' + solutionSet.defOfWord;


  var solve = new Dictionary('solve');
  solve.wordType = 'v';
  solve.word = 'solve';
  solve.defOfWord = 'to clear up or explain something puzzling or unintelligible&#59; to arrive at a desirable outcome given some initial situation&#59; &#40;logic&#41; to infer correctly.'
  solve.combo = solve.wordType + ':' + ' ' + solve.word + ':' + ' ' + solve.defOfWord;

  var statement = new Dictionary('statement');
  statement.wordType = 'n';
  statement.word = 'statement';
  statement.defOfWord = 'the formal expression of facts or opinions in language &#40;not nec. verbal or textual&#41;; a well- or ill-formed expression, sentence &#40;as in logic&#41;, testament or declaration &#40;explicit formal announcement&#41;; a position in an ongoing debate; a summary of a state of affairs &#40;as in a financial statement&#41;. This carries no implication that the expression is correct or well-formed. Statements can be recursive, meaning they can consist of other statements.'
  statement.combo = statement.wordType + ':' + ' ' + statement.word + ':' + ' ' + statement.defOfWord;

  var staticModelingFormalism = new Dictionary('static modeling formalism');
  staticModelingFormalism.wordType = 'n';
  staticModelingFormalism.word = 'static modeling formalism';
  staticModelingFormalism.defOfWord = 'a modeling formalism where the doctrine and the symbols do not change over time or due to iteration. Technically, the rules for symbol manipulation are only capable of generating trajectories that exhibit no state &#40;or memory&#41; dependence. Models in static modeling formalism do not exhibit hysteresis.';
  staticModelingFormalism.combo = staticModelingFormalism.wordType + ':' + ' ' + staticModelingFormalism.word + ':' + ' ' + staticModelingFormalism.defOfWord;

  var structuralValidity = new Dictionary('structural validity');
  structuralValidity.wordType = 'n';
  structuralValidity.word = 'structural validity';
  structuralValidity.defOfWord = 'compositional similarity between two or more representations, statements, or assertions. Technically, this is the degree to which two assertions have the same or analogous components or mechanisms. In particular, when two assertions are structurally valid, there are clear mappings between the components of one and those of the other. The strictest form of this is a homomorphism between components or mechanisms of two representations.'
  structuralValidity.combo = structuralValidity.wordType + ':' + ' ' + structuralValidity.word + ':' + ' ' + structuralValidity.defOfWord;

  var synthesis = new Dictionary('synthesis');
  synthesis.wordType = 'n';
  synthesis.word = 'synthesis';
  synthesis.defOfWord = 'the combining of separate elements or substances to form a coherent whole; a complex whole so formed.<br>Notes&#58;<br><ol type=&quot;1&quot; class= sierraLetters><li>The word "synthesis" is usually but not always synonymous with &quot;construct&quot;.</li><li>The word &quot;synthesis&quot; literally parses into &quot;to set or put together&quot;. The implication is that synthesis is purposeful or attention is paid &#40;by the entity doing the synthesizing&#41; to the order and sequence of the composition.</li><li>There is a denotative requirement of a teleological end or &quot;coherent whole&quot; that is the result of the composition.</li><li>There is usually a connotation that synthetically created things are not naturally occurring. They are artificial and require an intelligent designer.  This is reinforced by the etymological connection to &quot;thesis&quot;, which is a statement, description, or representation that is semantic. This distinguishes its use from &quot;construct&quot;.</li><li>There is no necessary requirement that synthesis imply concreteness. A synthetic object can be abstract.</li></ol>'
  synthesis.combo = synthesis.wordType + ':' + ' ' + synthesis.word + ':' + ' ' + synthesis.defOfWord;


  var syntheticModel = new Dictionary('synthetic model');
  syntheticModel.wordType = 'n';
  syntheticModel.word = 'synthetic model';
  syntheticModel.defOfWord = 'a model built to meet specific requirements or achieve some result or conclusion.'
  syntheticModel.combo = syntheticModel.wordType + ':' + ' ' + syntheticModel.word + ':' + ' ' + syntheticModel.defOfWord;

  var system = new Dictionary('system');
  system.wordType = 'n';
  system.word = 'system';
  system.defOfWord = 'a group of interacting, interrelated, or interdependent elements forming a whole; functionally related group of elements, especially; a set of objects or phenomena grouped together for classification or analysis. Notes&#58; The use of the word &quot;system&quot; assumes a separation between things internal and external to the system. It implies that the object can be treated either as a collection of components or as a unit. The behaviors of components internal to the system are the generative mechanisms for the behavior of the system as a whole.'
  system.combo = system.wordType + ':' + ' ' + system.word + ':' + ' ' + system.defOfWord;

  //T//
  var thesis = new Dictionary('thesis');
  thesis.wordType = 'n';
  thesis.word = 'thesis';
  thesis.defOfWord = 'a position, proposition, representation, or composite assertion maintained by argument.'
  thesis.combo = thesis.wordType + ':' + ' ' + thesis.word + ':' + ' ' + thesis.defOfWord;

  //U//
  var useCase = new Dictionary('use case');
  useCase.wordType = 'n';
  useCase.word = 'use case';
  useCase.defOfWord = 'a sequence of particular interactions between a user and a tool.<br>Notes&#58;<ol type=&quot;1&quot; class=uniformLetters><li>Traditional definitions of use case include the objective of the user, a system instead of a tool, the context in which the user and tools exist, particular types of interactions like stimulus-response, etc. These traditional definitions give rise to unnecessary vagaries and abstractions.</li><li>It is important that the interactions be concrete. It is a particular case, not a set of similar cases. For example, rather than a use case for a bank machine including &quot;establish user identity&quot;, it should be "find an exact match between user data and one unique record from the user identity database". See usage pattern.</li></ol>'
  useCase.combo = useCase.wordType + ':' + ' ' + useCase.word + ':' + ' ' + useCase.defOfWord;

  var usagePattern = new Dictionary('usage pattern');
  usagePattern.wordType = 'n';
  usagePattern.word = 'usage pattern';
  usagePattern.defOfWord = 'a regular or repeated similarity between multiple use cases of a tool or set of tools.'
  usagePattern.combo = usagePattern.wordType + ':' + ' ' + usagePattern.word + ':' + ' ' + usagePattern.defOfWord;

  //V//
  var valid = new Dictionary('valid');
  valid.wordType = 'adj';
  valid.word = 'valid';
  valid.defOfWord = 'a believable, convincing, well-grounded, or strongly argued statement, assertion, or representation.'
  valid.combo = valid.wordType + ':' + ' ' + valid.word + ':' + ' ' + valid.defOfWord;

  var validity = new Dictionary('validity');
  validity.wordType = 'n';
  validity.word = 'validity';
  validity.defOfWord = 'the believability or strength of a statement, assertion, or representation. Technically, validity is the degree to which an assertion can be trusted as true enough or true to within some tolerance.'
  validity.combo = validity.wordType + ':' + ' ' + validity.word + ':' + ' ' + validity.defOfWord;

  var verification = new Dictionary('verification');
  verification.wordType = 'n';
  verification.word = 'verification';
  verification.defOfWord = '&#40;1&#41; the act of verifying. &#40;2a&#41; a confirmation of truth or authority. &#40;2b&#41; the evidence for such a confirmation. &#40;2c&#41; a formal assertion of validity. Technically, the process of determining where two statements agree and disagree as in comparing a model to its corresponding simulation.'
  verification.combo = verification.wordType + ':' + ' ' + verification.word + ':' + ' ' + verification.defOfWord;

  var verify = new Dictionary('verify');
  verify.wordType = 'v';
  verify.word = 'verify';
  verify.defOfWord = '&#40;1&#41; to argue the truth of by presentation of evidence or testimony; substantiate. &#40;2&#41; to determine or test the truth or accuracy of, as by comparison, investigation, or reference; regulate by conducting a parallel experiment or comparing with another standard. Technically, to compare and contrast two or more statements.'
  verify.combo = verify.wordType + ':' + ' ' + verify.word + ':' + ' ' + verify.defOfWord;

  var verity = new Dictionary('verity');
  verity.wordType = 'n';
  verity.word = 'verity';
  verity.defOfWord = 'the quality or condition of being true, factual, or trustworthy. Notes&#58; Verity is distinguishable from validity. Verity targets ontological truth, regardless of any arguments or belief. Validity targets effective formal systems and conclusions that follow from premises. The result is that, in M&#38;S, verification becomes the incontrovertible differences between a model and its implementation whereas validation becomes the arguable relationship between a representation and reality. One cannot verify a representation against reality because of the ontological wall. One can only validate a representation against reality. However, one can verify one representation against another. One can also validate one representation against another. Validation can be considered a weak type of verification or verification can be considered a strong type of validation. So, although they are distinguishable, they both target the same issue: trust.'
  verity.combo = verity.wordType + ':' + ' ' + verity.word + ':' + ' ' + verity.defOfWord;

  //W//
  var weakBisimulation = new Dictionary('weak bisimulation');
  weakBisimulation.wordType = 'n';
  weakBisimulation.word = 'weak bisimulation';
  weakBisimulation.defOfWord = 'two modules whose sets of state transitions have nonzero intersection. I.e. the two modules share a common subset of state transitions.'
  weakBisimulation.combo = weakBisimulation.wordType + ':' + ' ' + weakBisimulation.word + ':' + ' ' + weakBisimulation.defOfWord;

  //alphabet Arrays//
  var aLetters = [abstraction, abstraction2, actor, agent, agentBased, agentDirected, agentOriented, algorithm, analog, applicability, applicable, apply, apply2, assertion, attribute, attribute2];

  var bLetters = [biomimetic, biomimeticAnalog, bisimulation];

  var cLetters = [calibration, complex, complexity, concrete, concurrent, concurrentSimulation, concurrentSimulator, congruence, huntConstruct, h2Construct, constructiveModel, constructiveProof, constructiveSimulation, correctModel, correctSimulation, correctSimulator, correctness, coSimulation, crossmodelValidity];

  var dLetters = [derivability, derivable, derive, descriptiveModel, detail, distributedSimulator];

  var eLetters = [emergence, execution, extrapolate, extrapolation];

  var fLetters = [formalSystem, formalism];

  var gLetters = [generativeModel, granular, granularity]

  var hLetters = [homomorphicModels, homomorphism, hypothesis, hystersis];

  var iLetters = [inherit, inscriptionError, interaction, interactiveSimulation];

  var lLetters = [levelOfResolution];

  var mLetters = [measure, measurement, mechanism, model, modelingFormalism, morphism]

  var oLetters = [observationalCongruency];

  var pLetters = [parallel, parallelSimulation, parallelSimulator, petitioPrincipii, physiomimetic, plectics, predict, prediction, predictiveValidity ]

  var rLetters = [replicativeValidity, representation, resolution, resolve];

  var sLetters = [sequential, similar, similarityMeasure, simple, simulant, simulate, simulation, simulator, solution, solutionSet, solve, statement, staticModelingFormalism, structuralValidity, synthesis, syntheticModel, system];

  var tLetters = [thesis];

  var uLetters = [useCase, usagePattern];

  var vLetters = [valid, validity, verification, verify, verity];

  var wLetters = [weakBisimulation];

  var arrayOfUsedLetters = ['.a', '.b', '.c', '.d', '.e', '.f','.g','.h','.i','.l', '.m', '.o', '.p', '.r', '.s', '.t', '.u', '.v', '.w']

  //function to make each Letter entry in the dictionary//
  var letterPage = (function(menuItem, array, divTitle) {
    $(menuItem).one('click',function(){
      for(var i = 0; i < array.length; i++) {
        $('<p class=' + divTitle + '>' + array[i].combo + '</p>').appendTo('.openDictionary');
      };
      $(menuItem).click(function(){
        $('.'+ divTitle + '').toggle();
      })
  });
});

  //apply this //
  letterPage(arrayOfUsedLetters[0], aLetters, 'alphaLetters');
  letterPage(arrayOfUsedLetters[1], bLetters, 'bravoLetters');
  letterPage(arrayOfUsedLetters[2], cLetters, 'charlieLetters');
  letterPage(arrayOfUsedLetters[3], dLetters, 'deltaLetters');
  letterPage(arrayOfUsedLetters[4], eLetters, 'ellaLetters');
  letterPage(arrayOfUsedLetters[5], fLetters, 'foxtrotLetters');
  letterPage(arrayOfUsedLetters[6], gLetters, 'golfLetters');
  letterPage(arrayOfUsedLetters[7], hLetters, 'hotelLetters');
  letterPage(arrayOfUsedLetters[8], iLetters, 'indiaLetters');
  letterPage(arrayOfUsedLetters[9], lLetters, 'limaLetters');
  letterPage(arrayOfUsedLetters[10], mLetters, 'mikeLetters');
  letterPage(arrayOfUsedLetters[11], oLetters, 'oscarLetters');
  letterPage(arrayOfUsedLetters[12], pLetters, 'papaLetters');
  letterPage(arrayOfUsedLetters[13], rLetters, 'romeoLetters');
  letterPage(arrayOfUsedLetters[14], sLetters, 'sierraLetters');
  letterPage(arrayOfUsedLetters[15], tLetters, 'tangoLetters');
  letterPage(arrayOfUsedLetters[16], uLetters, 'uniformLetters');
  letterPage(arrayOfUsedLetters[17], vLetters, 'victorLetters');
  letterPage(arrayOfUsedLetters[18], wLetters, 'whiskeyLetters');





});

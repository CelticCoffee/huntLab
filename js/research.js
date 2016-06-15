
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
  agent.defOfWord = '<ol type = &quot;1&quot; class = alphaLetters><li>The best definition of &quot;agent&quot; in the literature: &quot;An autonomous agent is a system situated within and a part of an environment that senses that environment and acts on it, over time, in pursuit of its own agenda and so as to effect what it senses in the future.&quot; [1] [1] Franklin, S. and Graesser, A. &quot;Is it an Agent, or just a Program?: A Taxonomy for Autonomous Agents&quot; in Intelligent Agents III. Agent Theories, Architectures, and Languages. ECAI&rsquot;96 Workshop (ATAL), Budapest, Hungary, August 12-13, 1996, Proceedings. Müller, Jörg P.; Wooldridge, Michael J.; Jennings, Nicholas R. (Eds.) 1997.</li><br><li>The IE root ag- &quot;to drive, draw, move.&quot; Also the IE root of &quot;axiom&quot;.</li><br><li>The definition of agent-based might seem to present a contradiction because it is ontological; but the definition of &quot;actor&quot; assumes the capability (or actuality) of an actor being observable. Ultimately, however, &quot;identifiability&quot; is an ontological characteristic that doesn&#44;t imply that an observer actually exists. So, there is no contradiction.</li></ol>';
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

  var biomimetic = new Dictionary('biometic');
  biomimetic.wordType = 'adj';
  biomimetic.word = 'biometric';
  biomimetic.defOfWord = 'to regard as a characteristic or quality of a person or thing, including a cause effect relationship. Syn. ascribe, impute.';
  biomimetic.combo = biomimetic.wordType + ':' + ' ' + biomimetic.word + ':' + ' ' + biomimetic.defOfWord;

  var biomimeticAnalog = new Dictionary('biomimetic analog');
  biomimeticAnalog.wordType = 'n';
  biomimeticAnalog.word = 'biomimetic analog';
  biomimeticAnalog.defOfWord = 'an analog aspiring to emulate aspects (including phenomenal, componential, causal, and organizational) of a referent biological system.';
  biomimeticAnalog.combo = biomimeticAnalog.wordType + ':' + ' ' + biomimeticAnalog.word + ':' + ' ' + biomimeticAnalog.defOfWord;

  var bisimulation = new Dictionary('bisimulation');
  bisimulation.wordType = 'n';
  bisimulation.word = 'bisimulation';
  bisimulation.defOfWord = 'two modules whose state transitions are identical. This is the dual of congruence.';
  bisimulation.combo = bisimulation.wordType + ':' + ' ' + bisimulation.word + ':' + ' ' + bisimulation.defOfWord;


  //alphabet Arrays//
  var aLetters = [abstraction, abstraction2, actor, agent, agentBased, agentDirected, agentOriented, algorithm, analog, applicability, applicable, apply, apply2, assertion, attribute, attribute2 ];

  var bLetters = [biomimetic, biomimeticAnalog, bisimulation];

  var arrayOfUsedLetters = ['.a', '.b', '.c', '.d', '.e', '.f','.g','.h','.i','.l', '.m', '.n', '.o', '.p', '.r', '.s', '.t', '.u', '.v', '.w']

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
  letterPage(arrayOfUsedLetters[1], bLetters, 'betaLetters');










});

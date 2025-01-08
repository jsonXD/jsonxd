# [ionify](http://meet.ionify.net/)

**🧬 ion implemented for you**, is a flexible & unobtrusive, natural-language api,
for expressing actions & information via
[**⚛︎ ion:** invoked object notation](http://ion.ionify.net/).
it's [produced](https://origin.ionify.net/)
by
[**michael 👨🏾‍💻 lee**](https://github.com/iskitz)
and is maintained by
[**team✨ionify**](https://team.ionify.net/):

```javascript
~ {   log  : '👋🏾👨🏾‍💻'   } <= /do transcription/
+ { "json" : "data"  } <= /json information/
& ["natural language"] <= /text information/
```

## why

**⚛︎ ion** + **🧬 ionify** enable expressing actions & information that humans
& software [naturally ❦ understand](https://github.com/ionify/about/blob/public/VISION.md#vision).
they enable:

+ creating [domain-specific languages](#domain-specific-languages),

+ [literate](#literate-programming),
  [modular](#modular-programming),
  [event-driven](#event-driven-programming),
  [meta](https://en.wikipedia.org/wiki/Metaprogramming) &
  [name-collision-free](#name-collision-freedom)
  expression,

+ defining, acquiring, [observing](#decoupled-observation) &
  interacting, with highly-[decoupled](#decoupled-observation)
  software-defined [actions & information](https://lingo.ionify.net/)

+ and, more ...

## how

**⚛️ ion** + **🧬 ionify** are enabled by & can be implemented in, languages that support
[operator ⚙️ overloading](https://en.wikipedia.org/wiki/Operator_overloading).
three we've explored & confirmed capable, are
[**{✨:javascript}**](https://github.com/ionify/about/blob/public/ions/ion.md#javascript),
[**🐍_python**](https://github.com/ionify/about/blob/public/ions/ion.md#python), &
[**java.☕️**](https://github.com/ionify/about/blob/public/ions/ion.md#java).

for a detailed explanation of **ion**: invoked object notation, visit
its [**📚 documentation**](https://github.com/ionify/about/blob/public/ions/ion.md#form).

for applications of **ion** & **ionify** 🤲🏾 enjoy 🤲🏾 the following subsections:

### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

>creating a domain-specific language ... can be worthwhile if the language allows a
particular type of problem or solution to be expressed more clearly than an existing
language would allow - **wikipedia**

**ionify** enables creating language(s) via **ions** that define & map terms &
phrases to actions:

```javascript
~
{ re:
    { id: 'ask.say@ions.iskitz.net'
    , is: 'an ask & say domain-specific-language interaction'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {201507283.2 : -7}
    , to: {202212262.2 : -8}
    , at: +3.100
    , in: 'silicon-valley.california.usa.earth'
    , do: 'webi interaction'
    , as: 'sensation'
    },

  on: ['ask','say'],

  ask :function
  ask ( action )
      { ask.with.my.answer =
        prompt (ask.with.my.prep (action.ask))
        ||''
      },

  say :function
  say ( action )
      { alert  (say.with.my.prep (action.say))
      },

  prep:function
  prep( quote )
      { return  quote.replace       (// replace
               (/\[answer\]/g)      ,// [answer]
                prep.with.my.answer )// 👈🏾 with
      }
}


~ /ask.say interactions can be independent ions/

~ { say: '👋🏾 hi!'                              }
~ { ask: "what's your name?"                   }
~ { say: "hi [answer]! i'm math e. bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"             }
~ { say: '[answer]? really? 🤔'                }
~ { ask: 'can i ask you another question?'     }
~ { say: 'i thought you\'d say "[answer]" 😉'  }
```

### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

>a program is best thought of as a web ... of simple parts and simple relations
between those parts; the programmer's task is to state those parts and those
relationships, in whatever order is best for human comprehension -
[donald e. knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth)

```javascript
~
{ re:
    { id: 'frendlee@ionified.net'
    , is: 'a literate & natural-language exploration'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {201712086.2 : -8}
    , to: {202212262.2 : -8}
    , in: 'silicon-valley.california.usa.earth'
    , do: 'ask.say.3@ions.iskitz.net'
    , as: 'aesop action'
    },

  do:
    [ 'say hello'
    , 'ask their name'
    , 'invite them to play'
    ],

  'say hello':
    {say: "hi! i'm frend lee!"},

  'ask their name':
    {ask: "what's your name?"},

  'invite them to play':
    {ask: 'hi [answer]! wanna play?!'}
}
```

#### [code as prose](https://captions.ionify.net/)

```javascript
~
{ re:
    { id: 'code-as-prose.demo@ionified.net'
    , is: 'code-as-prose with ionify & orion'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {201903237.2 : -7       }
    , to: {578310011.1 : -8.235423}
    , at: +0.200
    , in: 'silicon-valley.california.us.earth'
    , do: 'transcription'
    , as: 'sion sensation'
    },

  on: 'say',
  say (ion)
    {
    + {log: ion.say}
    }
}

    you     = {say:'do you see all the things'}
    can     = {say:'we can do'   }
  write     = {say:'if we write' }
   code     = {say:'our code'    }
     as     = {say:'as actionable words within'}
  prose     = {say:'phrases & sentences?!🤓'}

    via     = {say:'natural ❦ language by 🙇🏾‍♂️ יהוה 🤲🏾 via'}
    ion     = {say:'⚛️ invoked object notation'},
    ionify  = {say:'🧬 ions implemented for your'},
  orion     = {say:'✨ object-reference ion:'},
captions    = {say:'📝 code-as-prose terminology ions!👨🏾‍💻'}

 'with' , ion + ionify & orion, you -can-
  write & code -as- prose -via- captions-

              ['^ ڐ ^']
```

visit [😎 anemojii](https://ionified.github.io/anemojii-ions.iskitz.net/)
to experience
[another](https://glitch.com/edit/#!/anemojii?path=index.re.js%3A1%3A0)
[exploration](https://glitch.com/edit/#!/anemojii?path=index.js%3A1%3A0)
of literate programming.

### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

>a software design technique that emphasizes separating the functionality of a
program into independent, interchangeable modules, such that each contains everything
necessary to execute only one aspect of the desired functionality - **wikipedia**

```javascript
~
{ re:
    { id: 'an.ionified.module@doma.in'
    , is: 'modeling an ionified module'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {202212251.2 : -8.2337}
    , do: 'on.storie@ionify'
    , as: 'sion action'
    },

  do: function
  something ()
    {
    + something.with.my.ai
    },

  ai: /hi! 🤓/
}
```

### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

>a programming paradigm in which the flow of the program is determined by events
such as user actions ..., sensor outputs, or messages from other programs or threads - **wikipedia**

```javascript
~
{ re:
    { by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {202212251.2 : -8.2224}
    , do: 'on.storie@ionify transcription'
    , as: 'sensation'
    },

  on:'event',
  do(  ion  )
    { /log 'it happened!' via the event ion!//
      {log: ion.event} & /stop sensing event//
      { on:'event', no:this.do}
    }
}

~ /this event ion could be in a separate file!/
~ {event: 'it happened!'} <= /invokes an event/
```

### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)

**ionify** uses javascript's
[prototypal ⚘ inheritance](https://262.ecma-international.org/6.0/#sec-objects)
&
[operation ⚙️ overloading](https://262.ecma-international.org/6.0/#sec-tonumber)
to enable observing objects without direct references. this enables observing json & other
anonymous & named objects:

```javascript
~
{ re:
    { by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {202212236.2 : -8.1202}
    , do: 'on.storie@ionify transcription'
    , as: 'sensation'
    },

  on:'hi',
  hi( ion)
    { /this method is called for each ion//
      /with a 'hi' property & value which//
      /it transcribes via the log action://

      {log: ion.hi}

      ^
      /logs "i'm an ion!" 1st//
      /logs "i'm a json!" 2nd/
    }
}

~ / each ion can be in a local or remote file /

~ { hi : "i'm an ion!"}  <=  /invoke an object/
~ {"hi": "i'm a json!"}  <=  /invoke some json/
```

### [name collision freedom](https://en.wikipedia.org/wiki/Name_collision)

[**🦁 lions**: literal ions](https://talk.ionify.net/),
i.e. `~/ / + [ ] & { }`, eliminate name collisions, by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).

**ionify** enables individually observing & inspecting, multiple identically identified
**lions**. this capability enables **lions** to simultaneously coexist, within the same
[execution context](https://262.ecma-international.org/6.0/#sec-execution-contexts),
without overriding all, or parts, of each other:

```javascript
~
{ re:
    { by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {578310022.2 : -8.0007}
    , do: 'on.storie@ionify transcription'
    , as: 'sensation'
    },

  on:'my.ion@doma.in',
  do( ion )
    { ion.re.by ['a.🇬🇾👨🏾‍💻🇺🇸.developer.created']

      &&  /this method is called for each ion with//
          /an id matching 'my.ion@doma.in', but it//
          /confirms the ion developer before      //
          /describing what the ion is or does:    //

          /log 'identifying the intended module 🎉'//
          {log: ion.re.is} & /stop sensing this id//
          { on: ion.re.id, no: this.do }
    }
}

~ /these ions can be together or in separate files/

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾👨🏾‍💻🇺🇸.developer.producing'
    , on: -2.20091205708
    , to: -1.578309296080333
    , in: 'silicon-valley.california.usa.earth'
    , is: "sharing the intended module's id"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾👨🏾‍💻🇺🇸.developer.created'
    , in: 'georgetown.guyana.south-america.earth'
    , is: 'identifying the intended module 🎉'
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾👨🏾‍💻🇺🇸.developer.discovering'
    , on: -2.20070904
    , to: -2.20091205705
    , in: 'queens-county.new-york.usa.earth'
    , is: "also sharing the intended module's id"
    }
}
```

####

🙇🏾‍♂️ through * [**יהוה**](LICENSE.txt#L1) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://team.ionify.net/)
🤲🏾

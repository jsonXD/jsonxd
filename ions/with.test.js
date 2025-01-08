;
~
{ re:
    { id:  'with.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','convention','sensation','composition']
    , by: ['🙇🏾‍♂️  יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: {200709.2    : -4}
    , to: {578311222.1 : -8}
    , at: -0.032
    , is: "ionify's with@ api tests"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/with.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/with.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WERE declaring & filling in the test suite's with@ scenarios"
        , "WILL refine migrated-from-re.of.test@ [¿duplicate?] with@ tests"
        , "must ..."
        , "will ..."
        , "want ... "
        , "like ... "
        ]
    },

  do:
    [ "with@ adds .with to methods"
    , "with@ adds .with to arrays"
    , "with@ adds .with to methods & arrays only"
    , "with@ sets .with.its as the ion"
    , "with@ sets .with.the as the ion's with.the"
    , "with@ sets .with.our as the ion's domain group"
    , "with@ ensures ions' method.with.its"
    , "with@ ensures ions' method.with.the & with.the"
    , "with@ ensures ions' method.with.in.domain & with.in.domain"
    , "with@ ensures ions' method.with.all & with.all singular shared group"

    , "with@ connects sensible members only"
    , "with@ connects sensible members with non-with@ .with's"
    , "with@ connects withfull ions & withfull members"

    , "with@ connects withless ions & withless members"
    , "with@ connects withless ions & withfull members: part: to self"
    , "with@ connects withless ions & withfull members: part: to other"
    , "with@ connects withless ions & withfull members: full: to self"
    , "with@ connects withless ions & withfull members: full: to other"

    , "with@ connects withfull ions & withless members"
    , "with@ connects withfull ions & withless members: part: to self"
    , "with@ connects withfull ions & withless members: part: to other"
    , "with@ connects withfull ions & withless members: full: to self"
    , "with@ connects withfull ions & withless members: full: to other"

    , "with@ connects aeon-invoked, oli-nested, oli-named-actions"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

   reset:function
   reset (params)
     { var via = reset.with
         , win = via.in = {}
         , the = via.the
         , our = via.our
         , its = via.its
         ,  my = via.my
         , all = via.all

       win = {}
       the.tests = {}
       //more ¿for you 😉 to help? do...better
     },

  full:function
  full (ai)
    { var truth  = full.with
        , TRULY  = truth.constructor
        , _with_ =   ai   &&   ai.with
        , domain = _with_ && _with_.its && _with_.its.re.id.domain.name || 'all'

      return!!_with_
          &&  _with_ instanceof TRULY
          &&  _with_.its  !=  void  0
          &&  _with_.its === _with_.my
          &&  _with_.the === truth.the
          &&  _with_.all === truth.all
          &&  truth.the[domain] === _with_.in.domain
          &&  truth.the[domain] === _with_.our
          &&  truth.the.ionify  === _with_.the.ionify
    },

 "with@ adds .with to methods":function
  methods (doing)
    { var     exam =  methods.with.my
        , question = doing [doing.next]
        ,   answer =  exam [question] === methods
      exam.report (question, answer)
    },

 "with@ adds .with to arrays":function
  arrays (doing)
    { var question = doing [doing.next]
        ,   answer = doing.with.its.do === doing
      arrays.with.its.report (question, answer)
    },

 "with@ adds .with to methods & arrays only":function
  methodsAndArrays (doing)
    { var     exam =  methodsAndArrays.with.my
        , question =  doing [doing.next]
        ,   answer =  methodsAndArrays  ===  exam [question]
                  &&  doing.with.its.do === doing
                  && !exam.re.with

      exam.report (question, answer)
    },

 "with@ sets .with.its as the ion":function
  its (doing)
    { var     exam = its.with.my
        , question = doing [doing.next]
        ,   answer = exam.re == doing.with.its.re

      exam.report (question, answer)
    },

 "with@ sets .with.the as the ion's with.the":function
  the (doing)
    { var     exam = the.with.my
        , question = doing [doing.next]
        ,   answer = Boolean (exam.with.the) && exam.with.the === the.with.the

      exam.report (question, answer)
    },

 "with@ sets .with.our as the ion's domain group":function
  our (doing)
    { var question  = doing [doing.next]
        , ion       = {re:{id:question+'@'+Math.random()}}
        ~ ion
      var exam      = our.with.my
        , answer    = ion.with.our === ion.with.in.domain
                   && ion.with.our

      exam.report (question, Boolean (answer))
    },

 "with@ ensures ions' method.with.its":function
  its(doing)
    { var     exam = its.with.its
        , question = doing [doing.next]
        ,   answer = exam && exam[question] === its
      exam.report (question, answer)
    },

 "with@ ensures ions' method.with.the & with.the":function
  of (doing)
    { var     exam = of.with.its
        , question = doing [doing.next]

      var   answer = exam.with
                  && exam.with.the
                  && exam.with.the === of.with.the
                  && typeof exam.with.the == 'object'

      exam.report (question, answer)
    },

 "with@ ensures ions' method.with.in.domain & with.in.domain":function
  domain (doing)
    { var     exam = domain.with.its
        , question = doing [doing.next]

      var   answer = exam.with.its
                  && exam.with.in.domain
                  && domain.with.in.domain === exam.with.in.domain
                  && typeof exam.with.in.domain == 'object'

      exam.report (question, answer)
    },

 "with@ ensures ions' method.with.all & with.all singular shared group":function
  all (doing)
    { var     exam = all.with.its
        , question = doing [doing.next]
        ,      ion = {method:function(){}}
        ;     +ion

      var   answer = exam.with
                  && exam.with.all
                  &&  ion.with.all  === exam.with.all
                  &&  ion.with.all  === ion.method.with.all
                  && 'object' == typeof exam.with.all

      exam.report (question, answer)
    },

 "with@ connects sensible members only":function
  sensible (doing)
    { var ion
        = { aeon        : []
          , function    : function(){}
          , object      : {}
          , recognition : / /
          , boolean     : false
          , null        : null
          , number      : 0
          , string      : ""
          , undefined   : void 0
          }

        ~ ion

      var expected
        = { aeon        : true
          , function    : true
          , object      : true
          , recognition : true
          , boolean     : false
          , null        : false
          , number      : false
          , string      : false
          , undefined   : false
          }

      var i         = sensible.with.my
        , question  = doing [doing.next]
        , expects   = {ion:ion, has:expected}

      i.report (question, i.expected (expects))
    },

  expected:function
  expected (expects)
    { var     exam = expected.with.my
        ,     full = exam.full
        ,      ion = expects.ion
        ,      has = expects.has
        ,   answer = true
        ,   member

      for
        ( var name in has)
        { if(!ion.hasOwnProperty (name)) continue
        ; member  =   ion [name]
        ; answer &&= full (member) === has [name]
        }

      return answer
    },

 "with@ connects sensible members with non-with@ .with's":function
  other (doing)
    { var ion
      = { recognition:
            { with: / /
            },
          boolean:
            { with: true
            },
          number:
            { with: 40/7
            },
          null:
            { with: null
            },
          string:
            { with: "string"
            },
          undefined:
            { with: void 0
            },
          function:
            { with: function(){}
            },
          object:
            { with: {other:"properties"}
            },
          aeon:  Array.prototype.with
            ?     []
            :     {with:[]}
            ,
          bigint:
            { with: typeof BigInt != 'undefined'
                  ?   BigInt (571428)
                  :   571428
            },
          symbol:
            { with: typeof Symbol != 'undefined'
                  ?   Symbol ('with@ test symbol')
                  :   'with@ test symbol for symbol-less runtimes'
            }
        }

    ~ ion

      var expected
        = { aeon        : true
          , null        : true
          , function    : true
          , object      : true
          , undefined   : true
          , recognition : true
          , bigint      : false
          , boolean     : false
          , number      : false
          , string      : false
          , symbol      : false
          }

      var i         = other.with.my
        , question  = doing [doing.next]
        , expects   = {ion:ion, has:expected}

      i.report (question, i.expected (expects))
    },

 "with@ connects withless ions & withless members":
 "with@ connects sensible members only",

 "with@ connects withless ions & withfull members: part: to self":function
  part (doing)
    { var ion
      = { aeon        : []
        , function    : function(){}
        , object      : {}
        , recognition : / /
        }

      ; ion.aeon.with
      = ion.function.with
      = ion.object.with
      = ion.recognition.with
      = {its:ion}

      ~ ion

      var expected
        = { aeon        : true
          , function    : true
          , object      : true
          , recognition : true
          }

      var i         = part.with.my
        , question  = doing [doing.next]
        , expects   = {ion:ion, has:expected}

      i.report (question, i.expected (expects))
    },

 "with@ connects withfull ions & withfull members":function
  withfull (doing)
    { var ion
        = { aeon        : []
          , function    : function(){}
          , object      : {}
          , recognition : / /
          }

      ion.with
        = { my:
              { aeon:{0:'🎉 array member updated!'}
              },
            its:
              { object:{extended:true}
              , recognition:void 0 // should ignore this & preserve its value
              },
            in:
              { domain:{function:{augmented:true}}
              },
            our:
              {},
            all:
              { over:"the place"
              },
            the:
              { groups:{were:"lively"}
              }
          }

      ; ion.aeon.with
      = ion.function.with
      = ion.object.with
      = ion.recognition.with
      = {its:ion}

      ~ ion

      var     exam = withfull.with.my
        , question = doing [doing.next]
        ,     full = exam.full
        ,    found = ion.with
        ,   answer = true
        ,   member

      var expected
        = { aeon        : found.my.aeon[0]
          , function    : found.in.domain.function.augmented
          , object      : found.its.object.extended
          , recognition : found.its.recognition
          }
      for
        ( var name in expected)
        { if(!ion.hasOwnProperty (name)) continue
        ; member  =   ion [name]
        ; answer &&= full (member)
        }

      answer  &&= found.my.aeon[0]  === expected.aeon
              &&  found.its.aeon[0] === expected.aeon
              &&  ion.aeon[0]       === expected.aeon

              &&  found.in.domain.function.augmented  === expected.function
              === found.all.function.augmented        === found.our.function.augmented

              &&  found.its.object.extended === expected.object
              === found.my.object.extended  === ion.object.extended

              &&  found.its.recognition === expected.recognition
              &&  found.my.recognition  === expected.recognition
              &&  ion.recognition       === expected.recognition

              &&  found.the.groups.were === "lively"
              &&  found.all.over        === "the place"

      exam.report (question, answer)
    },

 "with@ connects aeon-invoked oli-nested oli-named-actions":function
  aeons (doing)
    {
      var ion
        = { do:
              [ "on action"
              ],
            "on action":
              { message: "aeon-nested & oli-nested message"
                  ,  on:
               'action',
               'action':function
                react   (ion)
                  { tests = react.with.the.tests
          }   }   }

      ~ion

      var     exam = aeons.with.my
        , question = doing [doing.next]
        ,   answer = true
        ,    found = ion.do.with
        ,    sense = found && found.its && found.its ['on action']
        ,    tests = null

      ~{action:'causation'}

      var react = sense && sense.action.with

      answer  &&= Boolean (ion.with && ion.with.its === ion)
              &&  Boolean (found && found.its     &&  found.its      === ion)
              &&  Boolean (sense && sense.with    &&  sense.with.its === ion)
              &&  Boolean (react && react.its     === sense)
              &&  Boolean (react.its.message      === sense.message)
              &&  Boolean (aeons.with.the.tests   === tests && tests)

      exam.report (question, answer)
    }

/*
 great test of merging aliased groups, must make into actual tests!👨🏾‍💻🤓
  with:
    { its:
        { //....🌱 share with your .members here 🌱
          domain:
            { //🌱 share with-in your domain here 🌱
              testing:{testing:123}
            }
        },
      all:
        { //....🌱 share with all the ~ions here 🌱
        },
      our:
        { //....🌱 share with-in your domain here 🌱
          working:2022
        },
      the:
        { //....🌱 share with more++ groups here 🌱
          ionify:
            { //🌱 share with ionify domain here 🌱
              groups: null
            }
        }
    },
 */
}
;
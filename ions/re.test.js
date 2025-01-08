;
~
{'re.test@ionify':
    { of: ['core', 'sion', 'api', 'tests']
    , do: {'re@':true, 'on.storie@':true, transcription:true}
    , as: {examination  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: {200709.2     : -4}
    , to: {578311185.1  : -8}
    , at: -0.009
    , ax: "to see what re@ does. thank You 🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
    , ex: "juss fuh see wah re@ guhn doooo 😅"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/re.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST create comprehensive re.* tests to ensure a reliable foundation"
        , "MUST create re.* specification@ conformance tests for reliability"
        , "WILL add test(s) for values of auto-created & corrected re.* members"
        , "MUST connect ~re.do.as~get.or~on:error to confirm malformed ~re.do.as"

        , "were ..."
        , "must ..."
        , "want ..."
        , "like ..."
        , "muse ..."
        , "have ..."
        , "wont ..."
        ]
    },

  with:
    { my:
        { tests:
            { id:1, re:1, of:1, do:1, as:1, by:1, on:1
            , to:1, at:1, ax:1, hi:1, is:1, ex:1, go:1
            },
        }
    },

  do:
    [ "re@ sets: re.core for anion ~{ }"
    , "re@ sets: re.core malformed ~{*}"
    ],

 "re@ sets: re.core for anion ~{ }":function
  recore_anion (doing)
    { var question  = doing [doing.next]
        , tests     = recore_anion.with.my.tests
        ; tests.if  = 1

      var anion
        =  {}
        ~ anion
      var  re
        = anion.re

      re
        ? ~{log  :[`✅ ${question} re`]}
        : ~{error:[`❌ ${question} re`], halt:false}

      for
        ( var
          test in tests)
          test in re
            ? ~{log  :[   `✅ ${question} re.${test}`    ]}
            : ~{error:[!0,`❌ ${question} re.${test}`, re], halt:false}
    },

  testLater:function
  testLater( input )
    { var malformation  = input.malformation
        , test          = input.test
        , question      = input.question

      function
      testNow()
        { var re= malformation.re
          test in re
          ? ~{log  :[   `✅ ${question} re.${test}`    ]}
          : ~{error:[!0,`❌ ${question} re.${test}`, re], halt:false}
        }
      return testNow
    },

 "re@ sets: re.core malformed ~{*}":function
  recore_malformation (doing)
    { var malformation = {re:{}}
        ,      testing = []
        ,     question = doing [doing.next]
        ,        tests = recore_malformation.with.my.tests
        ,        later = recore_malformation.with.my.testLater

      function
      testNow()
        { malformation.re
            ? ~{log  :[`✅ ${question} re`]}
            : ~{error:[`❌ ${question} re`], malformation, halt:false}
        }

      testing.push (testNow)

      for
        ( var test in tests )
        { malformation.re [test] = 2017 * Math.random()
          testing.push( later ({malformation, test, question}))
        }

      malformation - testing <= /invoke the malformed re & activate its tests/
    }
}
;
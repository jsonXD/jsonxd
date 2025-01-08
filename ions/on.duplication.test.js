;
~
{ re:
    { id:  'on.duplication.test@ionify'
    , of: ['core', 'public', 'sensation', 'api', 'tests']
    , do: {sensation  :true, transcription:true}
    , as: {examination:true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -24.200709
    , to:  -18.578309182
    , at:  - 0.002
    , is:
        [ "🙇🏾‍♂️ ionify's duplicated multi-reaction ~on sensation api examination"
        , "✅ vetting re.go.help.issue.14's fix & re.go.help.issue.13's goals"
        , "🚨 ~get.d thrice by on.test@ to create three sensation@ duplications"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/on.duplication.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/on.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  do:
    [  "sense action again"
    , "invoke action again"
    ],

 "invoke action again":
    { action:'duplication'
    },

 "sense action again":
    { message: "~on: reaction: per sensation: duplication without self-reaction"
    ,      on:
     'action',
     'action':    function
      duplication (action)
        { var tests =  duplication.with.the.tests
            ; tests.on_duplication  || (tests.on_duplication  = 0)
            ; tests.on_self_react   || (tests.on_self_react   = 0)
            //☝🏾 note ~on duplication & self-reacts within the tests collection@

          if( action.on === 'action' && typeof action.action === 'function')
            ++tests.on_self_react

          if( tests.on_duplication  ++> 4 )  //👨🏾‍🏫 0+2+3 duplicated reaction@s
            ~ {no:duplication, on:'action'}
            ; else return

          var
          reacts = tests.on_self_react
          reacts == 0
              ? ~{  log:["✅", duplication.with.my.message]}
              : ~{error:["❌", duplication.with.my.message, reacts], halt:false}

          delete tests.on_duplication   //🧹 tidy the tests collection@
          delete tests.on_self_react    //🧹 tidy the tests collection@
        }
    }
}
;

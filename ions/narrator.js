;
~
{ re:
    { id:  'narrator@ions.iskitz.net'
    , of: ['more','ionify','public','api','tools']
    , as: {sensation    :true}
    , do: {transcription:true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: -4.200709
    , to: -8.20221125
    , at: -0.008
    , is:
        [ "observes & presents live code narration via these apis:    "
        + "  ~I: do narration once; only the 1st time per ~I instance."
        + "  ~i: do narration every time an ~i instance is sensed.    "
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/i.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/narrator.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL move this ion to ions.iskitz.net and-or ionified.net"
        , "plan to improve & expand this ion's behavior"
        ]
    },

  on:
    [ 'I', 'i'
    ],

  presented:
    {},

    I     :'narrate',
    i     :'narrate',
  narrate :function
  narrate ( action )
    { var its     =  narrate.with.its
        , message =  action.I || action.i
        , who     = ('I' in action) ? 'I' : 'i'

      if( 'I' == who)
        { if( its.presented [message] ) return
              its.presented [message] = true
        }

    ~ {info: true}
    + {info: who + String (message)}
    }
}
;
;
~
{ re:
    { id:  'on.aeon@ionify'
    , of: ['core', 'public', 'conduit', 'api']
    , do: {transcription:-0.001}
    , as: {  observation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -2.20070904
    , to:  -1.57830927408
    , at:  -0.040
    , is:
        [ "sensing all aeon: array-expressed object notations like these:"
                                        +
                      "ali: array-literal invocation emoji:"
                                        +
              "['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0]"
                                        +
          '["get sensations", "activate them", "enjoy their reactions!"]'
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.aeon.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.aeon.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [
        [ "MUST migrate anemojii's aeon await logic here & integrate with .next"
        ,     " doing            = anemojii.do"
        ,     " anemojii.do      = doing.slice (1)"
        ,     " anemojii.do.with = doing.with"
        ,     " doing.length     = 1"
        ]
        ,
        [ "WERE exploring sharing aesop's current storie|phrase via aeon.next."
        , "it currently helps tests apply their aesop storie|phrase within"
        , "their reports."
        , "know this'll also help aesop & aeon automate await|wait|pause|resume"
        , "WANT to rename .step <= .next as it indicates the current aeon step"
        ]
        , "were ..."
        , "will ..."
        , "need ..."
        , "have ..."
        , "wont ..."
        ]
    },

  sensors:
    { boolean   : 'aesop'
    , null      : 'aesop'
    , number    : 'aesop'
    , string    : 'aesop'
    , undefined : 'aesop'
    },

  on:
    Array,
    Array:function
     aeon(array)
        { array || (array = this)

          var via       = aeon.with
            , our       = via.our
            , nope      = via.all.nope
            , find      = our.find  || nope
            , tools     = via.the   && via.the.tools
            , warn      = tools     && tools.warn
            , debug     = tools     && tools.debug
            , debugging = debug ? our.logging.debug : (debug = nope, false)
            ; debugging&& debug ({debug: [true, "+[...]", array]})
          //WANT 🤔 to eliminate 🚫 doing 🔁 all👆🏾the👆🏾above 🔁 over 😓 & 😓 over

          var AEON      = via.my
            , sensors   = AEON.sensors
            , sensible  = our.ionified
            , next      = -1
            , loops     = 0
            , thing     , sense
            , type      , message

          while
            (   ++  next  < array.length) //✨~[await] reduces length; test often
            { array.next  = next          //👈🏾{api.exploration:aeon@.next}
              thing       = array [next]

              if( thing === array )
                { message = ["🚨 ~[",next,"]: self-reference skipped"].join('')
                ~ {warn:message} + {debug:[true, message, array]}
                  if (++loops / array.length > .001) break; else continue
                }

              type  = thing === null ? 'null' : typeof thing
              sense = sensors [type]

              if( sensible [type] || sensible [thing && thing.constructor.name])
              if(!thing.with      && array.with)
                  thing.with  = {its:array.with.its}
                  //☝🏾👨🏾‍🏫 may want the delegator do this as sensed@on.ion@ does

              if( !sense )
                { +thing
                ;  continue
                }

              if( !sensible [typeof sense])
              if( !sensible [sense.constructor.name])
                { find    ({find:sense,  in:sensors, as:type})
                  sense = sensors [type]
                  if(!sense)
                    { warn ({warn:["aeon: couldn't sense",type,"~",[JSON.stringify (thing)]]})
                    ; continue
                    }
                }

          //  if (+thing  && thing.did)  continue
              sensors[type](array) //👨🏾‍🏫 keeps 'this' vs sense (array)
            }

          return next / array.length
        },

  aesopInfo:
    [ "aesop: array-expressed storie or phrase"
    , "were ensuring best phrase resolution"
    , "will find known words in each sentence"
    , "will interpret via sentence(s), paragraph(s), chapter(s) + book(s)"
    , "will handle ['0 . 0'] via sense [thing] && sense [thing] (thing)"
    , "will use tbd name-to-ion resolver"
    ],
  aesop :function
  aesop (act)
    { act || (aesop == this.aesop) && (act = this)

      var phrase    = act [act.next]  //👈🏾{api.exploration:aeon@.next}
        , via       = aesop.with
        , our       = via.our
        , nope      = via.all.nope
        , find      = our.find  || nope
        , debug     = via.the   && via.the.tools && via.the.tools.debug
        , debugging = debug     ?  our.logging.debug : (debug = nope, false)
        ; debugging&& debug ({debug:[true, "+[...]:", act.next, phrase]})
        //WANT 🤔 to eliminate 🚫 doing 🔁 all👆🏾the👆🏾above 🔁 over 😓 & 😓 over

      var     action =   find ({find:phrase, in:act}) && act [phrase]
      typeof  action == 'function' && (action.in = act)
          ~   action                  //☝🏾{api.exploration:action@.in}
      if (act.next > act.length) act.next = act.length
    }
}
;
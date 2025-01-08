;
~
{ re:
    { id:  'do.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','sensation','composition']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -2.20070904
    , to:  -1.57831002208
    , at:  -0.008
    , is: "ionify's ~on.do.if api examination"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/do.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/do.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WERE considering sensed@on.ion@.s redesign to pass do:Function if:all"
        , "WERE adding ~on.do.if.any test(s)"
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  do:
    [ "~do: Function"
    , "~do: Function: named"
    , "~do: {}: oli: object-literal invocation"
    , "~do: {}: oli: named"
    , "~do: []: ali: array-literal invocation"
    , "~do: []: ali: named"
    , '~do: ["aesop: array-expressed storie or phrase"]'
    , '~on: i@ds do:Function if: all'
    , "~do: Function if: any on: inferred.text"
    , "~do: Function if: any on: intended.text"
    , "~do: Function if: #   on: term"
    ],

 "~do: Function":
    { do:function()
        { ~{log:"✅ ~do: Function"}
        }
    },

 "~do: Function: named":
    { do :'hey'
    , hey:function
      hi()
        { ~{log:"✅ ~do: Function: named"}
        }
    },

 "~do: {}: oli: object-literal invocation":
    { do:
    {log:"✅ ~do: {}: oli: object-literal invocation"}
    },

 "~do: {}: oli: named":
    { do  : 'went'
    , went: {log:"✅ ~do: {}: oli: named"}
    },

 "~do: []: ali: array-literal invocation":
    { do: [{log:"✅ ~do: []: ali: array-literal invocation"}]
    },

 "~do: []: ali: named":
    { do  : 'many'
    , many:[{log:"✅ ~do: []: ali: named"}]
    },

 '~do: ["aesop: array-expressed storie or phrase"]':
    { do    : ['aesop']
    , aesop : {log:'✅ ~do: ["aesop: array-expressed storie or phrase"]'}
    },

 '~on: i@ds do:Function if: all':
    [ { on: ['o@n.e','t@w.o','o@o.o'], if:'all'
      , do:function
        go( actions)
          { actions || (actions = go.in)
          ; (   actions ['o@n.e'] == 1
            &&  actions ['t@w.o'] == 2
            &&  actions ['o@o.o'] == 0.0
            )   ?  ~ {log  :'✅ ~on: i@ds do:Function if: all'}
                :  ~ {error:'❌ ~on: i@ds do:Function if: all', halt:false}
          ~ {no:go, on:this.on}
          }
      },
      [ {'o@n.e':1}
      , {'t@w.o':2}
      , {'o@o.o':0.0}
      ]
    ],

 "~do: Function if: any on: inferred.text":
    [ { on:'any.inferred.text',
        do: function
        d0( ion )
          { var via       = d0.with
              , tests     = via.our.tests
              , doing     = via.my.with.its.do
              , assertion = doing[doing.next]
            tests.do_if_any ? ++tests.do_if_any : tests.do_if_any = 1
            if (tests.do_if_any < 2) return; else delete tests.do_if_any
          ~ {log:["✅",assertion]}
          + { no:d0, on:via.my.on}
      }   }
    , {'any.inferred.text':'it happened!'}
    , {'any.inferred.text':'it happened!'}
    ],

 "~do: Function if: any on: intended.text":
    [ { on:'any.intended.text',
        if:'any',
        do: function
        d0( ion )
          { var via       = d0.with
              , tests     = via.our.tests
              , doing     = via.my.with.its.do
              , assertion = doing[doing.next]
            tests.do_if_any ? ++tests.do_if_any : tests.do_if_any = 1
            if (tests.do_if_any < 2) return; else delete tests.do_if_any
          ~ {log:["✅",assertion]}
          + { no:d0, on:via.my.on}
      }   }
    , {'any.intended.text':'it happened!'}
    , {'any.intended.text':'it happened!'}
    ],

 "~do: Function if: #   on: term":
    [ { on:['t@e.st']
      , if:2
      , do:function
        go( action)
          {  action || (action = go.in)
          ; (action.test > 2) && ~{log  :'✅ ~do: Function if: #   on: term'}
          ; (action.test < 2) && ~{error:'❌ ~do: Function if: #   on: term', halt:false}
          ~ {no:go, on:this.on}
          }
      }
      ,
      [ {'t@e.st':1, test:1}
      , {'t@e.st':2, test:2}
      , {'t@e.st':3, test:3}
      ]
    ]
}
;
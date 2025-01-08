;
~
{ re:
    { id:  'use@ionify'
    , of:  ['core','public','api']
    , as:  {sensation:-0.001, composition:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee@ionify.net', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.010
    , is: "enabling the use of an ion's thing(s)"
    , go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/use.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/use.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "must confirm ion id for each ~on:use before acting"
        , "will enable using with ion ids"
                ||+{use: 'wakatta.view@.show',      in: 'wakatta.game@'}
                  +{use: 'view@.thing', as: 'game.view@.thing'}
                  +{use: 'view@.show',  as: 'show', in: 'game@'}
        , "want ~use:{name :alias} in:object"
        , "want ~use:{name@:alias} in:[ions]"
        , "want ~use.from for non-ions & ions!"
                ||+{use: 'show', from: 'wakatta.view', in: 'game'}
        , "want ~get.then: ~use.in.as: helps wakatta & is like ajile's ImportAs"
                ||+
                  { use: 'thing'    || ['thing', ". . .", 'other.things']
                  ,  in:  this.item || 'ion.id@'
                  ,  as: 'alias'
                  }+
        + "have this already for ions via ~get.then: ~use? must check! 🤓👨🏾‍💻"
        + "want for non-ions too even if so!"
        ]
    },

  on:
    [ ['use', 'as', 'in']
  //, ['use', 'in']
  //,  'use'
    ],

  errors:
    { badAs: "can't ~use.as:[] with multiple ~use:[]"
    , badIn: "can only ~use.in:{} objects"
    },

  getOnUseStories:
    [ /note: a helper function for using ready-for-use things/
    , /todo: .../
    ],
  getOnUse:
    function getOnUse (use)
      { return function onUse (ion)
          { var name        = use.use
            use.in [use.as] = ion [name]
          ~ {no:use.no}
          }
      },

  okIn:
    { function: true
    , object  : true
    },

  "use as in stories":
    [ /note: Enables using ion things within objects via aliases/
    , /todo: Switch "use" + "as" loops? Might not have an "as"/
    , /todo: Enable +{use: "thing" || ["..."], in: [{}]} /
    , /todo: Enable +{use: "thing", as:["alias", "..."], in:{}} /
    , /todo: Handle +{use: thing(s), from:ion}/
    ],
  "use as in":
    function useAsIn (ion)
      { var USE     = useAsIn.with.its
          , errors  = USE.errors
          , onUse   = USE.getOnUse
          , validIn = USE.okIn
          , isArray = Array.isArray

        isArray (ion.as) && isArray (ion.use) && ~errors.badAs
        validIn [typeof ion.in]               || ~errors.badIn

        var use    = isArray (ion.use) ? ion.use : (ion.use = [ion.use])
          , as     = isArray (ion.as)  ? ion.as  : (ion.as  = [ion.as])
          , within = isArray (ion.in)  ? ion.in  : (ion.in  = [ion.in])
          , next   = within
          , last   = next.length
          , on

        for
          ( var inThing = -1, asThing
          ;  ++ inThing < last      ;
          )
          { within  = next [inThing]
            validIn [typeof within] || ~errors.badIn
            asThing = -1

                for (var  aliases = as.length; ++asThing < aliases;)
              { for (var     uses = use.length
                    ,       thing = -1
                    ,        name
                    ;     ++thing < uses;
                    )
                    { name        = use [thing]
                      on          = {on:name}
                      on  [name]  = onUse ({use:name, as:as[asThing] || name, in:within, no:on})
                      use [thing] = on
                    }
                ~use
              }
          }

        //; ("from" in use) || (use.from = from)
        return true
      },

  "use in stories":
    [ /note: Enables using things within a specific object/
    ],
  "use in":
    function useIn (ion)
      { return useIn.with.its ["use as in"] (ion);
      },

  useStories:
    [ /note: Enables using things within the current ion/
    , /todo: .../
    ],
  use:
    function onUse (ion)
      { ion.in = ion
        onUse.with.its ["use as in"] (ion)
      }
}
;
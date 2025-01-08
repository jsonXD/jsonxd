;
~
{ re:
    { id:  'on.do@ionify'
    , of: ['core','public','on.do','api']
    , as: {sensation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.010
    , is:
        [ "sensing ~{on:'ion', as:[], has:[], id:[], is:[], do:action, no:action}"
        ],
      it:
        [ 'sensor',  'sense', 'listen', 'handle', 'delegate', 'event', 'pubsub'
        , 'message', 'messaging'
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, code: 'https://github.com/ionify/ionify/blob/public/ions/on.do.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.do.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [" were about to implement ~on.id.do.no but..."
        ," will implement ~on.re.as.do.no next since it'll help ~on.re.as"

        ," were re-implementing ionify's ~on action per:"
        +"    https://github.com/orgs/ionify/projects/1#card-47996813"

        ," were ..."
        ," want ..."
        ," must ..."
        ," like ~re.of as ion sharing namespace; auto-add via method linking"
        ," like ~re.ex as a way to associate extra or external info with an ion"
        ," like ~re.go indicating via url or path this ion's current location."
        ," like ~re.im url or path as this ion's re.by identity module resolver"
        ," have ..."
        ," wont ..."
        ," cant ..."
        ],
      ex:
        [~/re.ex: ephemeral miscellaneous data holder used by ionify core/
        ]
      },

  valueOf:
    function on_do()
      {   delete this.valueOf
      ~ ( this.ionify.is.with = this )
          this.ionify.is ()
      },

  ionify:
    { re:
        { of: ['on.do', 'core']
        , is: ['method']
        , by: ['mike.lee','team']
        , on: -4.200709
        , to: -7.20211207
        , at: -0.1
        , it:
            [ "initializes ionify's ~on.as.has.id.is.do.no sensors"
            , "activates linking for this on.do@ ion"
            ],
          we:
            [ "were exploring moving each ~on.do.no.* to its own ion"
            ]
        },
      my:
        {
        },
      is:
        function ionify ()
          { var ondo  = ionify.with || (ionify.with = ionify == this.ionify ? this : null)
              , terms = ondo.TERMS
              , sense = ondo.ondo.is
              ; ondo  . link.is.with = ondo
              ; ondo  . link.is (ondo)

            for
              ( var term  in terms)
              { //~ {get:`on.do.no.${term}@ionify`, then:ondo.link, after:'each'}
                + {on:[['on',term,'do']], [`on ${term} do`]:sense}
                + {on:[['on',term,'no']], [`on ${term} no`]:sense}
              }

          //ondo.onion ({on:Object, do:ondo.onion})
          }
    },

  TERMS:
    { as:true, has:true, id:true, is:true
    },

  ondo:
    { re:
        { id:  'on.as.has.id.is.do.no'
        , of: ['on.do', 'core']
        , is: ['sensor','method']
        , by: ['mike.lee','team']
        , on: -4.200709
        , to: -8.20211207
        , at: -0.1
        , it: "senses ~{on:'ion',as:[],has:[],id:[],is:[],do:action,no:action}"
        , we:
            [ "were ..."
            , "will ..."
            , "must delegate to other sensors based on the type specified by ~on"
            , "must fix ion.on & ion.on$ 🐛's that override user-defined values!"
            ]
        },
      my:
        { TYPE:
            { function: (/function\s+(.*)]/)
            ,   object: (  /object\s+(.*)]/)
            },
          getType: Object.prototype.toString
        },
      is:
        function on_do (ion)
          { var ondo  = on_do.with
              , my    = on_do.my
              , on    = ion.on
              , which = my.getType
              , TYPE  = my.TYPE
              , type

            (typeof on     != 'string')
                &&((type    =  which.call (on) .match (TYPE.function))
                || (type    =  which.call (on) .match (TYPE.object  )))
                && (type    = type [1])
                && (ion.on$ = on      )
                && (ion.on  = type    )

            var sense, terms = ondo.TERMS
            for
              ( var term in terms)
              { if (! ion[term] && ! (term in ion)) continue
                sense = ondo [term]
                sense ( ion  )
              }
return
            [" ~{on:'ion', has:[]} <~ {on:'Object', has:[]} <~ {on:Object, has:[]} "]+
            ` Prepopulate types list with ion & Object
            `
            if (! kept [type]) /check for environment Type/  //return on  [type] (ion);
            ~ {on:     'ion', do:onion}
            + {on:  'action', do:onFunction}
            + {on:  'Object', do:onType}
            ~ {on:'function', do:onType}
          }
    },

  as:
    { re:
        { id:  'on.as.do.no@ionify'
        , of: ['on.do', 'core']
        , is: ['sensor','method']
        , by: ['mike.lee','team']
        , on: -4.200709
        , to: -8.20211207
        , at: -0.1
        , it: "senses ~{on:'ion', as:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will explore ~re.of groups"
            , "must fix partial🐛matching"
            , "like ~on.as.all.any.do.no🥳"
            , "must implement ~re.as find"
            , "must implement   ~on.as.no"
            , "like making it its own ion"
            , "have implemented few tests"
            , "have implemented ~on.as.do"
            ]
        },
      my:
        { find$:
            function find$ (haz, doo)
              { return find
                function find (ion)
                  { var as  = ion.as
                      , a   = as.length
                      , has = haz.as
                      , it  = haz.it

                    while
                      ( (has [as[--a]] ||  as[a] in has) && --it, a )
                      ; (haz .it && !a || !it)   && doo (ion)
                  }
              },
          kept:
            {},
          keep:
            function keep (as, kept)
              { for
                ( var a=-1, A=as.length
                ;   ++a  <  A
                ; kept.as [as[a]] = true
                );
              }
        },
      is:
        function as (ion)
          { var no   =  ion.no
              , az   =  ion.as
              ; az  && !Array.isArray (az) && (az = [az])

            var them =  az.join()
              , my   =  as.my
              , kept =  my.kept

            !kept [them] &&  my.keep  (az, kept [them] = {as:{}, it:az.length})
          ~ { on: 'as' , as: my.find$ (my. kept [them] , ion.do  || no)}
          }
    },

  has:
    { re:
        { id:  'on.has.do.no'
        , of:  'ionify.net'
        , is: ['sensor','method']
        , by: ['mike.lee','team']
        , on:  -4.200709
        , to:  -7.20211207
        , at:  -0.1
        , it:
            [ "senses ~{on:'ion', has:[], do:action, no:action}"
            ],
          we:
            [ "must convert ~on.has.term_groups' objects to String 2 not invoke"
            , "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function has (ion)
          { var haz   = ion.has
              , doo   = ion.do
              , sense ={on:[]}

            Array.isArray (haz) || (haz = [haz])

            for
              ( var h=-1, H=haz.length, term
              ;   ++h   < H;
              )
              { term = haz [h]
                Array.isArray (term) && (term = term.join (' '))
                sense.on.push (haz [h])
                sense [term] = doo
              }~sense
          }
    },

  id:
    { re:
        { id:  'on.id.do.no'
        , of: ['on.do', 'core']
        , is: ['sensor','method']
        , by: ['mike.lee','team']
        , on: -4.200709
        , to: -7.20211207
        , at: -0.1
        , it: "senses ~{on:'ion', id:[], do:action, no:action}"
        , we:
            [ "must ..."
            , "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function id (ion)
          { var ondo  = id.with
              , my    = id.my
              , on    = ion.on
              , iD    = ion.id
              , doo   = ion.do
          }
    },

  is:
    { re:
        { id: 'on.is.do.no'
        , of: ['on.do', 'core']
        , is: 'method'
        , it: "senses ~{on:'ion', is:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function is (ion)
          { var ondo  = is.with
              , my    = is.my
              , on    = ion.on
              , iz    = ion.is
              , doo   = ion.do
          }
    },

  onion:
    { re:
        { id: 'on.ion'
        , of: ['on', 'core']
        , as:
            [ 'sensor',  'sense', 'listen', 'handle', 'delegate', 'event', 'pubsub'
            , 'message', 'messaging'
            ],
          is:
            [ 'sensor',  'method'
            ],
          we:
            [ "want to have this replacing on.ion@'s ion sensor but not sure how to"
            , "must enable  ~{on:Type,   no:action} so ionify won't sense that Type"
            , "have enabled ~{on:Type,   do:action} so ionify can   sense that Type"
            , "have enabled ~{on:Type, Type:action} so ionify can   sense that Type"
            ]
          },
      my:
        { core: {Function:'function', Object:'object'}
        , name: (/function\s+(.*)\s*\(/)
        , undo: {}
        },
      is:
        function onion (ion)
          { var ondo    = onion.with
              ||        ( onion.with = onion == this.onSensor ? this : null)
              , my      = onion.my
              , core    = my.core
              , name    = my.name
              , undo    = my.undo
              , known   = onion.our.ionified
              , Sensor  = ion.on
              , type    = Sensor.name     || String (Sensor).match (name)[1]
              ; undo  [type]              =  Sensor.prototype.valueOf
              ; Sensor.prototype.valueOf  =  ion [type] || ion.do
              ; known [type]              =  true
              ; known [core [type]]       =  !!core [type]

          ~ {debug: ["onion", type, JSON.stringify (known)] }
            return true
          }
    },

  link:
    { re:
        { id:  'ion.link@ionify'
        , of: ['core']
        , as: ["literate", "software", "program", "context", "link"]
        , is:  'method'
        , by: ['mike👨🏾‍💻lee', 'team']
        , on:  -4.200709
        , to:  -8.20211207
        , at:  -0.03
        , it:
            [ "enables defining modular, encapsulated & descriptive code"
            , "links code's implementation & description for easy access"
            ],
          we:
            [ "were moving this to its own ion & applying it to all ion methods"
            , "want to apply this to all ionified ions"
            , "know applying this is now as easy as on:*!!! 🙇🏾‍♂️👨🏾‍💻🤲🏾🤓"
            , "like alot this sion: structured ion implementation, including re.*"
            , "want to incorporate .our:domain+re.of's spaces alongside .my:own"
            , "must ..."
            , "will ..."
            , "HAVE implemented its initial working version 🙌🏾 ENJOY 🤲🏾"
            , "wont ..."
            , "cant ..."
            ]
        },
      my:
        { types:
            { method  : true
            , function: true
            , object  : true
            }
        },
      is:
        function link (ion)
          { var is, my, thing, type
              , host  = link.with
              , types = host.link.my.types

            for
              ( var term in ion )
              { if (term == 're' || ~term.indexOf('@')) continue

                thing = ion [term]
                type  = thing.re && thing.re.is

                Array.isArray (type) || (type = [type])
                thing.is && type.push (typeof thing.is)

                for
                  ( var t=type.length
                  ;     t--   ;
                  ) if (types [type [t]]) break
                  ; if (t < 0)         continue

                my         =   thing.my
                my         || (my = thing.my = {})
                my.me      =   thing
                my.me.re   =   thing.re || (thing.re = {})

                is         = thing.is
                is.my      = my
                is.our     = thing.our || {}
                is.with    = ion
                ion [term] = is

                delete thing.is
                delete thing.our
              }
          }
    },
}
;
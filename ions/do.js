;
~
{ re:
    { hi:   true
    , id:  'do@ionify'
    , of: ['core','public','api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -2.20070904
    , to:  -1.57831004408
    , at:  -0.100
    , do: {transcription:-0.001}
    , as: {sensation:-0.001, composition:-0.001}
    , is:
        [ "implementing ~on.do.if to do an act if sensing specific condition(s)"
        ,
        , "implementing:"
        , "   ~ {on:['ids'+|'terms'], do:action, if:'all'|'any'|'each'|'1..n'}"
        , "   + {on: 'action.name' | aesops, do: 'action.name' | action}"
        , "   + {do: 'action.name' | action, for: object }"
        , "   + {do: 'action.name' | action}"
        ],
      go:
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
        [ "HAVE fixed .if() ~no regresssion"
        , "HAVE fixed .do_if_all()"
        , "HAVE added ~do.for in preparation for on@ ++modularization"
        , "HAVE replaced ~do.for       <= .go({do,with})"
        , "HAVE replaced ~on.if.do     <= ~on.after.do"
        , "HAVE replaced ~on.if:all.do <= ~on:[...,...].do"
        , "HAVE replaced ~on.if:any.do <= ~on:''.do & ~on:[''].do"

        , "MUSE 🤔 is ~on.if:+2.do communicating if 2 or more occurrences?"
        , "MUSE 🤔 is ~on.at: 2.do communicating if 2         occurrences?"
        , "MUSE 🤔 is ~on.if:-2.do communicating if 2 or less occurrences?"
        , "MUSE 🤔 is .if() ready to re-enable find ({find:todo, in:ion})?"

        ,
        [ "were 👨🏾‍💻 contemplating how to design ~on.if:all.do...it's curently"
        , "made to sense a list of ids in multiple ions, not a list of terms in"
        , "1 or more ions..."
        ,
        , "muse 🤔 should we do something like:..."
        ,         {on:[['terms','in','ion'], 'ion@doma.in'], do:'action'}
        , "then treat nested arrays as all-terms-for-one-ion & '@'-presence as"
        , "an id match?"
        ,
        , "muse 🤔 should sensed@on.ion@ react with ion AND matched term? 👈🏾🙇🏾‍♂️"
        ]
        , "were ..."
        , "must ..."
        , "will ..."
        , "like + {if:['condition.name'|condition], do:action}"
        ]
    },

  with:
    { my:
        { ensure:
            {        '':'all'
            ,       all:'all'
            ,       any:'any'
            ,      null:'all'
            ,    number:'number'
            , undefined:'all'
            }
        },
      the:
        { tools:
            { do  :     'do@@'
            , act : 'do for@@'
            , if  :     'if@@'
            }
        }
    },

  on:
    [ ['on', 'do', 'if' ]
    , ['on', 'do'       ]
    , [      'do', 'for']
    , [      'do', 'if' ]
    ,        'do'
    ]
    ,  'on do if': 'if'
    ,  'on do'   : 'if'
    ,  'do for'  :'act'
    ,

  ionify:function
  ionify()
    { var me        = this
        , tools     = me.with.the.tools
        ; tools.do  = me.do
        ; tools.act = me.act
        ; tools.if  = me.if
    },

  do:function
  d0( action)
    { var todo  =    action.do
          todo  && ! d0.with.our.ionified [typeof todo]
                && +{find:todo, in:action, as:'do'}
                &&  (todo = action.do)
        ~ todo
      return true
    },

  act:function
  act (ion)
    { var r
        , d0  = ion.do
        , f0r = ion.for
        , as  = d0.with ? d0.with.my : f0r
        ; typeof  d0  ==  'function'
            ? r = d0.apply(as, [f0r])
            : r = d0  &&  (d0.hasOwnProperty ('in') ||  (d0.in = f0r))
                      &&  +d0
      return r
    },

 'do if':function
  do_if (action)
    { action || ( action = this )
      action.on = action.if
      action.if = 'all'
      do_if.with.my.if.call (action)
    },

  if :function
 _if_(action)
    { action || (action = this)

      var iF    = action.if
        , on    = action.on
        , ions  = Array.isArray (on) ? on : [on]
      iF || (iF = ions.length > 1 ? 'all' : 'any')

      var via=_if_.with
      via.the.tools.sensible ({sensible:'do', in:action})

      var d0 = action.do
      if(!d0) return void + {warn: ["+on.do.if: unable to find", action.do]}

      var i     = via.my
        , sense = i.ensure [iF] || i.ensure [typeof iF] || 'all'
        , ready = i[sense] (action)

      for ( var next=-1,  last=ions.length, term
          ;   ++next  <   last
          ;     term  =   ions[next]
          , Array.isArray (term) && (term = term.join (' '))
          , action[term] = ready
          );

      delete action.do
      ready.for = d0
    ~ action
      action.do = ready
    },

  forget: function
  forget(sensation)
    { for
        ( var d0    = sensation.do.for
        ,     on    = sensation.on
        ,     next  = Array.isArray (on) ? on : [on]
        ,     sense = next.length
        ;     sense-->0
        ; + { no:d0 , on:next[sense] }
        );    delete  sensation.do.for
    },

  all :function
  all (sensation)
    { var via   = all.with
        , our   = via.our
        , i     = via.my
        , got   = {}
        , done  = false
        , d0    = sensation.do
        , on    = sensation.on
        , ions  = Array.isArray (on) ? on : [on]
        , size  = ions.length
        , debug = our.logging && our.logging.debug
                ? via.the.tools.debug
                : via.all.nope

      return function

      do_if_all
        ( ion)
        { if (done) return  //NOTE a duplicate script | sensation reaction

          var   id  =(ion.re && (ion.re.id.name || ion.re.id)) || this.id
          ions [id] = ion
          got  [id] = true

          debug ({debug: ["\nget:", ions, "\ngot:", Object.keys (got)]})

          for ( var next = -1
              ;  ++ next < size
              ;
              ) if (!got [ions [next]]) return

          done = true       //NOTE X duplicate script | sensation reaction(s)
        ~ do_if_all.and     //NOTE deduplicate script + sensation reactions
          i.forget(sensation)
          i.act   ({do:d0, for: size == 1 ? ion : ions})
      //~ do_if_all.and     //NOTE deduplicate script + sensation reactions

          delete  do_if_all.for
        }
    },

  any :function
  any (action)
    { var d0  = action.do
        , act = any.with.my.act

      return function

      do_if_any
        ( ion )
        { act ({do:d0, for:ion})
        ~ do_if_any.and
          return true
        }
    },

  number :function
  number (sensation)
    { var i     = number.with.my
        , forget= i.forget
        , act   = i.act
        , count = 0

      return function

      do_if_counted
        ( ion)
        { if (isNaN (sensation.if) || (++count <= sensation.if)) return false
          var d0 = sensation.do.for
          forget  (sensation)
          act     ({do:d0, for:ion})
        ~ do_if_counted.and
          return true
        }
    }
}
;
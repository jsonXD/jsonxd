;
~
{ re:
    { id:  're.do.as.of@ionify'
    , of: ['core','public','sion','context','api']
    , as: {specification:-0.001, sensation:-0.001, convention:-0.001}
    , by: ['🙇🏾‍♂️🎊 יהוה 🎉🤲🏾', 'mike🇬🇾👨🏾‍💻🇺🇸lee', 'team✨ionify']
    , on:  {200709.2    : -4}
    , to:  {578311222.1 : -8}
    , at:  -0.016
    , is:
        [ "ionify's re: .do@ .as@ .of@ api conformation@ convention@s"
        , "creating and-or connecting an ion's re.of-stated ionosphere groups"
        , "~get.ing re.as relations enabling   the ion's ionosphere-interaction"
        , "~get.ing re.do relations activating the ion's capabilities"
        , "interpreting re.do & re.as arrays as ~get.in:sequence relations"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/re.of.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/re.do.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/re.as.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.do.as.of.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were"
        , "must"
        , "will"
        , "plan"
        , "want"
        , "like"
        , "muse"
        ,
        , "were exploring re.to instantiation@s; hebrew++"
        , "MUST create tests for ions' observation suspension"
        , "MUST create tests for ions' relations ~get.ing confirmation"
        , "WILL MOVE .resolve() to get@ since it should primarily do resolution"
        , "WILL MOVE so@re@ here to be re.do & re.as validation@ convention@s"
        ,
        [ "WANT re.do+as: 'relation, ...'=sequential & 'relation ...'=parallel"
        , "NOTE re.do+as text-parsing logic is in so@re@ionify"
        , "WILL update codes@readme.md@ionify once ☝🏾 implemented"
        ]
        , "WANT fast⏱ tag & skip of relation groups already in:lined & dom@ined"
        ,
        [ "NOTE re.do won't re~get ions unless ions state ~get: once, every, batch, ..."
        ,
        ,     " once: ~get the ion only 1 time in an application session"
        ,     "every: ~get the ion every  time it's requested"
        ,     "batch: ~get the ion once per ~get:[] batch"
        ,
        , "normal applications'll likely expect batch behavior, so its default."
        , "configurations state ~get behavior for their @domain & re.of:groups"
        ],
        [ "muse how to re.do like do.get: ./ionify/,./proof/app/add.savi.adopt?"
        , "like relation@s of id@[path|domain] resolving paths before domains,"
        , "then re.do: ['ions@ionify', 'add.savi.adopt@app'] 🙇🏾‍♂️ יהוה 🤲🏾"
        , "like re.do: '@[path|domain] meaning ions@[path|domain]'"
        ],
        [ "want re.of.* & with.the.* converted to name@ion.re.domain.name"
        , "unless they already are. all groups are name@domain where domain can"
        , "be blank. ~name.search (/@/) ||  (name += domain.full)."
        , "must consider dot.notation nested.group access & naming; .@ how?"
        ]
        ]
    },

  on:
 '*',
 '*':function
  re( ion )
    { var via   = re.with
        , sense = via.its

      via.our.acquisition.gots [ion.re.id] = true
      sense.of (ion)
      sense.as (ion)
      sense.d0 (ion)
    },

  of:function
  of( ion )
    { var groups  = of.with.our.spaces
        , domain  = ion.re.id.domain.name
        , ofs     = ion.re.of
        , via     = ion.with
        , ins     = via.in || (via.in = {})
        , the     = via.the
        , group   , name

      ins.domain  =
      ofs.domain  = domain == ''
                  ? via.all
                  : ins[domain] = ofs[domain] = the[domain]

      for //🙇🏾‍♂️ resolve re.ofs to with.in, re.of & with.the collection@s 👨🏾‍💻
        ( var f=-1, F=ofs.length
        ;  ++ f  <  F;
        )
        { name = ofs [f]
          if (!name) continue
          group  = groups [name]

          group || name in groups ||
         (group =  groups [name]  = {})

          ins [name]  =  ofs[name] = group
        }
    },

  as:function
  as( ion )
    { as.with.its.via ({for:ion, from:ion.re.as})
    },

  d0:function
  d0( ion )
    { d0.with.its.via ({for:ion, from:ion.re.do})
    },

  via:function
  via(relation)
    { var ion         = relation.for
        , re          = ion.re
        , id          = re.id
        , domain      = id.domain.full
        , from        = relation.from
        , through     = via.with
        , our         = through.our
        , i           = through.its
        , suspensions = our.states.suspension
        , acquisition = our.acquisition
        , how         = acquisition.order [Array.isArray (from)]
        , ions        = i.resolve ({get:from, at:domain})
        ; id          = id.name

      if(!ions.length) return false

      suspensions [id] = ion
      acquisition({get:ions, from:domain, in:how, then:i.resume(id)})
    },

  resume :function
  resume (id)
    { function resuming (ions)
        { delete resuming.suspensions [resuming.id]
        !(ions instanceof Error)
        ?   resuming.ionify (resuming.ion)
        :   +{ error:["~get unsuccessful for",resuming.id,"relation@\n  ",ions]
             , halt :false
        }    }

      resuming.id           = id
      resuming.suspensions  = resume.with.our.states.suspension
      resuming.ion          = resuming.suspensions [id]
      resuming.ionify       = resume.with.our.tools.sensed
      return resuming
    },

  resolve :function
  resolve (it)
    { var  via        = resolve.with
        ,  relations  = via.our.configuration.relation
      if( !relations  ) return

      var group
        , gets  = via.our.acquisition.gets
        , gots  = via.our.acquisition.gots
        , NAME  =(/(.*)@$/)
        , ionify='@ionify'
        , domain= it.at
        , get   = it.get
        , array = Array.isArray (get)
        , want  = []

      for
        ( var relation in get )
        { if( array ? isFinite (relation) : !get.hasOwnProperty (relation))
              continue

          group = relations [relation] || [relation]

          for
            ( var g=-1, was=relation
            ;  ++ g  <  group.length;
            )
            { if(   (relation = group[g])
                && !~relation.indexOf('@')                  //⏱fast: it's a relation group alias     🙇🏾‍♂️ ה 🤲🏾
                &&  (relation = relations [relation])       //⏱fast: get the group for in-lining     🙇🏾‍♂️ ה 🤲🏾
                &&   relation.unshift (g, 1)                //🛠es.2019.array.flat.es.5.polyfill.start🙇🏾‍♂️ ה 🤲🏾
                &&  (group.splice.apply (group, relation))  //⏱fast: in-line alias with relation(s)  🙇🏾‍♂️ ה 🤲🏾
                &&  (relation.shift(), relation.shift())    //🛠es.2019.array.flat.es.5.polyfill.stop 🙇🏾‍♂️ ה 🤲🏾
                &&  (g -= 1)  //🙇🏾‍♂️ יהוה 🤲🏾 nested aliases resolve by not skipping relation group
                )   continue

              (relation = group[g])
                &&  ( group[g]
                    = relation
                    = relation.replace (NAME, '$1' + (was == group[g] ? domain
                                                                      : ionify))
                    )
                &&  !gots [relation]
                &&  !want [relation]
                &&   want.push (relation)
                &&  (want [relation] = want.length-1)
            }
        }

      return want
    }
}
;
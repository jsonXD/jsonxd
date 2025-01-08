;
~
{ re:
    { id:  'next.id@ionify'
    , of: ['public','tools','api']
    , as: {sion:-0.001, sensation:0.001, composition:0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -2.20160910707
    , to:  -1.57831005508
    , at:  -0.100
    , is:
        [ "doing on-request sequential namespaced id generation"
        , "returning the numeric sequential id"

        , '+{next: "id.prefix", id: object}'

        , "recommended for use with + invocation to receive actual numeric id"
        , "recommended for use with -~... invocations if numeric id not needed"
        ],
      we:
        [ "want to encapsulate its internal members, i.e. MAX, MIN, ids"
        , "like valueOf switching nextid creating a private internals closure"
        ]
    }

, on  : [['next', 'id']]
, MAX : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids : {},

  with:
    { the:
        { tools:
            { nextid: 'next id@next.id@'
            }
        }
    },

  valueOf :function
  nextid  ()
    { this.with.the.tools.nextid = this ['next id']
      this ['next id'].with = {its:this, the:this.with.the}
      delete this.valueOf  <=  this
    },

 'next id':function
  nextid (action)
    { var my   = nextid.with.its
        , ids  = my.ids
        , name = action.next
        , f0r  = action.id.re || (action.id.re = {})
        , id   = ids [name]

    ; (id >= my.MAX)  && (id = ids [name] = null)
    ; isNaN (id)      && (id = ids [name] = my.MIN)
    ;    f0r.id = name + (id > 0 ? '.' : '') + id
    ; return ids [name]++
    }
}
;
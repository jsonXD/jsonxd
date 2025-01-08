;
~
{'link.test@ionify':
    { of: ['tests','core','context','sensation','composition']
    , as: {examination:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -28.202112051
    , to:  -18.578309204
    , at:  - 0.06
    , is:  "ionify's ~link.to api examination"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ 'want tests to be done without being specified via a ~do'
        ]
    },

  with:
    { my:
        { from:
          { array     : Array
          , boolean   : false
          , function  : Function
          , number    : Infinity
          , object    : Object
          , regex     : /regex/
          , string    : String
          , undefined : void 0
          }
        }
    },

  do:
    [ 'link name'
    , 'link *'
    , 'link * with exceptions'
    , 'link to'
    , 'link to object'
    , 'link to *'
    ],

 'link to object' :function
  link_to_object  ()
    { var   to = {}
        , from = link_to_object.with.my.from
        ; Object.freeze (from)

      ~
      { link: {number:from.number}
      ,   to: (+to, to.re.id)
      }

      to.with.in.domain.number == from.number
        ? +{log  : '✅ ~link: to:object'}
        : +{error: '❌ ~link: to:object', halt:false}
    },

 'link to *'   :function
  link_to_all  ()
    { var from    = link_to_all.with.my.from
        , to      = {}
        , to_our  = (+to, to.with.in.domain)

      ~ {link:from, to:'*'}

      for (var thing in from)
          if(from.hasOwnProperty (thing) && from [thing] != to_our [thing])
              return + {error: '❌ ~link: to:*', halt:false}
      ~ {log: '✅ ~link: to:*'}
    }
}
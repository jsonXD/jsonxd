;
~
{ re:
    { id:  'on.errors@ionify'
    , of: ['core','public','api']
    , as: {malfunction:-0.001, sensation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -41.200709
    , to:  - 8.578309101
    , at:  - 0.008
    , is:
        [ "converting messages to Error objects"
        , "usage:"
        ,     { errors:
                  { error1: "1st error"
                  , error2: "2nd error"
                  , error3: "3rd error"
                  }
              }
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "will ..."
        ]
    },

  on:
 'errors',
  errors :function
  errors  ( ion )
    { var next = ion.errors
      for (var error in next)
        next [ error ] = new Error (String (next [error]))
    }
}
;
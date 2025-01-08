;
~
{ re:
  { id:  'on.do.test@ionify'
  , of: ['tests','core','conduit','sensation','composition']
  , as: {examination:-0.001}
  , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
  , on:  -4.200709
  , to:  -8.20221122
  , at:  -0.07
  , is:
      [ "ionify's ~on.as.has.id.is.do.no api examination"
      ],
    go:
      { meet: 'https://meet.ionify.net/'
      , seek: 'https://seek.ionify.net/'
      , deal: 'https://deal.ionify.net/'
      , help: 'https://help.ionify.net/'
      , test: 'https://github.com/ionify/ionify/blob/public/ions/on.do.test.js'
      , code: 'https://github.com/ionify/ionify/blob/public/ions/on.do.js'
      , plan: 'https://plan.ionify.net/'
      , join: 'https://join.ionify.net/'
      , team: 'https://team.ionify.net/'
      },
    we:
      [ "were examining ~on.as ¿partial 🐛 matching?"
      , "must ..."
      , "like ..."
      , "have ..."
      , "wont ..."
      ]
  },

  do:
    [ 'make ~on.as.has.id.is.do.no sensors'
    , 'test ~on.has.do'
    , 'test ~on. as.do'
    ],

  'make ~on.as.has.id.is.do.no sensors':
    function on_do_test_setup ()
      { +   {on:'ion',  as:[], do:Object}
        |   {on:'ion',  as:[], no:Object}
        |   {on:'ion', has:[], no:Object}
        |   {on:'ion',  id:[], do:Object}
        |   {on:'ion',  id:[], no:Object}
        |   {on:'ion',  is:[], do:Object}
        |   {on:'ion',  is:[], no:Object}
      },

  'test ~on.has.do':
    function on_has_do_test ()
      { function has (ion) { console.log (`on.has: 👏🏾👨🏾‍💻🎉 ${Object.keys (ion)}`) }
        ~
        {  on: 'ion'
        , has:['this',['is','an'],['on','has'],'test']
        ,  do:  has
        }

        ~   {this:0           }
        |   {is:0,an:false    }
        |   {on:0,has:0,test:0}
        +   {test:0           }

        ~   {no:has, on:'ion'}
      },

  'test ~on. as.do':
    function on_as_do_test ()
      { ~
        { on: 'ion'
        , as:['this','is','an','on','as','test']
        , do:  function (ion) { console.log (`on.as : 👏🏾👨🏾‍💻🎉 ${ion.as}`) }
        }

        ^ {as:['this','is','an','on','as','test']                 }
        ~ {as:['this'], re:{as:'the real one'}                    }
        | {as:['this','is','almost','as','test']                  }
        + {as:['galore','this','is','an','on','as','test','more'] }
      }
}
;
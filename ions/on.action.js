;
~
{ re:
    { id:  'on.action@ionify'
    , of: ['core', 'public', 'observation', 'api']
    , do: {transcription:-0.001}
    , as: {observation  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -2.20070904
    , to:  -1.20220928508
    , at:  -0.026
    , is:
        [ "🙇🏾‍♂️ ion: invoked object notation invocation for your functions🤲🏾"
        , "enabling e.g. ~go for go() with its home|association@ as its 'this'"
        , "enabling all input types, but always .apply's with an array"
        , "enabling input via ion.in & setting output via ion.out"
        , 'enabling more actions to have similar interaction interfaces'
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.action.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.action.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "will create or identify any existing function id; read ECMA-262 [] spec.    "
        ,
        [ "need to fix ~[777].pop = ~[777].prototype.pop() = TypeError; this != [777]. "
        ,
        , "   var xdf = {length:999, 998:'yoooooh'}; "
        , "   ion.apply(xdf); 'yoooooh'; xdf.length == 998"
        ,
        , "   var p7p = [777].pop;"
        , "   p7p()"
        ,
        , "   Uncaught TypeError: Cannot convert undefined or null to object"
        , "     at pop (<anonymous>)"
        , "     at <anonymous>:1:1"
        ],
        [ "like to sense objects without their own method then create own method with"
        , "   .ion=object that calls its inherited method with this=ion."
        ],
        [ "like that ~Function + this.apply() can do interesting things like"
        , "   recursively applying itself! Not sure when that'd be valuable but"
        , "   interesting to explore 👨🏾‍💻🤓:"
        ,             Object.prototype.toString.call ([777].__proto__)
        ]
        ]
    },

  on:
    Function,
    Function:
    function
    act (ion)
        {ion || (ion = this)

          //👨🏾‍🏫 sionify functions with .re .with.*
          Object.prototype.valueOf.apply (ion)
          //🙇🏾‍♂️ indicates observation delegation 👨🏾‍💻

          ion.     in             ||
          'in'     in     ion     || (ion.in = ion)

          var via   = act.with
            , our   = via.our
            , ins   =[ion.in]
            , id    = ion.re.id
            , my    = ion.with.my ||  our.space (id || '')
            , name  = ion.name    || 'action'
            , got   = ion.apply (my, ins)
            , debug = {debug:['+',id, ':', name, '(',ins,') =>', got]}
            , debugging =   Boolean (our.logging && our.logging.debug)
            ; debugging &&  via.the.tools.debug (debug)

          return (ion.out = got)
        }
}
;
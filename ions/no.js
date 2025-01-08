;
~
{ re:
    { id:  'no@ionify'
    , of: ['core','public','api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , as: {sensation:-0.001, composition:-0.001, specification:-0.001}
    , on:  -2.20070904
    , to:  -1.58731001108
    , at:  -0.053
    , is:
        [ "ionify's public ~on.no action"
        , "disabling all reactions to the specified sensation"
        , "disabling the convention with the specified reaction"
        , "planned to be shared as no() via the tools group"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/no.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/no.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "PLAN 👨🏾‍💻 to share to @ionify group for direct-invocation in do@++"
        , "MUST 👨🏾‍💻 enable deactivating any & all observation@s, aka ~on:Type's"
        , "MUSE 🤔 if all reactions are removed, also remove known words?"
        , "WARN 🚨 removing known words before all sensations disables remaining"
        , "NOTE 💡 it may be wise & prudent to keep known words for cap context"
        , "like 🧹 noting senseless known words for removal for 🧹+⏩ performance"
        , "like ⏩ that removing known words hastens sensation detection"
        , "LIKE 🧹 noting empty reaction spots & refilling via ~on vs by .push()"
        , "MUSE 👍🏾{no:act, on:'term'} | 🤔{no:{term:act} | ~{on:'term',dont:act}"
        , "LIKE 🤓 how ~{no:{term:act}} enables deactivating multiple sensations"
        , "like 🤔 the idea of resolving ~{no: 'with.its:my@this?'} for on:[,,,]"
        ]
    },

  with:
    { the:
        { tools:
            { no: 'no@@'
            }
        }
    },

  on:
    [['no','on']]
    , 'no on'
    : 'no'
    ,

  no :function
  no (sensation)
   {  var our = no.with.our
        , on  = String (sensation.on)
        , n0  =         sensation.no

      if (!n0 && !('no' in sensation)) return sensation

      // clear ~on:*
      var does       = our.does
        , convention = does[on]
        ;
      if( convention || (on in does))
        { does  [convention] = null
        ; delete does   [on]
        }

      // clear ~on:name
      var words       = our.known
        , sensations  = our.senses
        , reactions   = sensations[on]
        , removed     = 0

      if  (!reactions && !(on in sensations)) return

      for ( var reaction
          ,     R     = reactions.length
          ;     R    --
          ;(reaction  = reactions[R]) &&
           (n0      === reaction      ||
            n0      === reaction.for) && (reactions[R] = null)
          , null    === reactions[R]  &&  removed++
          );

      removed - reactions.length          || delete sensations [on] //&&
    //words[on] && words[on].length == 1  && delete      words [on]
    //WARN! 🚨removing☝🏾known☝🏾words before all👆🏾sensations👆🏾disables😬remaining🚨
    }
}
;
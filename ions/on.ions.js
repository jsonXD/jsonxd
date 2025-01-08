;
~
{ re:
    { id:  'on.ions@ionify'
    , of: ['core','public','api']
    , as: {sensation:-0.001, convention:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on:  -2.20070904
    , to:  -1.57831006608
    , at:  -0.009
    , is:
        [ "sensing configuration@s, applying and-or sharing their settings"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.ions.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ions.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL confirm that on:* + re.as.configuration indeed delivers "
        + "domain-specific configuration@s via id@doma.in vs prior ions@ style."

        , "KNOW there's unexpected errors when ionify's configuration has an "
        + "ions@ionify id. maybe this resets the @ionify space...YES via"
        + "spaces@ions@ionify which tries to reset 'spaces' in @ionify..."

        , "MUST FIX sensing single ions@ id putting all configurations in an "
        + "unnamed ¿with.all? shared domain space."

        , "MUST FIX ~on:ions@ overriding domains & paths in common '' domain."
        , "like ~on sensing ion.as + ion.id:ions@doma.in for domain-configs."

        , "were ..."
        , "must ..."
        , "will ..."
        , "know ..."
        , "LIKE re.do: {ions:true} to ~get application@.s configuration@"
        , "have ..."
        , "want ..."
        , "wont ..."
        ]
    },

  on:
  '*',
  '*':function
  configure (settings)
      { if (!settings.re.as.configuration) return

        var id    = settings.re.id
          , at    = id.domain.name
          , via   = configure.with
          , our   = via.our
          , space = via.the [at ||'all'] || (via.the [at] = {})
          , skip  = our.skip    || via.all.none
          , configuration
          ; space.configuration || (space.configuration = {})

        for
          (  var  setting in settings)
          {!skip [setting]
              &&!~setting.indexOf('@')  //🚨alternate re@ object model
              &&  settings.hasOwnProperty (setting)
              && 'function' != typeof (configuration = settings [setting])
              &&!(setting == 'spaces' && space == our &&
                   ({warn:true}+
                    {warn:
                        ["🚨🛡 ionosphere 🛡🚨",id.name, "tried setting"
                        ,setting,"in the", at,"space"
                        ,"placing in the 'all' space instead & warning..."
                        //🤔 should we keep it instead & if so, where?...
                    ]   }+
                    {warn:configuration},
                    ((via.all[setting] = configuration), true))
                  )
              && (space[setting] = configuration, space.configuration[setting] = configuration)
          }

        ~ settings.logging
      }
}
;
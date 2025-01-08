;
~
{ re:
    { id:  'sensible.test@ionify'
    , of: ['core', 'public', 'sensation', 'api', 'tests']
    , do: {     action:true, transcription:true}
    , as: {examination:true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', '🇬🇾micha🙇🏾‍♂️el🤲🏾lee🇺🇸', 'team✨ionify']
    , on: {578409165.3081110 : 202412195.3088330}
    , to: {578409165.3081110 : 202412195.3088330}
    , at: -0.001
    , is:
        [ "ionify's ~{sensible:value|'term', as:'alias', in:object} api examination"
        , "examining "
        ]
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , know: 'https://know.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/sensible.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were producing initial implementation..."
        , "MUST implement remaining tests per re.go.help.issue.27@@"
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  do:
    [ "~sensible: value"
    , "~sensible: 'term' in object"
    , "~sensible: 'term' in object as 'alias'"
    ],

 "~sensible: value":function
  value (doing)
    { var per =
        {         ion: {vet: {sensible:      { } }, get:  true}
        ,        aeon: {vet: {sensible:      [ ] }, get:  true}
        ,    function: {vet: {sensible:     value}, get:  true}
        , recognition: {vet: {sensible:      / / }, get:  true}
        ,     boolean: {vet: {sensible:      true}, get: false}
        ,      number: {vet: {sensible: 112701040}, get: false}
        ,        text: {vet: {sensible:   'value'}, get: false}
        ,   undefined: {vet: {sensible: undefined}, get: false}
        ,        null: {vet: {sensible:      null}, get: false}
        }

      var test
        , message
        , prefix = doing [doing.next] + ": "
      for
        ( var name in per)
        {     test  = per     [ name ]
           message  = prefix  + name ; test.get ||
        (  message += " 🙅🏾‍♂️")

          test.get == test.vet
            ? ~{  log:["✅", message]}
            : ~{error:["❌", message], halt:false}
        }
    },

"~sensible: 'term' in object":function
  term (doing)
    {
    },

"~sensible: 'term' in object as 'alias'":function
  alias (doing)
    {
    },
}
;
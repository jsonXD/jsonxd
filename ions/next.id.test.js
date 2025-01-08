;
~
{ re:
    { id:  'next.id.test@ionify'
    , of: ['public','tools','tests']
    , as: {examination  :-0.001}
    , do: {transcription:-0.001, 'next.id@':true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -7.20160910
    , to:  -8.20221129
    , at:  -0.002
    , is: "testing ionify's ~next.id tool"
    , we:
        [ "must add a - to + number id range transition test"
        , "must add id number range overflow reset test"
        , "must add id.# & id-# confirmation tests "
        ]
    },

  do:
    [ "setup"
    , "id is set"
    , "id is advanced"
    ],

  setup:function
  setup (doing)
    { var its     = setup.with.its
        ; its.id  = its.re.id.match (/^(.*)@.*/)[1]
    },

  report:function
  report (the)
    { Boolean (the.result)
        ? ~{log  :[`✅ ${the.examination}: ${the.question}`]}
        : ~{error:[`❌ ${the.examination}: ${the.question}`], halt:false}
    },

 "id is set":function
  sets (doing)
    { var its         = sets.with.its
        , examination = its.id
        , question    = doing [doing.next]
        , ion         = {}
        , result      = (+{next:examination, id:ion}, ion.re.id)

      its.report ({examination, question, result})
    },

 "id is advanced":function
  advanced (doing)
    { var its         = advanced.with.its
        , examination = its.id
        , question    = doing [doing.next]
        , ion         = {}
        , id          =       +{next:examination, id:ion}
        , result      = id  < +{next:examination, id:ion}
        ; result    &&= ion.re.id

      its.report ({examination, question, result})
  }
}
;
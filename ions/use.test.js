;
~
{ re:
    { id:  'use.test-0.05@ionify'
    , of: ['tests', 'context', 'composition', 'sensation']
    , as: {examination:-0.001}
    , do: {'use@':true, aesop:true, transcription:true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -2.20170413507
    , to:  -2.20220928408
    , at:  -0.06
    , is: "ionify's ~use api examination"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/use.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/use.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were..."
        , "must..."
        , "will..."
        , "need..."
        , "want..."
        , "hope..."
        , "like..."
        ]
      },

      do:function
      test_use ()
        {
          ~ /test +{use:"thing", as:"alias", in:someObject}/
          + (say = {"🤓":"iamai", hello:'👋🏾', hellooo:7})
          + {use : "hello", as:"hellooo", in:say}

          + { hello:function
              hello (from)
                { hello == say.hellooo
                    ? ~ {log  : "✅ ~use: named-thing:          in:object"}
                    : ~ {error: "❌ ~use: named-thing:          in:object", halt:false}

                  hello == say.hellooo && say.hello == '👋🏾'
                    ? ~ {log  : "✅ ~use: named-thing: as:alias in:object preserves name  in object"}
                    : ~ {error: "❌ ~use: named-thing: as:alias in:object preserves name  in object", halt:false}

                  hello == say.hellooo && typeof say.hellooo != 'number'
                    ? ~ {log  : "✅ ~use: named-thing: as:alias in:object overrides alias in object"}
                    : ~ {error: "❌ ~use: named-thing: as:alias in:object overrides alias in object", halt:false}
                }
            }
          +  say.hellooo
          +  delete say

          ~ /test ~use error conditions.../

          try
            {
            ~ {use  : [], as:[], in:{}}
            ~ {error: "❌ ~use: error: can't use 'as' with more than 1 'use'", halt:false}
            }
          catch (err)
            {
            ~ {log: "✅ ~use: error: "+ String (err.message)}
            }

          try
            {
            ~ {use  : 'thing', as:'alias', in:"non-object"}
            ~ {error: "❌ ~use: error: can only use 'in' with objects", halt:false}
            }
          catch (err)
            {
            ~ {log: "✅ ~use: error: "+ String (err.message)}
            }
        }
}

;
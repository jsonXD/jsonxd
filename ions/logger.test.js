;
~
{ re:
    { id:  'logger.test@ionify'
    , of: ['tests','public','transcription','api']
    , as: {examination:0.001, transcription:0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'kaito.🧑🏾‍🦱.lee', 'team✨ionify']
    , in: ['silicon-valley.california.us.earth']
    , on:  -4.200709
    , to:  -8.20221106
    , at:  -0.07
    , is: "ionify's ~{info,log,debug,warn,error} transcription api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/logger.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/logger.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "plan ..."
        , "need ..."
        , "want ..."
        , "know ..."
        , "like ..."
        , "hope ..."
        , "wont ..."
        ]
    },

  valueOf:function
  test_logger ()
    { delete this.valueOf <- this
      this.test_debug ()
      this.test_error ()
      this.test_info  ()
      this.test_log   ()
      this.test_warn  ()
    },

  message:
    { disabled: "can be disabled"
    , operates: "can be enabled, recorded & disabled"
    },

  test_debug :function
  test_debug ()
    { var  mode = this.message
        ,  debug= +{debug:null}
        ~ {debug: false}
        - {debug: "❌ ~debug " + mode.disabled}
        + {debug: true}
        + {debug: "✅ ~debug " + mode.operates}
        ~ {debug: !!debug}
    },

  test_info :function
  test_info ()
    { var  mode= this.message
        ,  info= +{info:null}
        ~ {info: false}
        - {info: "❌ ~info " + mode.disabled}
        + {info: true}
        + {info: "✅ ~info " + mode.operates}
        ~ {info: !!info}
    },

  test_log :function
  test_log ()
    { var mode= this.message
        ,  log= +{log:null}
        ~ {log: false}
        - {log: "❌ ~log " + mode.disabled}
        + {log: true}
        + {log: "✅ ~log " + mode.operates}
        ~ {log: !!log}
    },

  test_warn :function
  test_warn ()
    { var  mode= this.message
        ,  warn= +{warn:null}
        ~ {warn: false}
        - {warn: "❌ ~warn " + mode.disabled}
        + {warn: true}
        + {warn: "✅ ~warn " + mode.operates}
        ~ {warn: !!warn}
    },

  test_error :function
  test_error ()
    { var  mode = this.message
        ,  error= +{error:null}
        ~ {error: false}
        - {error: "❌ ~error " + mode.disabled, halt:false}
        + {error: true}

      try
        {
        ~ {error: "✅ ~error " + mode.operates + " & obtrusive"}
        - {error: "❌ ~error " + mode.operates + " & obtrusive", halt:false}
        }
      catch (err)
        {
        ~ /~error.halt:false records & makes an error unobtrusive/
        | /so this catch is only activated if ~error isn't halted/
        }

        ~ {error: !!error}

      var  debug= +{debug:null}
        ~ {debug:   true}
        + {debug
          : "kaito lee & michael daddy lee\n\t"
          + "@ -8.20211129\n\t"
          + "🍭🥣🚘🚞🚞🚘👨🏾‍🦱💪🏽🐛🧑🏾‍🦱🧸🛏😗👨🏾‍🦱\n\t"
          + "🆎🆚🈸🈴🆘🅰️🅱️㊗️🈚️🈶🆚🈴🈲㊗️\n\t"
          + "🅰️㊙️㊗️🈷️🆘🅾️🆘🆘🅾️🅰️🅱️🆎🅱️🅾️\n\t"
          + "🅾️🆘🆎🆎🅾️🈲🈲㊙️🖤🤍🉑💤\n\t"
          + "goodmbvgddfbzfttdx\n\t"
          + "goodphone"
          }
        + {debug:!!debug}
    }
}
;
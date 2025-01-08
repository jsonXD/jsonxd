;
~
{ re:
    { hi:   true
    , id:  'logger@ionify'
    , of: ['public', 'transcription', 'tools', 'api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: {200709.2    : -4}
    , to: {578311196.1 : -8}
    , at: -0.055
    , do: {malfunction:true}
    , as: {sensation:-0.001}
    , in:
        [    'queens-county.new-york.us.earth'
        , 'silicon-valley.california.us.earth'
        ],
      is:
        [ "ionify's transcription sensation:"

        , '~{debug:*}, ~{error:*}, ~{info:*}, ~{log:*} & ~{warn:*}'

        , '~ {log_level: true || false}'
        + '  true enables & false disables recording at the specified level'
        + '  i.e. debug, error, info, log, or warn.'

        , '+ {log_level: null}'
        , '  reports if the log level is enabled:1:true | disabled:0:false'
        , '  the unary operator is critical for acquiring a correct log level state'
        , "  +|- unary operators always correctly report the log level's state"
        , "  a ~ unary operator  always 😒 reports the log level state's enabled"
        , '  ~~ {log_level:null} can be used to report the correct log level'

        , '+ {log_level: "message"}'
        , "  records a message at the specified level if it's enabled"

        , '+ {log_level: reference}'
        , '  passes the referenced object to the underlying logger, e.g. console,'
        + '  to enable more informative, developer-level, object rendering'
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/logger.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/logger.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST 🚨 fix +{log:[1]} basic types doing console object presentation"
        , "WILL rename   fail:error, seek:debug, note:log levels"
        , "LIKE renaming transcribe@👍🏾verb|transcript@🤔noun <= logger@"
        , "WANT to reenable 1st-launch listing all transcription-level satuses"
        , "WANT 👨🏾‍💻 [message, base, object] sensing object --> console(object)"
        ,
        [ "want 🙇🏾‍♂️ displaying via habitation@: web:alert vs web+node:console"
        , "like 🙇🏾‍♂️ adoption@s having a .via property that habitation@ sets"
        ]
        , "will ~debug:{ionid:true|false} to [en|dis]able per-ion transcription"
        , "were exploring re.on+to instantiation@s calendarids + timezone + dow"
        , "were exploring with.*:* sharing via boolean permissions"
        , "like paired level:message & info-level:id generated-id transcription"
        , "want 🚨 Blink web views' '⚠️' to render with full yellow color & size"
        ,
        [ "like defining & sensing transcription@ apis; maybe habitation@s can"
        , "send their own so logger can sense & adopt them! 🤓"
        ],
        [ "like adding ~{log_level:..., to:'nowhere'||'webview'} later but"
        , "know it enables in-context-session entities' unexpected record-hides"
        , "like that this could support silent pre-presentation logging: launch"
        ]
        ]
    },

  on:
    [ 'error', 'warn', 'debug', 'log', 'info'
    ],

  with:
    { the:
        { tools: {'*': {error:true, warn:true, debug:true, log:true, info:true}}
        }
    },

  ionify :function
  ionify ()
    { var   logger  = this
        ,   domain  = ionify.with.the.tools
      domain.debug  = logger.debug
      domain.log    = logger.log
      domain.info   = logger.info
      domain.warn   = logger.warn
      domain.error  = logger.error
      this.report ({error:null, warn:null, debug:null, log:null, info:null})
    },

  debug :function
  debug (action)
    { var    logger       =  debug.with.its
    ;        logger.level = 'debug'
    ; return logger.report  (action)
    },

  error :function
  error (action)
    { var logger       = error.with.its
        ; logger.level = 'error'

      var state   = logger.report (action)
        , message = action.error
        , halt    = action.halt !== false

      if( message === null || !halt) return state
      if('boolean' != typeof message   &&   state) +new Error (message)

      return state
    },

  info :function
  info (action)
    { var    logger       =  info.with.its
    ;        logger.level = 'info'
    ; return logger.report  (action)
    },

  log :function
  log (action)
    { var    logger       =  log.with.its
    ;        logger.level = 'log'
    ; return logger.report  (action)
    },

  warn :function
  warn (action)
    { var    logger       =  warn.with.its
    ;        logger.level = 'warn'
    ; return logger.report  (action)
    },

  record :function
  record (action)
    { var toggled
        , logger  = record.with.its
        , logging = record.with.our.logging   ||
                   (record.with.our.logging = {})
        , level   =  logger.level
        , message =  action [level]
        , state   = logging [level]
        ; logging [level] = logger.state = state

      if( null === message) return false
      if('boolean' == typeof message)
      if( toggled  =  (message !=  state))
          {   logging [level]   =  state = logger.state = message
          ;   message           = (state ? '🟢' : '🚫') + ' ~'  + level
          }   else          return false

      state
        &&   Array.isArray   ( message   )
        &&  'string' == typeof message [0]
        &&  (message =  message.join (' '))

      var prefix
      logger.id = ((action.re && action.re.ex.from) || logger.re.id).name
     ~logger.id.indexOf('@') || (prefix = logger.id.match(/^(log|ion)[.-]\d+/))
      prefix && (logger.id = (prefix[1] == 'log' ? logger.level : 'sion') + '@')

      logger.message
        =   'string' == typeof message
        ?    logger.icon [logger.level] + logger.id + ': ' + message
        :   [logger.icon [logger.level] + logger.id + ': ' , message]

      return toggled ? true : action [level] === true ? false : state
    },

  messages:
    { noConsole: 'logger@ionify is more informative with the console.*() reporting api'
    , noReports: "logger@ionify couldn't find the alert() or console.*() reporting apis"
    },

  report :function
  report (action)
    { var icono =
          { debug: '🔎 '
          , error: ' '
          ,  info: '🤓 '
          ,   log: '📋 '
          ,  warn: ' '
          }

      var icons =
          { debug: icono.debug
          , error: '❌ '
          ,  info: icono.info
          ,   log: icono.log
          ,  warn: '⚠️ '
          }

      var iOSPath  = (/^file:\/\/.*\/var\/mobile\//)
        , onMobile = document && document.URL.match (iOSPath)
        , logger   = this
        , missing  = logger.missing
        ; missing.console = typeof console == 'undefined'
        ; missing.alert   = typeof alert   == 'undefined'

      logger.report
        = !onMobile
        ?     logger.console
        :     missing.alert ? logger.console : logger.popup

        = onMobile
        ?    !missing.alert ? logger.popup : logger.console
        :     logger.console

      logger.icon
        = missing.console
        ?     icons
        :    !onMobile ? icono
                       : missing.alert ? icono : icons

      if( missing.console)
        if( missing.alert)
          { logger.report = missing
          ~ action
          + new Error (logger.messages.noReports)
          }
        else
          { logger.report = logger.popup
          ~ {warn: true }
          + {warn: logger.messages.noConsole}
          + {warn: logger.report.with.our.logging.warn}
          }
      else
        { logger.console.via = console
        }

    ~ action
    },

  missing :function
  missing (action)
    { var    logger=missing.with.its
    ;        logger.record (action)
    ; return logger.state
    },

  console :function
  console (action)
    { var    logger = console.with.its
    ,        via    = console.via
    ;        logger.record (action) && via [logger.level] (logger.message)
    ; return logger.state
    },

  popup :function
  popup (action)
    { var    logger=popup.with.its
    ;        logger.record (action) && alert (logger.message)
    ; return logger.state
    }
}
;
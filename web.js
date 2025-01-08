;
~
{ re:
    { id:  'web@ionify'
    , of: ['web','launch']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on:  {200709.2    : -4}
    , to:  {578311185.1 : -8}
    , at:  -0.102
    , do: 'ionosphere webi ions'
    , as: {habitation:true, connection:true}
    , is:
        [ "ionify: invoked object notation implemented for your web"
        , "an initiation@ of  ionify's web habitation@"
        , "a  habitation@ of  web connection@s & interactions"
        , "a  connection@ of ~get for web actions & information acquisition@"
        , "get.ing ionify's  ~get action@ specification@"
        , "get.ing & applying ionify's configuration@"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/web/web.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/web.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "NOTE .watch() is disabled because it hides critical script errors."

        , "WERE 🧹 nullifying .script()'s onload callback once its script loads"
        , "WERE modeling re.as@ specification@s with version@s & re.of@ association@s"
        , "WERE modeling & implementing initiation & ROLES-&-FLOWS@launch.js"
        , "WANT 👨🏾‍💻 .locate() per launch.js ajile-legacy habitation@ discovery"
        , "WANT .get() batch & setting onload that invokes .then after all load"
        , "MUST 🚨 IMPROVE .jsonxd() to handle {at:'id@js.on'} vs {at:'url'}"

        , "were exploring re.on+to instantiation@s calendarids + timezone + dow"
        , "will set all ~get.s ionid@ domains to the current ion's @domain."
        , "want to adopt ajile.test.inlineLoader to load inline code!"
        , "want tiny: ~get.then delete script.onload post~then for memory perf?"

        , "must ... "
        , "want ... "
        , "like ... "

        , "like fast: document.createDocumentFragment() to batch add ions"
        , "like .script()'s then.and adding to any existing ~*.and action"
        , "like setting ionify's ions' script.defer based on its habitation@.s"
        ,
        [ "want .via() delegating script, es.module, ajile, amd, umd, commonjs:"
        , "note https://nodejs.org/api/esm.html"
        , "note https://exploringjs.com/impatient-js/ch_modules.html"
        , "note https://jameshfisher.com/2020/10/04/what-are-umd-modules/"
        , "note https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
        , "note https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#universal-modules-umd"
        ]
        ]
    },

  with:
    { our:
        { configuration:
            {}
        },
      the:
        { launch:
            {
            }
        },
      web:
        { dom:
            { document:document
            },
          api:
            { onerror       :onerror
          //, onload        :onload
          //, onabort       :onabort
          //, onhashchange  :onhashchange
          //, onoffline     :onoffline
          //, ononline      :ononline
          //, onstalled     :onstalled
          //, onsuspend     :onsuspend
          //, onstorage     :onstorage
            }
        },
    },

  valueOf :function
  ionify  ()
    { delete this.valueOf
      this.web ()
    },

  web :function
  web ()
    { var i           = web.with && web.with.its || this
      i.get$.URL.with = {its: i.get$}
      i.via     .with =
      i.script  .with =
      i.setup   .with =
      i.queue   .with = {its: i}
      Object.prototype.valueOf= i.setup

      i.queue   (i)
    //i.watch   ()
      i.ready   ()
      i.locate  ()
      i.script  ({at:'ions@ionify'})
      i.script  ({at: 'get@ionify'})
    },

  pending:
    [],
  queue :function
  queue (ion)
    { var who = ion.re.id.name || ion.re.id
        , all = queue.with.its.pending
        ; all[who] =ion
        ; all.push (who)
    },

  setup :function
  setup (ion)
    {//🙇🏾‍♂️ setup@web@ implementing launch per launch.js' ROLES & FLOWS 👨🏾‍💻/
      var web = setup.with.its
        , how = -2.20070904
        ; ion ||
        ( ion = this);

      if(!ion.re || !ion.re.as) return how; else web.queue (ion)

      var as = ion.re.as
        , configuration = web.with.our.configuration

      if( as.configuration)
        { configuration.relations ||= ion.relation || {}
          configuration.locations ||= ion.location || {}
        }

      if( as.acquisition &&  ion.get )
        { ion.get.via = web.via
        }

      if( as.observation )
        { ion.pending     =  web.pending
          ion.queue       =  web.queue
          ion.queue.with  = {its:ion}
        }

      return how
    },

  watch :function
  watch ()
    { onerror =function
      problem (message, uri, line, column, error)
          { var name  = error && error.name
          ,     stack = error && error.stack
          ;
          ~ {warn : [name, message, stack]}
          & {debug: [name, message, stack, uri, line, column, error]}
          ; return true
          }
    },

  ready :function
  ready ()
    {   var error = this.errors
    ;   if (typeof document == 'undefined') throw new Error (error.noDOM)
    ;   return true
    },

  errors:
    { noDOM   : 'web@ionify needs the DOM: Document Object Module API'
    , noScript: 'no script url or code found in '
    },

  locateInfo:
    [" note: senses ionify's path for locating & loading its ions. "
    ,/ note: locates via most to least accurate techniques.        /
    ,' will: sense /ions/ path & only when unable apply hardcode.  '
    ],
  locate :function
  locate ()
    { var script  =   document.currentScript
                  ?  [document.currentScript,,]
                  :   document.scripts
                  ||  document.head.getElementsByTagName ('script')
        , path    =   script && script [script.length - 2].src
        ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
    },

  types:
    {    amd  :'script'
  //,    css  :'style'
    ,    cjs  :'script'
  //,    esm  :'module'
    ,    es   :'script'
    ,    js   :'script'
    ,    jsonp:'jsonxd'
  //,      mjs:'module'
    ,      umd:'script'
    ,undefined:'script'
    },

  via :function
  via (thing)
    { var web = via.with.its
        , as  = web.types [thing.as]

    /*delegate non-ecmascript type-specific ~get.s to own get.type@ ion
      actually, get.type@s can on:any,as:type,do to auto-acquire them*/

      web [as] (thing)
    },

  jsonxd:function
  jsonxd (jsonp)
    { jsonp.at += '&callback=~'
      return jsonxd.with.its.script (jsonp)
    },

  script :function
  script (action)
    { var     via = script.with
        ,     web = via.its           //|| (script == this.script ? this : null)
        ,    code = String (action.code || '')
        ,     url = String (action.at   || '')
        , warning
        ;

      if(!url && !code)
        { warning = [web.errors.noScript," ['",url,"' & '",code,"']"].join('')
          return {warn:warning} + {debug:[true, warning, action]}
        }

      function clean ()
        { SCRIPT.onload = null
          delete then.and
          return true
        }

      function error
        ( event )
        { var which = event.target
            , note  = ["~get unsuccessful for", which.id ||'script'
                      ,"\n  "                 , which.src
                      ].join (' ')
            , oops  = new Error (note)
            , tell  = action.or || action.then || via.all.nope
            ; tell  (oops)
        }

      var then
        , get$          =   web.get$
        , SCRIPT        =   document.createElement ('script')
        ;(then          =   action.then)  &&
         (SCRIPT.onload =   then)         &&
         (then.and      =   clean)
        ; SCRIPT.onerror=   error
        ; SCRIPT.type   =  'text/javascript'
        ; SCRIPT.async  =   get$.ASYNC [action.in]
        ;

      if (url)
        { url.match (get$.ID) && (SCRIPT.id = url)
        ; url[url.length-1] == '/' && (url += get$.PATH.ions)
        ; SCRIPT.src  =  url = url.match   (get$.HTTP)
                      ?  url : url.replace (get$.ID, get$.URL)
        }

      var debug     =   via.the && via.the.tools && via.the.tools.debug
        , enabled   =   via.our && via.our.logging && via.our.logging.debug
        , debugging =  (debug && enabled) || (debug = Object, false)
        ; debugging &&  debug  ({debug:['getting', url, '...']})
        //WANT 🤔 to eliminate 🚫 doing 🔁 all👆🏾the👆🏾above 🔁 over 😓 & 😓 over

      document.head.appendChild (SCRIPT)
  },

  getInfo:
    [" does ~{get: ['ion.id@' || './script.js'], then:['actions']} "
    ,' will update get$.PATH with new @domains & their paths.      '
    ,' will handle URLs with existing file extension(s).           '
    ,' will sense ion ids vs. entity paths: ./entity.ext           '
    ,' will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. '
    ,' ... '
    ],
  get$:
    { ASYNC:
           {  parallel: true
           ,  sequence: false
           ,     order: false
           ,        '': true
           ,      null: true
           , undefined: true
           }
    ,    ID: (/(?:(.*)@(\D*)|(\D*))(\d+.*)*/)    // matches ((api)@(space.) | (api.)) version#
    ,  HTTP: (/^\w+:\/\//)                       // matches URL protocols
    ,  PATH:
           { ionify   : '//cdn.jsdelivr.net/gh/ionify/ionify@public/ions/'
           , ions     : 'ions'
           , undefined: './'
           , null     : './'
           , ''       : './'
           }
    ,  NAME: (/(.*)\.$/)    // matches (api). | (host).
    ,  TYPE: '.js'
    ,   EXT: (/(\.\D*$)/)   // matches file extensions
    ,   URL:
          function getURL (match, name, space, file, version, offset, string)
            {   var get$  = getURL.with.its
                  , ext   = get$.EXT.exec (match)
                  , path  = get$.PATH
                  , NAME  = get$.NAME
                  ; name  = name  &&  ( name.match (NAME) || [, name])[1]
                  ; space = space &&  (space.match (NAME) || [,space])[1]
                  ; file  = file  &&  ( file.match (NAME) || [, file])[1]
                  ;(path  = path      [space])
                 ||(path  = get$.PATH [path ])
                  ; return  path  +   (name     ||  file  ||'')
                                  +   (version            ||'')
                                  + /*(ext      ?   ext[1] :*/(get$.TYPE)
            }
    }
}
;

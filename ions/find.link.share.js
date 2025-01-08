;
~
{ re:
    { id:  'find.link.share@ionify'
    , of: ['core', 'context', 'tools', 'api']
    , do: {transcription:-0.001}
    , as: {convention   :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: { 200709.2    : -4      }
    , to: { 578311211.1 : -8.2108 }
    , at:  -0.067
    , is:
        [
        [ "implementing ionify's ~find.for.as.in.skip name-to-ai-resolution"
        , "which finds ai: active-information via a stated or aliased term"
        , "within a stated object, its collections, or the ionosphere"
        ],
        [ "implementing ionify's ~link.to+as & ~share for sharing optionally"
        , "aliased actions and-or information via domains"
        ]
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/find.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
            //, 'https://github.com/ionify/ionify/blob/public/ions/share.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST 🤔 handle on:[...] setting ion's members' my+its@with@ to itself"
        , "WILL 🙇🏾‍♂️ retire .link() since with@ successfully refined it 🤲🏾"
        , "WANT to simplify this ion & separate its actions into their own ions"
        , "WANT to keep these actions domain-private until otherwise needed"
        , "WILL ~find in ion's parent for aliases before searching ion.with.in"
        , "MUST 🙇🏾‍♂️ ~find with limits to skip unsafe out-of-scope resolutions"
        , "WANT 🤔 .find_alias() debug({debug: [message, thing, place[thing]]})"
        , "LIKE 🙇🏾‍♂️ ~find.ing member@id@affiliation:caller,this,with,global🤲🏾"
        , "LIKE 🙇🏾‍♂️ ~find.ing in ion's re.ex.from caller & its collection@s!🤓"
        ,
        [ "WILL rename find@ionify <= find.link.share@ionify"
        , "WILL migrate .share() to a 'per' parameter of copy@with@ionify"
        ,   { copy:
                { from:null, to:null
                , per:
                    { field: true || 'only this  field or * if +1 more false'
                    , field:false || 'everything but field or  * if +1 false'
                    ,   '*': true || 'everything'
                    }
                }
            }
        ]
        , "plan to have top-level-ids reference entire ion not just its re & "
        + "this requires re.*@, ~find, ~share & ~link's compatibility with that"

        , "were implementing ~link.to & ~link.as"

        , 'will apply unlink when ~link.to is falsey'
        , 'want to combine ~share & ~link.to'
        , 'want all hip & hip-hop ions to valueOf:hiphop --> start --> valueOf:hop. '
        , "like ~find'ing phrases as reactions in on.ion.senses reactions map"
        , "like idea of queueing ~find's then doing once ~find's available          "
        ]
    },

  on:
    [ [ 'find', 'for', 'as',  'in', 'skip']
    , [ 'find', 'for', 'as',  'in'        ]
    , [ 'find', 'for',        'in', 'skip']
    , [ 'find', 'for',        'in']
    , [ 'find',        'as',  'in']
    , [ 'find',               'in']
    , [ 'link', 'to']
    , [ 'link', 'as']
    , ['share']
    ],

  with:
    { its:
        { is:
            { base  : {function:false, object:false}
            , object: {function:true,  object:true}
            , sensed: 'sensible@with.our'
            }
        },
      our:
        { find  :  'find@find.link.share@ionify'
        , link  :  'link@find.link.share@ionify'
        , share : 'share@find.link.share@ionify'
        , space : 'space@find.link.share@ionify'
        , skip:
            { with  :true, re:true
            , domain:true, do:true
            , get   :true, on:true
            },
          tools:
            { find  :  'find@find.link.share@ionify'
            , link  :  'link@find.link.share@ionify'
            , share : 'share@find.link.share@ionify'
            , space : 'space@find.link.share@ionify'
            }
        }
    },

  valueOf:function
  ionify()
    { var   sense   = this
        ,  domain   = sense.with.our
        ,   tools   = domain.tools
      tools.find    = domain.find   = sense.find  //WILL remove after with@ name-to-ai-resolution
      tools.link    = domain.link   = sense.link  //WILL remove after with@ name-to-ai-resolution
      tools.share   = domain.share  = sense.share //WILL remove after with@ name-to-ai-resolution
      tools.space   = domain.space  = sense.space //WILL remove after with@ name-to-ai-resolution
      delete sense.valueOf <= sense
    },

 'find for as in skip':'find',
 'find for as in'     :'find',
 'find for in skip'   :'find',
 'find for in'        :'find',
 'find as in'         :'find',
 'find in'            :'find',
  find :function
  find (action)
    { var finding   = action.in
      if(!finding)  return false

      var term      = action.find
        , as        = ('as' in action) ? action.as : term
        , f0r       = action.for || finding
        , next      = finding
        , skip      = action.skip
        , via       = find.with
        , none      = via.all.none
        , its       = via.its
        , alias     = its.find_alias
        , group     = its.find_shared
        , sensible  = via.our.ionified
        , found     , last

      while
        ( last != next && next) //👨🏾‍🏫 avoids .with.its infinite loops
        { last  = next          //👨🏾‍🏫 senses .with.its infinite loops
          if (found  = alias ({find:term, in:next}))            break

          if (!(next = next.with))                              break
          ;  (found  = (its = next.its) && its [term])
          if (sensible [typeof   found])                        break
          if (sensible [found && found.constructor.name])       break

          if (next   = next.in)   //👨🏾‍🏫 search within ion's collections
          if (found  = group ({find:term, in:next, skip:skip})) break

          ;   next   = its
        } if (found && (f0r [as] = found)) return true

      //🙇🏾‍♂️ remember the already searched ion collection@s & skip them within
      last =  finding.with && finding.with.in && finding.with.in.domain
      next =  via.the                   //👨🏾‍🏫 the ionosphere's collection@s!
      next && (found = group ({find:term, in:next, skip:last||none}))
      if (found && (f0r [as] = found)) return true

      return false
    },

  find_shared:function
  find_shared (action)
    { var via   = find_shared.with
        , name  = action.find
        , next  = action.in
        , skip  = action.skip || via.all.none
        , alias = via.my.find_alias
        , object= via.my.is.object
        , group
        , found

      for
        ( group in next )             //👨🏾‍🏫 search within collections, but
        { if( skip [group]) continue  //👨🏾‍🏫 skipping any specified group(s)
          ;   group =   next   [group]
          if(!group || !object [typeof group])          continue
          if( found =   alias  ({find:name, in:group})) break
        }

      return found
    },

  find_alias:function
  find_alias (action)
    { var via      = find_alias.with
        , our      = via.our
        , thing    = action.find
        , object   = action.in
        , sensible = our.ionified
        , tried    = {}
        , debug    = Boolean (our.logging && our.logging.debug)
        ; debug   &&(debug = via.the.tools.debug || via.all.nope)

      while
        (!tried [thing] && thing in object)
        { tried [thing]  = true
          debug && debug({debug:["~find",action.find,"as",thing,"..."]})
          thing = object[thing]
          if (sensible  [typeof   thing])                   return thing
          if (sensible  [thing && thing.constructor.name])  return thing
        }

      return false
    },

  linkInfo:
    { were:
        [ 'implementing ~link.to & ~link.as'
        ],
      must:
        [ 'move id@domain matching to its own ion then share it  '
        , "fix callee.caller.with.in.domain exposing ionify's domain space"
        ],
      will:
        [ 'enable   + {link:ion, to:thing}                       '
        ],
      like:
        [ 'linking {}s & keeping their id-mapped .with & .our here '
        , 'id@domain matching with /(.*)([-+]\d+.*^@)|(@.*)/     '
        , '.with .doma .in.expanded.name.of.shared.thing:        '
        + ".with$.doma$.in.expanded auto-added $'s on conflicts  "
        , 'enabling ~ {link: true|false } with true as default   '
        , 'enabling ~ {link: [ion, object, more])                '
        , 'enabling ~ {link:ion, as:{member:thing}}              '
        ]
    },
 'link as':'link',
  link :function
  link (ion)
    { ion || (ion = link.with.its)

      var id        = ion.re.id || 'ion@' // 'ion'
        , it        = id.replace (/(.+)(@|\.\d\.).*/, '$1')
        , our       = (link.with || ion.with).our
        , debugging = !!(our.logging && our.logging.debug)
        , debugged  = []
        , debug     = our.debug || String
        , can       = {function:true, object:true}
        , skip      = (link.with || ion.with).our.skip
        , thing
      for
        ( var property in ion)
        { thing = ion [property]
          if (!thing || skip [property] || !can [typeof thing])       continue
     //**/if ((typeof thing != 'function') && !Array.isArray (thing)) continue
          if (!ion.hasOwnProperty (property))                         continue
          debugging      &&
          ((it != 'ion') && ion.debug || debugged.push ('\n\tlinked '+ it +' ['+ property +']'))
        } debugging      && ion.debug || debugged.length && debug ({debug:debugged})

      return true
    },

  unlinkInfo:
    [ 'todo: enable +{unlink: ion, from: thing}'
    ],
  unlink :function
  unlink (ion)
    { ion || (unlink == this.unlink) && (ion = this);

    var property
        , thing
        , id = (ion.re ? ion.re.id : void 0) || 'ion'
        ; id = id.replace (/(.+)(@|\.\d\.).*/, '$1')
        ;
    for (property in ion)
        {  thing = ion [property]
        ;  (typeof thing == 'function') && (thing [id] == ion) && (delete thing [id])
        }
    },

  shareInfo:
    { will:
        [ 'ensure ~share uses .with vs .our'
        , "fix ~share:'*' to resolve shared things; now assumes ~do:[{share:'*'}] "
        , 'create +{share: {thing:..., other:...}, with:[ion.ids]} '
        ]
    },
 'link to':'share',
  share :function
  share (ion)
    { var object = {object:true, function:true}
        , skip   = share.with.our.skip
        , thi$   = share.with.its
        , spaces = thi$.spaces
        , things = ion.link ===  '*' ?  ion.with.its/*.with || ion.with*/ || ion : ion.to ? ion.link : ion.share
        , to     = ion.to   ||  (ion.re && ion.re.id) || ''
        ; ('*' === to) && (to = null)//Object.keys (thi$.spaces))
        ; Array.isArray   (to)  || (to = [to])

      for (var thing in things)
        { if (( ('boolean' == typeof ion [thing]) && !ion [thing])
          ||  ( ('re'     ===             thing ) &&  ion.re     !== true)
          ||  (                     skip [thing]  &&  ion[thing] !== true)
          ||     ~thing.indexOf ('@') &&  true   !==  ion [thing])
          continue

          for
            ( var T = to.length, name=thing, id, space, from={id:null}
            ;     T--
            ;    id = (id = to[T]) && object [typeof id] ? id.re && id.re.id : id
            , space = thi$.space (String (id || ''))
            , space [name]
                = typeof (thing = things [name]) == 'string'
                ?    ion [thing]
                :         thing
            );
        }
    },

  groupInfo:
    [ "note: Returns, and if needed, creates a group based on id's @domain"
    , 'todo: ...'
    ],
  space :function
  group (id)
    { var share  = group.with.our
        , groups = share.spaces
        , domain = String (id || '').match (/@(.*)/)
        ; domain = domain  && domain [1] || 'all'

      return  groups [domain] || (groups [domain] = {})
        //|| (groups [domain] = Object.create (parent || groups.null))
    }
}
;

;
~
{ re:
    { id:  're.do.as.of.test@ionify'
    , of: ['core','public','api','tests']
    , do: {transcription:  true, 're.do.as.of@':true, 'next.id@':true}
    , as: {examination  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -24.200709
    , to:  -18.578309204
    , at:  - 0.008
    , is: "ionify's re.of@ api tests"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/of.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.do.as.of.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  do:
    [ "re.of@ ensures ions' re.of.domain"
    , "re.of@ ensures ions' re.of groups exist as re.of.group(s)"
    , "re.of@ ensures ions' re.of groups & the groups are merged"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

 "re.of@ ensures ions' re.of.domain":function
  re_of_domain(doing)
    { var     exam = re_of_domain.with.its
        , question = doing [doing.next]
        ,   answer = exam.re
                  && exam.re.of
                  && exam.re.of.domain
                  && typeof exam.re.of.domain == 'object'

      exam.report (question, answer)
    },

 "re.of@ ensures ions' re.of groups exist as re.of.group(s)":function
  re_of_groups(doing)
    { var     exam = re_of_groups.with.its
        , question = doing [doing.next]
        ,   answer = true
        ,      ofs = exam.re.of

      for
        ( var f=-1, F=ofs.length, name, group
        ; (++ f  <  F) && answer;
        )
        { name   = ofs [f]
          group  = ofs [name]
          answer &&= group && typeof group == 'object'
        }

      exam.report (question, answer)
    },

 "re.of@ ensures ions' re.of groups & the groups are merged":function
  merge(doing)
    { var ion =
              {   re: { of: ['lee']           }
              , with: {the: { mi: {cha:'el'} }}
              }
        ~ ion
      var     exam = merge.with.its
        , question = doing [doing.next]
        ,      of  = ion.re.of
        ,      the = ion.with.the
        ,    found = Object.keys (of).length - 2 //re:0 + re.lee not in with.the
        ,     skip = {domain:true}
        ,   answer = true

      for
        ( var name in the )
        { if (skip [name] || (the[name] !== of[name])) continue
          answer &&= 0 <=-- found
          if (!found) break
        }

      exam.report (question, answer)
    }
}
;
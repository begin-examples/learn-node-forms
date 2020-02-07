@app
learn-forms

@static
folder _site

@http
post /logout              # clear session
get /login                # create session
get /admin                # list drafts
get /drafts/:key          # edit draft 
post /drafts              # create draft
post /drafts/:key         # update draft
post /drafts/:key/destroy # destroy draft
post /drafts/:key/publish # publish draft!

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

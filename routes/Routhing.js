app.use('/api',(req, res, next)=>{
    next();
})  // valid path values for mounting middelware
app.use('/api(c?)d', (req, res, next)=>{
    next()})// path pattern
    
    app.use ('/\/api |\/xyz/', (req, res, next)=>{
        next()
    })// regular expression


app.use(['/abcd','xyza', /\/lmn | \/pqr/], (req,res, next)=>{
    next()
})
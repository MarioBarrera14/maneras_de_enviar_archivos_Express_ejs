const express= require ('express');
const ejs=require ('ejs')
/*Resultados de traducción
responder con "hola mundo" cuando se realiza una solicitud GET a la página de inicio */
const app= express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')// sendFile envia un archivo en este caso html
})//dirname se obtiene la ruta absoluta + el archivo que se quiera mostrar en el browser

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/static/contact.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/static/about.html')
})
/*app.get('/stile.css',(req,res)=>{
    res.sendFile(__dirname + '/static/stile.css')
}) */
app.get('/welcomeweb',(req,res)=>{
    res.render( 'welcomeweb')
})
app.get('/signin',(req,res)=>{
    res.render('signin')
})
app.use(express.static('public'))

app.listen(3000)
console.log('Server on port 3000')
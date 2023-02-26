const express=require('express');
const app=express();
const Blog=require('./models/conn.js')
app.listen(3000);
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/pblog');


app.set('view engine','ejs');

app.get('/',async(req,res)=>{
    const articles=await Blog.find().sort({createdAt:'desc'});
    res.render('index',{articles:articles});
})
app.get('/admin',(req,res)=>{
        res.render('new')
})


app.get('/cpp',async(req,res)=>{
  
    const articles=await Blog.find({cate:'C++'}).sort({
        createdAt:'desc'
    });
    res.render('index',{articles:articles});
   
})

app.get('/javascript',async(req,res)=>{
  
    const articles=await Blog.find({cate:'JS'}).sort({
        createdAt:'desc'
    });
    res.render('index',{articles:articles});
   
})
app.get('/css',async(req,res)=>{
  
    const articles=await Blog.find({cate:'CSS'}).sort({
        createdAt:'desc'
    });
    res.render('index',{articles:articles});
   
})
app.get('/HTML',async(req,res)=>{
  
    const articles=await Blog.find({cate:'HTML'}).sort({
        createdAt:'desc'
    });
    res.render('index',{articles:articles});
   
})
app.use(express.urlencoded({extended:false}))
app.post('/',async(req,res)=>{
    let article=new Blog({
          title:req.body.title,
            desc:req.body.desc,
            cate:req.body.cate

    })
    try {
        article=await article.save()
        res.render('added')
    } catch (error) {
       
        
    }
})
const   bodyParser          = require('body-parser'),
        mongoose            = require('mongoose'),
        methodOverride      = require('method-override'),
        express             = require('express'),
        app                 = express();

//App config

//db baglantisi
mongoose.connect("mongodb://reyiz:reyiz@reyiz-shard-00-00-zzstr.mongodb.net:27017,reyiz-shard-00-01-zzstr.mongodb.net:27017,reyiz-shard-00-02-zzstr.mongodb.net:27017/test?ssl=true&replicaSet=Reyiz-shard-0&authSource=admin",{ useMongoClient: true });
//mongoose.connect("mongodb://kay:reyiz@reyiz-shard-00-00-wpeiv.mongodb.net:27017,reyiz-shard-00-01-wpeiv.mongodb.net:27017,reyiz-shard-00-02-wpeiv.mongodb.net:27017/admin?ssl=true&replicaSet=Reyiz-shard-0&authSource=admin");

// dosyalarımı kullanma durumunda tekrar tekrar ejs yazmamam için en baştan
app.set('view engine', 'ejs');
// statik klasörümü paylaşıyorum
app.use(express.static('public'));
// form içlerine düzgünce ulaşmak için kullanıyorum
app.use(bodyParser.urlencoded({extended:true}));
// form method'larına ?_method= PUT, ya da DELETE şeklinde kullanabilirim.
app.use(methodOverride("_method"));


// 7 adet route'dan oluşan basit bir film projesi yapıcam bu methodlar sırasıyla

/*


***** INDEX *****
Örnek Path: /movies
Tip: GET
Mongoose Method: Movie.find();

***** NEW *****
Örnek Path:/movies/new
Tip: GET
Mongoose Method: NULL

***** CREATE *****
Örnek Path:/movies
Tip: POST
Mongoose Method: Movie.create();

***** SHOW *****
Örnek Path: /movies/:id
Tip: GET
Mongoose Method: Movie.findById();

***** EDIT *****
Örnek Path: /movies/:id/edit
Tip: GET
Mongoose Method: Movie.findById();

***** UPDATE *****
Örnek Path: /movies/:id
Tip: PUT
Mongoose Method: Movie.findByIdAndUpdate();

***** DESTROY *****
Örnek Path: /movies/:id
Tip: DELETE
Mongoose Method: Movie.findByIdAndRemove();

*/


// Filmler ile ilgili bölümler İsim, Puan, Resim, Eklenme Tarihi, Film Çıkış Tarihi


// Aşama 1 ##Öncelikle şema oluşturmamız gerekiyor, proje içerisinde product'ın temel bilgilerinin yer alacağı iskelet yani
var movieSchema = new mongoose.Schema({
    name: String,
    image: String,
    trailer: String,
    createDate: {type:Date, default:Date.now},
});

// Aşama 2 ##Şema oluştuktan sonra Model ataması yapılır
var Movie = mongoose.model("Movie", movieSchema);

// Aşama 2.1 ##Deneme için create methodu ile db'ye bir data yollayalım
/*
Movie.create({
    name: "Sin City",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rate: "8/10",
    date: "2005"
});
*/
// Düzgünce oluştuğu için yorum satırına çeviriyorum

// Aşama 3 ##Restfull Başlıyor

// Root'a girildiğinde /movielist'e redirect ediyorum
app.get("/", (req, res) =>{
    res.redirect("/movielist");
});

// Aşama 4 ## Route 1. INDEX
app.get("/movielist", (req,res) => {
    // find methodu ile buluyorum
    Movie.find({}, (err, movies) => {
        if(!err){
            // hata yoksa index.ejs'ye movies şeklinde gönderiyorum
            res.render("movielist", {movies:movies});
        };
    });
});

// Aşama 5 ## Route 2. NEW

app.get("/movielist/new", (req,res) =>{
    res.render("new");
});

// Aşama 6 ## ROUTE 3. CREATE
app.post("/movielist/", (req, res) => {
    // buradaki req.body.movie ile new.ejs içerisinde bulunan input'ların name'indeki attr ile alıyorum örnek: movie[name]
    Movie.create(req.body.movie, (err, newMovie) =>{
        if(!err){
            res.redirect("/movielist");
        }
    });
});

// Aşama 7 ## ROUTE 4. SHOW
app.get("/movielist/:id", (req, res) => {
    Movie.findById(req.params.id, (err, findMovie) => {
        if(!err){
            res.render("detail", {movie: findMovie});
        }
    });
});

// Aşama 8 ## ROUTE 5. EDIT
app.get("/movielist/:id/edit", (req, res) =>{
    Movie.findById(req.params.id, (err, findMovie) => {
        if(!err){
            res.render("edit", {movie: findMovie})
        }
    })
});

// Aşama 8 ## ROUTE 6. UPDATE
app.put("/movielist/:id", (req, res) =>{
    Movie.findByIdAndUpdate(req.params.id, req.body.movie, (err, findMovie) => {
        if(!err){
            res.redirect("/movielist/"+req.params.id);
        }
    })
});

// Aşama 9 ## ROUTE 7. DESTROY
app.delete("/movielist/:id", (req, res) =>{
    Movie.findByIdAndRemove(req.params.id, (err) => {
        if(!err){
            res.redirect("/movielist/");
        }
    })
});



// 3000 portundan bir server yaratıyorum, => bu işaret ES6 ile geliyor normal kullanımı function(){} şeklinde
var server = app.listen(3000, (error) =>{
    if(!error){
        console.log('App Started. Port Number: %d',server.address().port )
    }
});
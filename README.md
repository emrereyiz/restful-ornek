<h1>RESTful Routes</h1>

<p>Yapıyı öğrenmek için 7 route tekniğini uyguladım.</p>

<p><strong>Sırasıyla;</strong></p>

<strong>Route Adı:</strong> Index <br >
<strong>Örnek Yapı:</strong> /product <br >
<strong>HTTP Verb:</strong> GET <br >
<strong>Method: </strong> Yemek.find() <br > <br >



<strong>Route Adı:</strong> New <br >
<strong>Örnek Yapı:</strong> /product/new <br >
<strong>HTTP Verb:</strong> GET <br >
<strong>Method: </strong> N/A <br > <br >



<strong>Route Adı:</strong> Create <br >
<strong>Örnek Yapı:</strong> /product <br >
<strong>HTTP Verb:</strong> POST <br >
<strong>Method: </strong> Yemek.create() <br > <br >



<strong>Route Adı:</strong> Show <br >
<strong>Örnek Yapı:</strong> /product/:id <br >
<strong>HTTP Verb:</strong> GET <br >
<strong>Method: </strong> Yemek.findById() <br > <br >



<strong>Route Adı:</strong> Edit <br >
<strong>Örnek Yapı:</strong> /product/:id/edit <br >
<strong>HTTP Verb:</strong> GET <br >
<strong>Method: </strong> Yemek.findById() <br > <br >



<strong>Route Adı:</strong> Update <br >
<strong>Örnek Yapı:</strong> /product/:id <br >
<strong>HTTP Verb:</strong> PUT <br >
<strong>Method: </strong> Yemek.findByIdAndUpdate() <br > <br >



<strong>Route Adı:</strong> Destroy <br >
<strong>Örnek Yapı:</strong> /product/:id <br >
<strong>HTTP Verb:</strong> DELETE <br >
<strong>Method: </strong> Yemek.findByIdAndRemove()
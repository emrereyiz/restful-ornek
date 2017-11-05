<h1>RESTful Routes</h1>

<p>Yapıyı öğrenmek için 7 route tekniğini uyguladım.</p>

<p><strong>Sırasıyla;</strong></p>

<strong>Route Adı:</strong> Index
<strong>Örnek Yapı:</strong> /product
<strong>HTTP Verb:</strong> GET
<strong>Method: </strong> Yemek.find()


<strong>Route Adı:</strong> New
<strong>Örnek Yapı:</strong> /product/new
<strong>HTTP Verb:</strong> GET
<strong>Method: </strong> N/A


<strong>Route Adı:</strong> Create
<strong>Örnek Yapı:</strong> /product
<strong>HTTP Verb:</strong> POST
<strong>Method: </strong> Yemek.create()


<strong>Route Adı:</strong> Show
<strong>Örnek Yapı:</strong> /product/:id
<strong>HTTP Verb:</strong> GET
<strong>Method: </strong> Yemek.findById()


<strong>Route Adı:</strong> Edit
<strong>Örnek Yapı:</strong> /product/:id/edit
<strong>HTTP Verb:</strong> GET
<strong>Method: </strong> Yemek.findById()


<strong>Route Adı:</strong> Update
<strong>Örnek Yapı:</strong> /product/:id
<strong>HTTP Verb:</strong> PUT
<strong>Method: </strong> Yemek.findByIdAndUpdate()


<strong>Route Adı:</strong> Destroy
<strong>Örnek Yapı:</strong> /product/:id
<strong>HTTP Verb:</strong> DELETE
<strong>Method: </strong> Yemek.findByIdAndRemove()

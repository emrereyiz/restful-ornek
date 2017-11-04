RESTful Routes

Yapıyı öğrenmek için 7 route tekniğini uyguladım.

Sırasıyla;
Route Adı: Index
Örnek Yapı: /product
HTTP Verb: GET
Yemek.find()

Route Adı: New
Örnek Yapı: /product/new
HTTP Verb: GET
N/A

Route Adı: Create
Örnek Yapı: /product
HTTP Verb: POST
Yemek.create()

Route Adı: Show
Örnek Yapı: /product/:id
HTTP Verb: GET
Yemek.findById()

Route Adı: Edit
Örnek Yapı: /product/:id/edit
HTTP Verb: GET
Yemek.findById()

Route Adı: Update
Örnek Yapı: /product/:id
HTTP Verb: PUT
Yemek.findByIdAndUpdate()

Route Adı: Destroy
Örnek Yapı: /product/:id
HTTP Verb: DELETE
Yemek.findByIdAndRemove()

const app = require('express')();
const basicAuth = require('express-basic-auth')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, apiKey");
  next();
});

app.use((req, res, next) => {
  if (req.headers.apikey === 'TornadoesTsunamis1234$$$') {
    setTimeout(() => next(), 2000);
  } else if(req.method == 'OPTIONS') {
    next();
  } else {
    res.sendStatus(401);
    console.log(req.method, req.headers);
  }
})

app.get('/chapters', (req, res) => res.json([
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nisi expedita harum numquam autem dignissimos debitis accusantium fuga id officiis accusamus, ab dolores error porro assumenda ullam eum tempora libero et quo ipsam, quisquam nihil? Aliquid, reprehenderit. Aperiam neque possimus dignissimos quidem totam, doloribus porro quam inventore ut asperiores? Quasi perspiciatis quidem tenetur repellat sed fugit saepe porro beatae ab mollitia sit laboriosam rerum velit id iste, reiciendis delectus minus voluptas reprehenderit, sint similique adipisci officiis nobis consectetur amet. Dicta exercitationem accusantium ullam inventore laborum velit consequuntur aspernatur consectetur labore sit, cupiditate obcaecati neque quod saepe ducimus. Harum, sequi, dolores!'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga soluta iure, officia non debitis possimus ipsam accusantium aspernatur ea dignissimos atque tempora reiciendis deserunt obcaecati doloremque enim dolore, neque amet. Est enim odit fugiat aperiam repellendus dolores quam ex incidunt, vero corporis molestias aut, nisi accusamus eligendi placeat necessitatibus corrupti sint qui eveniet, laboriosam aliquid. Veniam ipsum voluptates non vitae temporibus est cumque labore illum facere quasi voluptas omnis eos magni error, qui impedit. Unde nostrum voluptatem nulla, obcaecati nobis ab ex voluptates, laborum ducimus eos impedit laudantium culpa. Asperiores possimus amet accusantium, sunt eligendi quisquam, cum odit maiores officia, vitae a nemo ipsa. Enim provident exercitationem nemo eos! Ullam, mollitia, explicabo! Iure quia quae facere, eum est laudantium necessitatibus.'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita odit quis veniam tempore dolores reiciendis, quam iusto eos ad, sed autem nostrum neque quia minus quasi voluptatibus debitis obcaecati. Harum ratione eum, perferendis vitae quod quis, ea accusantium cupiditate commodi porro nostrum quas delectus nam hic. Perferendis minus, molestias quasi, ad, dolore placeat repellat officiis quaerat doloremque, sed qui saepe. Eaque perferendis obcaecati, accusantium eum aut laborum recusandae iste error, iusto quae cumque dolores quis velit voluptates qui labore. Repellat ad non, eius sequi, dicta harum ea hic natus dolores ducimus ex. Debitis culpa reprehenderit, quos harum similique veritatis.'
  }
]));

app.post('/story', (req, res) => {
  res.json({id:1});
});

app.get('/profile', (req, res) => {
  res.json({
    current: [{id:1, title: 'Some Current Title'}],
    authored: [{id:1, title: 'Some Authored Title'}],
    past: [{id:1, title: 'Some Past Title'}]
  });
});


app.get('/stories', (req, res) => {
  res.json([
    {id:1, title: 'Some First Title', img: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {id:1, title: 'Some Second Title', img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&h=350'},
  ])
});















app.listen(3000);

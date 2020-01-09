var R = module.exports = {}

R.layout = function (title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      body {
        padding: 80px;
        font: 16px Helvetica, Arial;
      }
 
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }
    </style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
  </body>
  </html>
  `
} //做一個html的格式並將得到的title跟content塞入指定的位置

R.show = function (posts) {
  return R.layout(posts.title, `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
  `)
}//把posts的title塞進layout的title位置，title跟body塞入content並回傳

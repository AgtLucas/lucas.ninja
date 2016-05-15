const gh = require('gh-pages')
const path = require('path')

gh.publish(path.join(__dirname, '_site/**/*.*'), (err) => {
  if (err) {
    console.log('Error!', err)
  } else {
    console.log('Mission accomplished.')
  }
})

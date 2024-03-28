const b = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 1000)
  })
}

(
  async () => {
    let newText = await b("Hello")
    console.log(newText)
    newText = await b("World")
    console.log(newText)
  }
)()

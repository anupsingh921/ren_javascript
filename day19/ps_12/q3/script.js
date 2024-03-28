const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 1000 * n)
  })
}

(async () => {
  let text = await a("Resolving after 1 second", 1)
  console.log(text)
  text = await a("Resolving after 3 seconds", 3)
  console.log(text)
}
)()
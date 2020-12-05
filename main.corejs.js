import "core-js"

const main = () => {
  Promise.resolve().then(() => console.log('then'));
}

main();
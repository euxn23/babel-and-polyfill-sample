import "core-js/modules/es.promise"

const main = () => {
  Promise.resolve().then(() => console.log('then'));
}

main();
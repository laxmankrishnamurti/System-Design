// function getComponent(){
//     return import('lodash')
//     .then(({default: _}) => {
//         const element = document.createElement('div')
//         element.innerHTML = _.join(['Hello', 'webpack', 'dynamically', 'imported!!'], ' ');

//         return element;
//     })
//     .catch((error) => `An error occured while loading the component. Err: ${error}`)
// }

// getComponent()
// .then((component) => {
//     document.body.appendChild(component)
// })

// As import() returns a promise, it can be used with "async functions".

async function getComponent(){
    const element = document.createElement('div')
    const {default: _} = await import('lodash')

    element.innerHTML = _.join(['Hello webpack', 'dynamic import', 'successful'], ' ')
    return element;
}

getComponent()
.then((component) => {
    document.body.appendChild(component)
})
.then(async () => {
    const imported = await import('./anotherModule.js');
    console.log("Micro-Frontend Orchestrator : ", imported.default)
})
function getComponent(){
    return import('lodash')
    .then(({default: _}) => {
        const element = document.createElement('div')
        element.innerHTML = _.join(['Hello', 'webpack', 'dynamically', 'imported!!'], ' ');

        return element;
    })
    .catch((error) => `An error occured while loading the component. Err: ${error}`)
}

getComponent()
.then((component) => {
    document.body.appendChild(component)
})
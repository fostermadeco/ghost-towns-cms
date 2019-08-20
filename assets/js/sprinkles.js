/*
 * Allow for React components to be sprinkled in HTML and loaded dynamically
 *
 * Component can either be in same dir as this file or in index.js in a component dir:
 * AddFilesFormContainer.js or AddFilesFormContainer/index.js
 *
 * example:
 *   <div data-react="AddFilesFormContainer"></div>
 *
 * example with props:
 *   <div
 *      data-react="FormFieldText"
 *      data-react-props='{"label": "LABEL", "name":"SOMTHING"}'
 *   ></div>
 *
 */

const getComponentContext = () => require.context('./components', true, /\.(\/index)?js$/);

const getComponent = (context, componentName) => {
    const findComponentDir = new RegExp(`${componentName}(/index)?\\.js`);
    const componentDir = context.keys().find(path => path.match(findComponentDir));
    if (!componentDir) {
        throw new Error(
            `No dir or file found for component ${componentName}. Check your spelling or make sure the component file is in ./components like Example.js or Example/index.js`
        );
    }
    return context(componentDir).default;
};

const getSprinkleNodes = () => Array.from(document.querySelectorAll('[data-react]'));

export function getSprinkleReducers() {
    const nodes = getSprinkleNodes();
    const context = getComponentContext();

    return nodes.reduce((obj, node) => {
        const Comp = getComponent(context, node.dataset.react);
        if (Comp.reducers) {
            return Object.assign(obj, Comp.reducers);
        }
        return obj;
    }, {});
}

export function getSprinklesComponent() {
    const nodes = getSprinkleNodes();
    const context = getComponentContext();

    return nodes.map(node => {
        const Comp = getComponent(context, node.dataset.react);
        const props = node.dataset.reactProps ? JSON.parse(node.dataset.reactProps) : {};
        props.children = node.innerHTML;
        return { Comp, props, node };
    });
}

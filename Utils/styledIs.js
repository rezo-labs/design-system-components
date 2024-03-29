import { css } from 'styled-components';

const styledIf = (method, condition) => (...names) => (...args) => props => (
    // console.log('match', { names, args }) && 
    (method === 'match'
        ? props[names[0]] === names[1]
        : names[method](name => Boolean(props[name]) === condition))
        && css(...handleFunctions(args, props))
);

const handleFunctions = (args, props) => {
    let css = '';
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] === 'function') {
            const output = args[i](props);
            if (typeof output === 'string' && output.includes(':')) {
                css += output;
            }
        }
    }

    if (css) {
        const newArgs = args.slice(0);
        const argCss = args[0].slice(1);
        argCss.unshift(css + newArgs[0][0]);
        newArgs[0] = argCss;
        return newArgs;
    }

    return args;
};

const is = styledIf('every', true);
const isNot = styledIf('every', false);
const isOr = styledIf('some', true);
const isSomeNot = styledIf('some', false);
const match = styledIf('match');

export default is;
export {
    isNot, isOr, isSomeNot, match,
};

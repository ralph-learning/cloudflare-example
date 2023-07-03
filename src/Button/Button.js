import { test } from './constant.js'

console.log(test)

export default function Button({ children, onClick }) {
    function handleClick() {
        console.log('clicked!')
        onClick();
    }
    return <button onClick={handleClick} data-testid="button">{children}</button>
}
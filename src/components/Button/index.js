import parse from 'html-react-parser';

const Button = (props) => {
    const { customClass, display, value, trigger } = props
    return <div className={customClass}>
        <button onClick={() => trigger(value)}>
        {parse(display)}
        </button>
    </div>
}

export default Button;
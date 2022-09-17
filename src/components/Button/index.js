import parse from 'html-react-parser';

const Button = (props) => {
    const { display, value, trigger, index } = props
    return <div className={`grid-item${`-${index+1}`}`}>
        <button className={index + 1 === 23 ? 'btn-dynamic' : 'btn-fixed'} onClick={() => trigger(value)}>
        {parse(display)}
        </button>
    </div>
}

export default Button;
import parse from 'html-react-parser';

const Button = (props) => {

    const btnCss = (value) => {
        const specialCase = [ 23];
        if(specialCase.includes(value)){
            return true;
        }
        else{
            return false;
        }
    }

    const { display, value, trigger, index } = props
    return <div className={`grid-item${`-${index+1}`}`}>
        <button className={btnCss(index+1) ? 'btn-dynamic' : 'btn-fixed'} onClick={() => trigger(value)}>
        {parse(display)}
        </button>
    </div>
}

export default Button;
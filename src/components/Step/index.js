import parse from 'html-react-parser';

const Step = (props) => {
    const {solution} = props;
    return (<div className="steps-row">
        {solution}
    </div>)

}

export default Step;
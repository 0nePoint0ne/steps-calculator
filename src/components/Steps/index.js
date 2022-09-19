import Step from '../Step';

const Steps = (props) => {
    const {steps} = props;
    return (<div className="border">
        {
            steps.map((step) => { 
                return <Step solution={step} /> 
            }
            )
        }
    </div>)

}

export default Steps;
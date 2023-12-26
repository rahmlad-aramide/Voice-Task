import { Alert } from "../../assets/svg";
import { addWhitespaceAfterComma } from "../../utils/helper";

const DisplayErrorMessage = ({ errMessage = "" }) => {
    // const [display, setDisplay] = useState('flex');
    if (!errMessage) return;
    return <div className={`flex mt-2 text-red-500 text-sm break-words`}>
        <div className="pt-0.5 mr-1">
            <Alert />
        </div>
        {addWhitespaceAfterComma(errMessage)}</div>;
  };
  export default DisplayErrorMessage;
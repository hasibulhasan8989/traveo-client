import { useLoaderData } from "react-router-dom";


const Test = () => {
    const loadedData=useLoaderData()
    return (
        <div>
            just testing for page {loadedData._id}
        </div>
    );
};

export default Test;
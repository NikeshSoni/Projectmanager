import { useParams } from "react-router-dom";
const Preview = () => {
    const { id } = useParams();
    return(
        <>
            <h1>I am preview page and you have to replace your form here {id}</h1>
        </>
    )
}

export default Preview
import "./index.css"
const ApiItems =({apiItems})=>{
    const {activity,type,accessibility,key,link,price,participants}=apiItems;
    return(
        <div className="container">
            <h1>Activity:{activity}</h1>
            <h2>Type:{type}</h2>
            <h3>Accessibility:{accessibility}</h3>
            <h4>Key:{key}</h4>
            <h5>Link:{link}</h5>
            <h6>Price:{price}</h6>
            <p>Participants:{participants}</p>

        </div>
    )

}
export default ApiItems;


const Address = ({street, suite, city, zipcode, lat, lng}) => {
    return(
        <>
            <h3 className="title-info-box">Address information</h3>
                <span className="container-main-info">
                    <p><strong>Street:</strong> {street}</p>
                    <p><strong>Suite:</strong> {suite}</p>
                    <p><strong>City:</strong> {city}</p>
                    <p><strong>Zipcode:</strong> {zipcode}</p>
                    <p><strong>Geo:</strong> {lat} : {lng}</p>
                </span>
        </>
    )
}
export default Address;
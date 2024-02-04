const Company = ({name, catchPhrase, bs}) => {
    return(
        <>
            <h3 className="title-info-box">Company information</h3>
                <span className="container-main-info">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>CatchPhrase:</strong> {catchPhrase}</p>
                    <p><strong>Bs:</strong> {bs}</p>
                </span>
        </>
    )
}
export default Company;
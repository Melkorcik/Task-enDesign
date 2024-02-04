const Contact = ({email, phone, website}) => {
    return(
        <>
            <h3 className="title-info-box">Contact information</h3>
                <span className="container-main-info">
                    <p><strong>Email:</strong> {email}</p>                                  
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Website:</strong> {website}</p>                                
                </span>
        </>
    )
}
export default Contact;
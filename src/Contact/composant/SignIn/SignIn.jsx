import './SignIn.css'


const SignIn = () => {
  return (
    <div className="SignIn">
        <div className="Inscription">
            <div className="Inscription-Text">
                <h1>We would love to hear from you</h1>
                <p>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
            </div>
            <div className="Inscription-Name">
                <form action="submit">
                    <label for="Nom">Name</label>
                    <input type="text" name="Nom" />
                </form>
                <form action="submit">
                    <label for="Email">E-mail</label>
                    <input type="text" name="Email" />
                </form>
            </div>
            <form className="Inscription-Message" action="submit">
                <label for="message">Message</label>
                <input className='Message-Input' type="text" name="message" />
            </form>
             <button type="submit">SEND MESSAGE</button>
            
            
        </div>
        <div className="GetIn">
            <div className="GetIn-Visit">
                <h2>Visit Us</h2>
                <h4>UET Lahore, Punjab, Pakistan <br />Phone: +923039898987</h4>
            </div>
            <div className="GetIn-Touch">
                <h2>Get In Touch</h2>
                <h4>You can get in touch with us on this provided email <br /><br />Email: hmjawad087@gmail.com</h4>
            </div>

        </div>
    </div>
  )
}

export default SignIn
import "./Intro.css";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

function Into() {
  return (
    <>
      <div id="home" className=" introall">
        <div className="p-4 text-center">
          <h1 className="card-title mb-3 fw-bolder">Hi, I'm a Web Developer</h1>
          <p className="card-text fs-5">
            "I code because I believe every idea deserves an interface to be
            seen."
          </p>
          <p className="fs-5">"We strive for a better future."</p>
           <div className="social-icons">
                    <a href="https://www.linkedin.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} />
                    </a>
                    <a href="https://www.facebook.com/share/1D8q78xkqx/" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={30} />
                    </a>
                    <a href="https://wa.me/01211929157" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={30} />
                    </a>
                    <a href="https://m.me/yourusername" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                      <FaFacebookMessenger size={30} />
                    </a>
                    <a href="mailto:mostafa.ashmawy002@gmail.com" className="text-white mx-3">
                      <MdEmail size={30} />
                    </a>
                  </div>
        </div>
      </div>
    </>
  );
}

export default Into;

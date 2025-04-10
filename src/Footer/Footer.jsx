import './Footer.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-white text-center p-4">
      <div>
        <div className="social-icons mt-3">
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
        <p className=' mt-4'>&copy; 2025 Mostafa Ashmawy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

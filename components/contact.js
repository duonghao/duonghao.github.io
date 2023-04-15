import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="flex flex-wrap gap-4">  
            <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
        </div>
    );
}
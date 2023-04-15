import Card from "./card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faNodeJs, faJava, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'

export default function CardLayout() {
    return(
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="">
                <h3 className="text-lg font-semibold">
                    Mmmmmmm donuts...
                </h3>
                <p className="text-m">
                    ASCII rendering of a rotating donut
                </p>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faJs} size="2x"/>
                    <FontAwesomeIcon icon={faNodeJs} size="2x"/>
                </div>
            </Card>
            <Card className="">
                <h3 className="text-lg font-semibold">
                    Dictionary Client-Server
                </h3>
                <p>
                    Implementation of a distributed dictionary using sockets and threads.
                </p>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faJava} size="2x"/>
                </div>
            </Card>
            <Card className="">
                <h3 className="text-lg font-semibold">
                    Personal portfolio
                </h3>
                <p>
                    A personal portfolio showcasing all my work and experience.
                </p>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faReact} size="2x"/>
                    <FontAwesomeIcon icon={faHtml5} size="2x"/>
                    <FontAwesomeIcon icon={faCss3} size="2x"/>
                </div>
            </Card>
            {/* <Card className="">TBA</Card>
            <Card className="">TBA</Card> */}
        </div>
    )
}
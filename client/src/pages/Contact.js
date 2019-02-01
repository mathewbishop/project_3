import React, {Component} from "react";
import ContactSection from "../components/ContactSection";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import ContactModal from "../components/ContactModal";
import Navbar from "../components/FollowNavbar";
import LargeNavbar from "../components/LargeNavbar";


class Contact extends Component {

    render(){
        return(
            <div>
                <LargeNavbar />
                <Navbar />
                <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                    <PageTitle>
                        Contact
                    </PageTitle>
                    <ContactSection />
                    <ContactModal />
                </div>
                <Menu />
            </div>
        )
    }
}

export default Contact;
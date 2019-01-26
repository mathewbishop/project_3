import React from "react";
import AddBtn from "../components/AddBtn";
import ContactSection from "../components/ContactSection";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import ContactModal from "../components/ContactModal";

function Contact () {
    return(
        <div>
            <PageTitle>
                Contact
            </PageTitle>
            <ContactSection />
            <ContactModal />
            <Menu />
        </div>
    )
}

export default Contact;
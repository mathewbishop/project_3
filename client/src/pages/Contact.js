import React from "react";
import AddBtn from "../components/AddBtn";
import ContactSection from "../components/ContactSection";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";

function Contact () {
    return(
        <div>
            <PageTitle>
                Contact
            </PageTitle>
            <ContactSection />
            <AddBtn />
            <Menu />
        </div>
    )
}

export default Contact;
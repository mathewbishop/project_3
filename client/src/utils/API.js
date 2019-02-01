import axios from "axios";

export default {

    getAllPets: function() {
        return axios.get("/api/pets");
    },

    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    },

    saveReminder: function(reminder) {
        return axios.post("/api/reminders", reminder);
    },

    getReminders: function() {
        return axios.get("/api/reminders");
    },

    saveContact: function(contact) {
        return axios.post("/api/contacts", contact);
    },

    getContacts: function() {
        return axios.get("/api/contacts");
    }

};

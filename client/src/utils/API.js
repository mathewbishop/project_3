import axios from "axios";

export default {

    getAllPets: function() {
        return axios.get("/api/pets");
    },

    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    },

    getReminders: function() {
        return axios.get("/api/contacts");
    },

    getContacts: function() {
        return axios.get("/api/reminders");
    }
};

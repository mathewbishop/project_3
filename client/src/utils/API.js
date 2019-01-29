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
    }

};

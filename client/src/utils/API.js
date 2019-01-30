import axios from "axios";

export default {

    getAllPets: function() {
        return axios.get("/api/pets");
    },

    // getPets: function(id) {
    //     return axios.get("/api/pets" + id);
    // },

    // deletePets: function(id) {
    //     return axios.delete("/api/pets" + id);
    // },

    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    },

    saveReminders: function(reminderData) {
        return axios.post("/api/reminders", reminderData)
    },

    getReminders: function() {
        return axios.get("api/reminders")
    }
};

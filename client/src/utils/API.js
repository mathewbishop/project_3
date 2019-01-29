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

    fetchReminders: function() {
        return axios.get("/api/reminders");
    },

    getLocation: function(){
        return axios.get("https://follow3.herokuapp.com/https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCaMSi6l2hlOVydP7rSq991gyuxNPSqGio",
            {headers:{"Access-Control-Allow-Origin": "*"}})
    }

};

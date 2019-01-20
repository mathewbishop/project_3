import axios from "axios";

export default {

    getPets: function() {
        return axios.get("/api/pets");
    }

    // getPets: function(id) {
    //     return axios.get("/api/pets" + id);
    // },

    // deletePets: function(id) {
    //     return axios.delete("/api/pets" + id);
    // },

<<<<<<< HEAD
    // savePets: function(petData) {
    //     return axios.post("/api/pets", petData);
    // }
};
=======
    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    }
};
>>>>>>> 0413eb394438d3a8707c658aa0bf7b7ae8ce9691

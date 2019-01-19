<<<<<<< HEAD
 import axios from "axios";

 export default {

     getPets: function() {
         return axios.get("/api/pets");
     }
=======
import axios from "axios";

export default {

    getPets: function() {
        return axios.get("/api/pets");
    },
>>>>>>> d1939827e5de7375784187bec6e8d49220c0d7e5

    getPets: function(id) {
        return axios.get("/api/pets" + id);
    },

    deletePets: function(id) {
        return axios.delete("/api/pets" + id);
    },

<<<<<<< HEAD
//     savePets: function(petData) {
//         return axios.post("/api/pets", petData);
//     }
 };
=======
    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    }
};
>>>>>>> d1939827e5de7375784187bec6e8d49220c0d7e5

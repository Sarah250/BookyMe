import axios from 'axios';
import authHeader from "@/service/auth-header";

class Services {
    // TODO: Login

    register(user) {
        return axios.post(`${process.env.VUE_APP_API_ENDPOINT}/users/login`, user);
    }

    registerStore(store) {
        // let request = new Request(`${process.env.API_ENDPOINT}/stores`);

        return axios.post(`${process.env.VUE_APP_API_ENDPOINT}/stores`, store);
    }

    currentUser() {
        return axios.get(`${process.env.VUE_APP_API_ENDPOINT}/user/validation`, {
            headers: authHeader()
        });
    }

    uploadPhoto(id, file) {

        let fileForm = new FormData();
        fileForm.append('file', file, file.name);

        return axios.post(`${process.env.VUE_APP_API_ENDPOINT}/stores/${id}/photo`, fileForm, {
            headers: {
                ...authHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    deletePhoto(id, file) {
        return axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/stores/${id}/photos/${file}`, {
            headers: authHeader()

        })
    }

    updateDescription(id, description) {
        return axios.patch(`${process.env.VUE_APP_API_ENDPOINT}/stores/${id}/description`, {
            description: description
        }, {
            headers: authHeader()
        });
    }
    updatePhone(id, phone) {
        return axios.patch(`${process.env.VUE_APP_API_ENDPOINT}/stores/${id}/phone`, {
            phone: phone
        });
    }
    updateAddress(id, address) {
        return axios.put(`${process.env.VUE_APP_API_ENDPOINT}/stores/${id}/address`, address);
    }

    getStores() {
        return axios.get(`${process.env.VUE_APP_API_ENDPOINT}/stores/admin`, {
            headers: authHeader()
        });
    }

    getStoreById(id) {
        return axios.get(`${process.env.VUE_APP_API_ENDPOINT}/stores?_id=${id}`, {
            headers: authHeader()
        });
    }

    

    // TODO: Add Opening Hours


    // TODO: Add Catalog


    getStoreCatalog(id) {
        return axios.get(`${process.env.VUE_APP_API_ENDPOINT}/catalog/store/${id}`, {
            headers: authHeader()
        });
    }

    deleteCatalogItem(id) {
        return axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/catalog/store/item/${id}`, {
            headers: authHeader()
        });
    }

    addCatalogItem(id,item){
        console.log('Id que vai como parametro: ' + id)

        return axios.post(`${process.env.VUE_APP_API_ENDPOINT}/catalog/store/${id}`,item);
    }
    // TODO: Upload Images
}

export default new Services();
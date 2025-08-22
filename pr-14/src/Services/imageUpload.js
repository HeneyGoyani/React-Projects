import axios from "axios";


export const uploadImage = async (data) => {
    let formData = new FormData();

    formData.append('file', data);
    formData.append('upload_preset', "blinkit-clone");
    formData.append('cloud_name', 'dzcykg3pq');

    let res = await axios.post('https://api.cloudinary.com/v1_1/dzcykg3pq/image/upload', formData)
    return res.data.secure_url;
}
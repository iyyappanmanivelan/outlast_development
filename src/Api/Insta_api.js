import axios from "axios"

const Acces_Token = "IGAAS86u6UYdNBZAFMwY2paZA3BFSlVsd1IyVWF4VUZAkNG5OUWVJd0ExUW4tNW9jXzVqVGZAiaHZA3RERBaXRRT3ZA1NVczQ05WeGc2clZA3T2k0cFFyWW5nc3c3TW5uOExoaTFneWVLOGdhSm5RLWhBQXcwRm1CUk9WWHdKMmczQkYxTQZDZD"



export const Instagram_Function = async ()=>{

    const response =  await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${Acces_Token}`)
    return response?.data

}



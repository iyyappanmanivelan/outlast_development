import axios from "axios"

const Acces_Token = "IGAAS86u6UYdNBZAE9TWHppTWxZARTRqR0diZAWxEMm1TWHE3eWVhVmF4RlI1UzJ6aWd5emk3NFhENi1rVXNHbHotVWtLWWxRb1JSb1k0aU9Md3d5OE94UFdfSnZArdTFZAc3I4dlJ1c2dGVWNvbW96aURVZAmlkS0tCQjRuMEJJUGZATSQZDZD"



export const Instagram_Function = async ()=>{

    const response =  await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${Acces_Token}`)
    return response?.data

}



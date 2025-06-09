import axios from "axios"

const Acces_Token = "IGAAS86u6UYdNBZAE80SWxDS0M2QUo1UTNHcFJjci1pN2Y1VzBXWnB1YzBsZAmZAOc2NGMGZAoU3k1ZA1NGLTd5Qkk0Mm1qUl8yZAmxBMFZApRzdKQi1ubW1FSG1UR2N0dGVXSVRrSm1DVE1QSDZAjQmEyaHZAKaEVVMEFZAeEprZATBaSDl3UQZDZD"



export const Instagram_Function = async ()=>{

    const response =  await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${Acces_Token}`)
    return response?.data

}



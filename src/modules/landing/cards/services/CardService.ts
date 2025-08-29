import { baseURL } from "@/api/lamba-functions";

 
function getBearerToken() {
    return 'pk_test_LsRBKejzCOEEWOsw';  // Aquí debes reemplazarlo por la lógica que uses para obtener tu token.
}

export const createToken =async (card:any)=> {
   
    console.log(card);
    const response = await fetch(`${baseURL}/createToken`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getBearerToken()}`   
        },
        body: JSON.stringify(card)
    });
    return await response.json();
}

export const getCardInfoByToken = async (token:any) => {
    const response = await fetch(`${baseURL}/getCardByToken?token=${token}`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getBearerToken()}`  
        }
    });
    return await response.json();
}
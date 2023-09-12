const BASE_URL = process.env.REACT_APP_BASE_URL;

const USER_URL = `${BASE_URL}users`

export async function show(id) {
    const URL = `${USER_URL}/${id}`;
    const config = {
      method: "GET",
    };
  
    const res = await fetch(URL, config);
  
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid Request");
    }
  }

export async function addToFav(id) {
    const URL = `${USER_URL}/${id}/fav`;
    const config = {
      method: "POST",
    };
  
    const res = await fetch(URL, config);
  
    if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Request failed with status ${res.status}`);
      }
    }




    export async function create(data){
        //this points to the register functions
        const response = await fetch(`${USER_URL}/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        if(response.ok){
            return response.json()
        }else{
            return new Error("Invalid Request")
        }
    }
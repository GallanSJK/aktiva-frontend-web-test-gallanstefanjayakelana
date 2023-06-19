import axios from "axios"

const API_KEY = 'TzVCrOH4Y3BP2dBRUekEuVIwCc3iaacOwjBESxlA1b2rgBDGISfb7YdxGIOMHHnNEzq0dmxNiBKWuYYCV3_zFTiAC-Ug1zbcdxwDEl570jftOXz1ABzJvMkNWNyLZHYx';

export async function fetchBusinessApi(){
    const business = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    return business
}
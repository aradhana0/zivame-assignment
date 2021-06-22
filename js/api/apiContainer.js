/***
 *
 * API Wrapper
 *
 */

export default async function APIWrapperFn(method,
                                                 url,
                                                 a_param,
                                                 a_header,
                                                 data) {
    //default params
    const params = {
        api_key: 'e7e502cfa6101d1306e17f678aabc5c1',
        language: 'en-US',
        ...a_param                                                      //any params passed while calling the api will be added to the default param list
    }
    const base_url = 'https://api.themoviedb.org/3'                    //base url of the api call
    const app_url = new URL(base_url + url)                           //urls passed is appended with the base url and a new url is generated
    app_url.search = new URLSearchParams(params).toString();            //search paramhas been added

    //any default headers can be set here
    const header = {
        ...a_header
        //default header
    }

    const options = {
        method,
        params,
        header,
        body: data && JSON.stringify(data)
    };
    console.log('options in api wrapper.....', options)
    try{
        const res = await fetch(app_url, {...options})
        const formattedRes = await res.json()
        return formattedRes
    }
     catch (e){
            console.error(error);
            throw error
        };
}


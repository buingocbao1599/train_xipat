import React, { useEffect, useState } from 'react';
import {Shopify, session} from "@shopify/shopify-api"

function Index(props) {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // const client = new Shopify.client.Rest({session});
            // const response = client.get({path: "shop"});
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const json = await data.json();
            console.log("json: " ,json);
            return json;
        }

        const result  = fetchData()
        .then((respone) => console.log("res: ", respone))
        .catch( () => console.error);

        console.log("result on useEffect: ", result);
        setData(result)
    }, [])

    

    console.log("data: ", data);

    return (
        <div>
            
        </div>
    );
}

export default Index;
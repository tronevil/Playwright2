import { test, expect } from '@playwright/test'

    test('Scenarion1: Log in with Incorect Account ', async ({ request }) => {
        const myRequest = await request.post('https://reqres.in/api/login',
            {  
            headers: {
            "x-api-key": "reqres-free-v1"
            },
            data:{
                    "email": "tron@yahoo.com",
                    "password": "Tester"
                    }
            }  
        ) 
        const body = await myRequest.json();
        //Print Response body  
            console.log(body) // This logs the API response;
        //VERIFY RESULT
        expect(myRequest.status()).toBe(400);
        expect(body.error).toBe('user not found');
    }),
    test('Scenarion2: Log in with corect Account ', async ({ request }) => {
        const myRequest = await request.post('https://reqres.in/api/login',
            {  
            headers: {
            "x-api-key": "reqres-free-v1"
            },
            data:{
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                    }
            }  
        ) 
        const body = await myRequest.json();
        //Print Response body  
            console.log("Token:"+body.token) // This logs the API response;
        //VERIFY RESULT
        expect(myRequest.status()).toBe(200);

    })
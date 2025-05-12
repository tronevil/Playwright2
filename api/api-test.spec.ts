import { test, expect } from '@playwright/test'

test('Scenarion1: API Get User', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  const body = await response.json();
//Print Response body  
  console.log(body) // This logs the API response

//VERIFY RESULT
  expect(response.status()).toBe(200);
  expect(body.data[0].email).toBe('michael.lawson@reqres.in');
}),
test('Scenarion2: API Post User', async ({ request }) => {
  const myRequest = await request.post('https://reqres.in/api/users',
    {  
      headers: {
       "x-api-key": "reqres-free-v1"
      },
      data:{
              "name": "Tron Ho",
              "job": "Tester"
            }
    }  
  ) 
  const body = await myRequest.json();
  //Print Response body  
    console.log(body) // This logs the API response;
  //VERIFY RESULT
  expect(myRequest.status()).toBe(201);
  expect(body.name).toBe('Tron Ho');
  expect(body.job).toBe('Tester');
})

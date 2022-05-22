// src/mocks/handlers.js
import { rest } from 'msw'
//import { data } from '../fakedata'

export const handlers = [

  rest.get('http://localhost:8000/homes', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    //console.log({data})
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json(
        {
          firstname: 'Moussa'
        }
      ),
    )
  }),
]
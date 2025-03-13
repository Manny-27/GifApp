/* eslint-disable no-undef */
import { getGift} from '../../src/helpers/getGifts'

describe('Pruebas en getGifs()', () => {
  
    test('debe de retornar un arreglo de gifs', async() => {
      
        const gifs = await getGift('gintama');
        // console.log(gifs)
        expect( gifs.length).toBeGreaterThan( 0 )
        expect( gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
    
})

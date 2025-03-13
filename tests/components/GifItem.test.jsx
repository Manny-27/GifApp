/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Pruebas en <GifItem/>', () => {

    const title = 'gintama';
    const url = 'https://gintama.com';

  test('debe de hacer match con el snapshot ', () => {
    
    const {container} = render( <GiftItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  })
  
//   test('debe de mostrar la iamgen con el URL y el ALT indicado', () => {
    
//     render( <GiftItem title={title} url={url} />)
//     // screen.debug();
//     // expect( screen.getByRole('img').src ).toBe(url);
//     const { src, alt} = screen.getByRole('img')
//     expect(src).toBe( url)
//     expect( alt).toBe(alt)
//   });
  
  test('debe de mostrar el titulo en el componente', () => {
    render( <GiftItem title={title} url={url} />);
    expect( screen.getByText(title)).toBeTruthy();
  })
  
})

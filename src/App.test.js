import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data.json'

describe('Star Wars APP', () => {
  //funcion que hace que se ejecute esto antes de los test
  beforeAll(() => jest.spyOn(window, 'fetch')); //jest.spyOn para que este vigilando en el objeto window el metodo fetch

  it('Should show a list of characters from the API', async() => {
      window.fetch.mockResolvedValueOnce({ //simulación de que el método fetch devuleve lo siguiente
        ok: true,
        json: async () => data,
      });

      render(<App />);
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith('http://swapi/dev/api/people/');

      for (let character of data.results) {
        expect(await screen.findByText(character.name)).toBeInTheDocument();
      }
  })

});
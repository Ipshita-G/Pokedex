# Pokédex Application

A simple web application that allows users to search for Pokémon and view their details using the PokéAPI.

## Features

- **Search Functionality**: Enter a Pokémon name to fetch its data
- **Visual Display**: Shows Pokémon sprite/image
- **Type Information**: Displays the Pokémon's type(s)
- **Dynamic Styling**: Card background color changes based on the Pokémon's type
- **Responsive Design**: Works on different screen sizes
- **Real-time API Integration**: Fetches data from the PokéAPI

## Type-Based Color Coding

The application displays different background colors for Pokémon cards based on their type:

- **Fire**: Orange (#F08030)
- **Water**: Blue (#6890F0)
- **Grass**: Green (#78C850)
- **Electric**: Yellow (#F8D030)
- **Psychic**: Pink (#F85888)
- **Ice**: Cyan (#98D8D8)
- **Dragon**: Purple (#7038F8)
- **Dark**: Brown (#705848)
- **Fairy**: Light Pink (#EE99AC)
- **Other Types**: Yellow (#e9e996)

## How to Use

1. Open `index.html` in your web browser
2. Enter a Pokémon name in the search field (e.g., "pikachu", "charizard")
3. Click the "Fetch Pokémon" button
4. The application will display the Pokémon's image, name, and type(s) with an appropriate color-coded card

## Technologies Used

- **HTML**: Page structure
- **CSS**: Styling and responsive layout
- **JavaScript**: API requests and DOM manipulation
- **PokéAPI**: Free Pokémon data source

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- Internet connection (to fetch data from PokéAPI)

## Project Structure

```
Pokedex/
├── index.html      # HTML markup and structure
├── index.js        # JavaScript logic for API calls and DOM updates
├── style.css       # CSS styling
└── README.md       # Project documentation
```

## API Source

This project uses the free [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

## Future Enhancements

- Add error handling for invalid Pokémon names
- Display additional Pokémon stats (ability, weight, height, etc.)
- Add a history of recently searched Pokémon
- Implement random Pokémon feature
- Add pagination to browse through the Pokédex
- Implement favorite/save functionality

## License

This project is for educational purposes.

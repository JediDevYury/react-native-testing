import {fireEvent, render, screen} from '@testing-library/react-native';
import TabOneScreen from "@/app/(tabs)";
import '@testing-library/react-native/extend-expect';


describe('<TabOneScreen />', () => {
    it('Shows Galaxies Text', () => {
        const {getByText} = render(<TabOneScreen />);

        expect(getByText('Galaxies Feed')).toBeTruthy();
    });

    it('Shows Galaxies Image', () => {
        render(<TabOneScreen />);

        const image = screen.getByRole('img')

        expect(image.props.source.uri).toEqual('https://galaxies.dev/img/logos/logo--blue.png')
    });

    it('Get separator by test id', () => {
      render(<TabOneScreen/>);
      const separator = screen.getByTestId('separator')

      expect(separator).toBeOnTheScreen()
    });

    it('Shows the search input', () => {
      const searchText = "My search string"
      render(<TabOneScreen/>)

      const search = screen.getByPlaceholderText('Search galaxies')

      fireEvent.changeText(search, searchText)

      const displayedValue = screen.getByDisplayValue(searchText)

      expect(displayedValue).toHaveDisplayValue(searchText)
    })
});

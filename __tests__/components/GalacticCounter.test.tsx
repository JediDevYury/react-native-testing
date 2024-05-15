import {userEvent, render, screen} from "@testing-library/react-native";
import GalacticCounter from "@/components/GalacticCounter";
import '@testing-library/react-native/extend-expect';

describe('GalacticCounter', () => {
  const user = userEvent.setup({
    advanceTimers: jest.advanceTimersByTime,
  });

  it('should add 1 to the counter', async () => {
    jest.useFakeTimers();
    render(<GalacticCounter />);

    const add = screen.getByText('Add');

    await user.press(add);

    expect(screen.getByTestId('CounterText')).toHaveTextContent('Stars: 1');
  });

  it('should remove 1 from the counter', async () => {
    jest.useFakeTimers();
    render(<GalacticCounter />);

    const decrease = screen.getByText('Decrease');

    await user.press(decrease);

    expect(screen.getByTestId('CounterText')).toHaveTextContent('Stars: -1');
  });
});

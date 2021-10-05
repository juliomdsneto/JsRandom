import { render, screen } from '@testing-library/react';
import App from './App';


it("captures clicks", done => {
  function handleClick() {
    done();
  }
  const { getByText } = render(
    <Button onClick={handleClick}>Click Me</Button>
  );
  const node = getByText("Click Me");
  fireEvent.click(node);
});
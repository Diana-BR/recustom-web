import { render, screen } from '@testing-library/react'
import UserTable from '../src/components/UserTable';
import App from '../src/App';

test("List of users", () => {
    render(<App/>);

    const element = screen.getByText(/learn react/i);
    expect(element).toBeInTheDocument();
})
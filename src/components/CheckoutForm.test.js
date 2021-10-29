import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);

    const form = screen.getByTestId(/checkout form/i);
    expect(from).toBeInTheDocument();
    expect(form).toHaveTextContext();
    expect(form).toBeTruthy();
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const form = screen.getByTestId(/checkout form/i);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const zipcode = screen.getByLabelText(/zipcode/i);
    const state = screen.getByLabelText(/state/i);
    const submit = screen.queryByRole('button');

    userEvent.type(firstName, 'Cain');
    userEvent.type(lastName, 'Palmer');
    userEvent.type(address, '123 Main St');
    userEvent.type(city, 'Buffalo');
    userEvent.type(zipcode, '12345');
    userEvent.type(state, 'New York');
    userEvent.type(submit, 'submit');

    const successMessage = screen.getAllByTestId('successMessage');

    expect(form).toBeInTheDocument();
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent();
});

import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
    it('should be able to display 4 contact photo', async () => {
        render(<App></App>);
        const photos = screen.getAllByRole('img');
        expect(photos).toHaveLength(4);
    });

    it('should be able to add new contact', async () => {
        render(<App></App>);
        const input = screen.getAllByRole('textbox');
        const button = screen.getAllByRole('button');

        fireEvent.change(input[0], { target: { value: 'Nina' } });
        fireEvent.change(input[1], { target: { value: '087771711777' } });
        fireEvent.change(input[2], { target: { value: 'nina@email.com' } });
        fireEvent.change(input[3], { target: { value: 'http://placekitten.com/100' } });
        fireEvent.click(button[0]);

        const photos = screen.getAllByRole('img');
        const phone = screen.getByText(/087771711777/i);
        const email = screen.getByText(/nina@email.com/i);
        expect(photos).toHaveLength(5);
        expect(phone).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    });
});


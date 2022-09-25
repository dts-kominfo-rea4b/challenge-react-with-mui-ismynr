import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import ContactForm from './components/ContactForm';

describe('ContactForm', () => {
    it('should have four input', async () => {
        render(<ContactForm></ContactForm>);
        const input = screen.getAllByRole('textbox');
        expect(input).toHaveLength(4);
    });
    
    it('should have one button', async () => {
        render(<ContactForm></ContactForm>);
        const button = screen.getAllByRole('button');
        expect(button).toHaveLength(1);
    });
});


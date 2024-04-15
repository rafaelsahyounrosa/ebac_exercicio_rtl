import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Teste de inserção de 2 comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Muito legal!',
            }
        });
        fireEvent.click(screen.getByTestId('comment-btn'));
    
        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Parabéns!',
            }
        });
        fireEvent.click(screen.getByTestId('comment-btn'));

        expect(screen.getAllByTestId('comment-done')).toHaveLength(2);
    });
});
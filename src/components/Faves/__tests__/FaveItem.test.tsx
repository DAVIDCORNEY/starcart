import { render, screen, fireEvent } from '@testing-library/react';
import { FAVE_DATA } from '../../../../test-data/FaveData';
import FaveItem from '../FaveItem';

describe('FaveItem', () => {
    const fave = FAVE_DATA;
    const handleRating = jest.fn();
    const handleRemove = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        render(
            <FaveItem
                fave={fave}
                handleRating={handleRating}
                handleRemove={handleRemove}
            />
        );
    });
    it('should render the FaveItem component', () => {
        expect(screen.getByText('A New Hope')).toBeInTheDocument();
    });
        
    it('should display the delete button and call handleRemove on click', () => {
        fireEvent.click(screen.getByTestId('delete-fav'));
        expect(handleRemove).toHaveBeenCalledTimes(1);
    });
    
    it('should display the rating component and call handleRating on click', () => {
        const element = document.querySelector('[aria-posinset="1"]');
        fireEvent.click(element);
        expect(handleRating).toHaveBeenCalledTimes(1);
    });
});
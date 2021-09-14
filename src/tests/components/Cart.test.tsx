import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {Cart} from '../../components';
import { cartMock } from '../mockData/cartMock';


test('renders Cart correctly', () => {
    const mockCallBack = jest.fn()
  const {getByText,getAllByText} = render(<Cart data={cartMock} onRemoveFromCartClick={mockCallBack} />);
  cartMock.forEach((item,index)=>{
    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(`Quantity: ${item.quantity}`)).toBeInTheDocument();
    expect(getAllByText('Remove from Cart')[index]).toBeInTheDocument();
  })
});

it('should execute callback on clicking "Remove from Cart" button', () => {
  const mockCallBack = jest.fn()
  const {getAllByText} = render(<Cart data={cartMock} onRemoveFromCartClick={mockCallBack} />);
  fireEvent.click(getAllByText('Remove from Cart')[0])
  expect(mockCallBack).toBeCalled()
});

it('should display total price', () => {
  const mockCallBack = jest.fn()
  const {getByText} = render(<Cart data={cartMock} onRemoveFromCartClick={mockCallBack} />);
  expect(getByText(`$37.00`)).toBeInTheDocument()
});

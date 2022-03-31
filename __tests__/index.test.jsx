import {render, screen} from '@testing-library/react';
import Login from '../pages/Login'

describe('login', () => {
  it('should render the login page', () => {
    render(<Login />)
    expect(screen.getByRole('heading', {  name: /sign in/i}))
  })
})
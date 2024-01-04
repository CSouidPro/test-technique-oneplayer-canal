import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { CrewMember } from '../models/CrewMember'
import CrewItem from './CrewItem'

const mockCrewMember: CrewMember = {
  id: 1,
  name: 'John Doe',
  role: 'Engineer',
  image: 'https://via.placeholder.com/150',
}

describe('CrewItem', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <CrewItem crewMember={mockCrewMember} />
    )

    expect(getByText(mockCrewMember.name)).toBeInTheDocument()
    expect(getByText(mockCrewMember.role)).toBeInTheDocument()
    expect(getByAltText('Crew Member')).toHaveAttribute(
      'src',
      mockCrewMember.image
    )
  })

  it('renders error message when image fails to load', () => {
    const { getByText, getByAltText } = render(
      <CrewItem crewMember={mockCrewMember} />
    )

    const image = getByAltText('Crew Member') as HTMLImageElement
    fireEvent.error(image)

    expect(getByText('Error loading image')).toBeInTheDocument()
  })
})

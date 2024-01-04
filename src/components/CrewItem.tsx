import { useState } from 'react'

import { CrewMember } from '../models/CrewMember'

const CrewItem = ({ crewMember }: { crewMember: CrewMember }) => {
  const [error, setError] = useState(false)
  const handleImageError = () => {
    setError(true)
  }

  return (
    <div>
      {error && <p>Error loading image</p>}
      {!error && (
        <div>
          <img
            className="w-30 h-52"
            src={crewMember.image}
            alt="Crew Member"
            onError={handleImageError}
          />
          <div>{crewMember.name}</div>
          <div>{crewMember.role}</div>
        </div>
      )}
    </div>
  )
}

export default CrewItem

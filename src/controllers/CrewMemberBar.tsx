import { useEffect, useState } from 'react'

import { CrewMember } from '../models/CrewMember'
import CrewItem from '../components/CrewItem'

const CrewMemberBar = () => {
  const [crew, setCrew] = useState<CrewMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch list of items
        const crewResponse = await fetch(
          'https://teamplayer.ddns.net:9094/crew'
        )
        const crew: CrewMember[] = await crewResponse.json()

        setCrew(
          crew.sort((a, b) => {
            // Assuming each URL has a name property, modify this accordingly
            const nameA = a.name.split(' ')[1].toLowerCase()
            const nameB = b.name.split(' ')[1].toLowerCase()

            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
          })
        )
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <p> Loading...</p>
      ) : (
        <div className="border-2 border-black bg-black text-white">
          <h1 className="text-left font-bold m-6 underline decoration-white">
            Staff
          </h1>
          <div className="border-2 border-white flex max-w-screen overflow-x-auto m-6">
            <ul className="flex list-none p-0 m-0">
              {crew?.map((crewMember: CrewMember, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 p-2 border-r border-gray-300 last:border-r-0"
                >
                  <CrewItem crewMember={crewMember} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default CrewMemberBar

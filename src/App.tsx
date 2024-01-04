import React from 'react'

import VideoPlayer from './controllers/VideoPlayer'

function App() {
  const videoUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

  return (
    <div className="text-center items-center mb-4">
      <h1 className="font-bold bg-blue-500 items-center text-white">
        React app with Rx Player
      </h1>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  )
}

export default App

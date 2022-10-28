import { useState } from 'react'
import RenderLink from './components/renderLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="content_wrapper">
        <header>
          <div>
            <img id="profile_img" src="/images/default.png" alt="" />
            <img className="share" src="/images/share.png" alt="" />
            <img className="more" src="/images/more.png" alt="" />
          </div>

          <h1 id="twitter">Pauleye12_</h1>
          <h2 id="slack"></h2>
        </header>
        <RenderLink />
        <div className="socials">
          <img src="../public/images/slack.png" alt="" />
          <img src="../public/images/icon.png" alt="" />
        </div>
      </main>
      <footer>
        <div>
          <img src="/images/zuri.internship_logo.png" alt="" />
          <h2>HNG Internship 9 Frontend Task</h2>
          <img src="/images/i4g.png" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App

import { useState } from 'react'
import RenderLink from './components/renderLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="content_wrapper">
        <header>
          <div className="header_wrapper">
            <div className="img_wrapper">
              <img
                className="profile_img"
                id="profile_img"
                src="/images/default.png"
                alt=""
              />
              <div className="hover_state">
                <img src="/images/camera-01.png" alt="" />
              </div>
            </div>
            <button className="options">
              <div className='options_content' title='share this image'>
                <img className="share" src="/images/share.png" alt="" />
                <img className="more" src="/images/more.png" alt="" />
                <div className="options_hover"></div>
              </div>
            </button>
          </div>

          <h1 id="twitter">Pauleye12_</h1>
          <h2 id="slack">Adeleye Oreoluwa</h2>
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

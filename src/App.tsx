import * as React from 'react';
import './style.css';
import * as Post1 from './Post';
import * as Board from './Board';
import * as TabBar from './TabBar';
import * as Mnu from './Mnu';

export default function App() {
  return (
    <main>
      <header>
        <h1>Sonnets by William Shakespeare</h1>
      </header>
      <article>
      <TabBar.default />
      {/*
        <h2>
          Sonnet 1<br></br>
          <small>by William Shakespeare</small>
        </h2>
      */}

        {/*<div>*/}
       {/* 
        <h1>Hello StackBlitz!</h1>
        <h2 id="quote">Hello StackBlitz!</h2>
        <p class="small-heading">small heading</p>
        <p>Start etthisditing to see some m agic happen :)</p>
        <p>This is a new paragraph for entering the new momnent</p>
       */}
     {/*   <Post1.default />
        <Board.default />*/}

       {/* <Mnu.default />*/}
        {/*</div>*/}
        {/*
        <p>
          <span>From fairest creatures we desire increase,</span>
          ...
        </p>
        */}
      </article>
      <aside>
        <section aria-label="sonnet 2">
          <h3>Sonnet 2</h3>
          <p>
            When forty winters shall besiege thy brow,
            <br></br>And dig deep trenches in thy beauty's field, ...
          </p>
          <a href="">Read more of Sonnet 2</a>
        </section>
        <section>
          <h3>Sonnet 3</h3>
          <p>
            Look in thy glass and tell the face thou viewest,
            <br></br>Now is the time that face should form another, ...
          </p>
          <a href="">Read more of Sonnet 3</a>
        </section>
      </aside>
      <section class="author-details">
        <h3>
          <small>About the Author</small>
          <br></br>William Shakespeare
        </h3>
        <p>English playwright, poet, ...</p>
      </section>
      <section class="plays">
        <h3>Checkout out his plays:</h3>
        <ul>
          <li>
            <a href="">All's Well That Ends Well</a>
          </li>
        </ul>
      </section>
      <section class="graphics">
        <svg viewBox="0 0 710 300" width="100%" height="300">
          <rect width="60" height="300" x="0" />
          <rect width="60" height="300" x="65" />
          <rect width="60" height="300" x="130" />
          <rect width="60" height="300" x="195" />
          <rect width="60" height="300" x="260" />
          <rect width="60" height="300" x="325" />
          <rect width="60" height="300" x="390" />
          <rect width="60" height="300" x="455" />
          <rect width="60" height="300" x="520" />
          <rect width="60" height="300" x="585" />
          <rect width="60" height="300" x="650" />
        </svg>
      </section>
      <footer>
        <p>
          This section is the footer, spanning the whole row. Want to read more
          ...
        </p>
      </footer>
    </main>
  );
}

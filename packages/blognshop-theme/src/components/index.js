import React from "react";
import { connect } from 'frontity'
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'
import List from './list'

const Root = ({ state }) => {
  return (
    <>
      <h1>Hello, Yuye Yang</h1>
      <p>Current URL: {state.router.link}</p>

      <nav>
        <Link link='/'>Home</Link>
        <Link link='/page/2'>More Posts</Link>
        <Link link='/conocenos'>Quienes somos</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive}>This is a list</div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage}>This is a page</div>
        </Switch>
      </main>
    </>
  );
};

export default connect(Root)
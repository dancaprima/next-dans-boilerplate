import 'isomorphic-fetch'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import Button from '../components/Button'
import initStore from '../utils/store'

class Index extends React.Component {
	static async getInitialProps({ query }) {
		// Adding a default/initialState can be done as follows:
    // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
    console.log('>> params are: ', query);

	}

	render() {
		const { stars } = this.props
		return (
      <div>
      <Link prefetch href={{ pathname: '/page', query: { name: 'Zeit' } }}><a>Link</a></Link>
        <Button title="dancas" />
        <div>
          <button className="from-css">Danca</button>
				</div>
			</div>
		)
	}
}

export default withRedux(initStore)(Index)

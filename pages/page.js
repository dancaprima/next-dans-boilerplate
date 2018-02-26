import React from 'react';
import Text from '../components/Text'

class Page extends React.Component{
  static async getInitialProps({query}){
    console.log('>> params are: ', query);

  }
  render(){
    return (
      <div>
        <Text text="danca ggg" />
      </div>
    )
  }
}

export default Page
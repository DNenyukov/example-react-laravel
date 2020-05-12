import React from 'react';
import Header from '../Header/Header';
import Repices from './Repices';
import Feedback from './Feedback';

class Index extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Repices />
                <Feedback />
                {/* <Footer /> */}

            </div>
        );
    }
}

export default Index;

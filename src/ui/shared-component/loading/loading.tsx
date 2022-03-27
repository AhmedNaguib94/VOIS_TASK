import { ReactElement } from 'react';

import './loading.scss';

const Loading: React.FC = (): ReactElement => {
    return (
        <div className="loading-container flex center" role="container">
            <div className="overlayPage flex center" role="overlayPage">
                <div className="box-grid">
                    <div className="box box1"></div>
                    <div className="box box2"></div>
                    <div className="box box3"></div>
                    <div className="box box4"></div>
                    <div className="box box5"></div>
                    <div className="box box6"></div>
                    <div className="box box7"></div>
                    <div className="box box8"></div>
                    <div className="box box9"></div>
                </div>
            </div>
        </div>

    )
}

export default Loading;
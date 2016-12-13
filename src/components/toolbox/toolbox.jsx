import React, {PropTypes} from 'react';

import IconZoomPlus from 'react-icons/lib/ti/zoom-in';
import IconZoomMinus from 'react-icons/lib/ti/zoom-out';
import IconComment from 'react-icons/lib/fa/comment';

import {
    MODE_PANNING,
    MODE_ADDING_COMMENT,
    MODE_ZOMMING_IN,
    MODE_ZOMMING_OUT
} from '../../constants';

import ToolboxButton from './toolbox-button';


const STYLE = {
    
    position: 'absolute',
    bottom: '10px',
    right: '0px',
    padding: "10px 10px 0px 10px"

};

export default function Toolbox({mode}, {actions}) {



    return (
        <div style={{...STYLE}}>



            <ToolboxButton active={[MODE_ZOMMING_IN].includes(mode)} tooltip={"Zoom in"} 
                           onClick={event => actions.selectToolZoomIn()}>
                <IconZoomPlus />
            </ToolboxButton>

            <ToolboxButton active={[MODE_ZOMMING_OUT].includes(mode)} tooltip={"Zoom Out"}
                           onClick={event => actions.selectToolZoomOut()}>
                <IconZoomMinus />
            </ToolboxButton>

            <ToolboxButton active={[MODE_ADDING_COMMENT].includes(mode)} tooltip={"Aggiungi Commento"}
                           onClick={event => actions.selectAddComment()}>
                <IconComment />
            </ToolboxButton>



        </div>
    )
}

/*

Toolbox.propTypes = {
    mode: PropTypes.object.isRequired,
};

Toolbar.contextTypes = {
    azioni: PropTypes.object.isRequired
 };
 
 */
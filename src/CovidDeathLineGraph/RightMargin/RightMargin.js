import React from 'react'

import styled from 'styled-components'
import MovingDeathLabel from './MovingDeathLabel'
import RightTickForRightMargin from './RightTickForRIghtMargin'

const RightMargin = ({ yfunction, currentDeathNumbers, currentDeathNumbersYScaled, width,height, marginRight }) => {
    const marginX = width - marginRight

    return (
        <>
            <g transform={`translate(${marginX},0)`}>
                <StyledVerticalPath id="verticalLineAxis" d={`M0.5,${height}.5V20`} className="domain"></StyledVerticalPath>
                <MovingDeathLabel width={width} marginRight={marginRight} currentDeathNumbersYScaled={currentDeathNumbersYScaled} currentDeathNumbers={currentDeathNumbers} />
                <RightTickForRightMargin value={10000} currentDeathNumbers={currentDeathNumbers} yfunction={yfunction} />
                <RightTickForRightMargin value={30000} currentDeathNumbers={currentDeathNumbers} yfunction={yfunction} />
                <RightTickForRightMargin value={50000} currentDeathNumbers={currentDeathNumbers} yfunction={yfunction} />
                <RightTickForRightMargin value={70000} currentDeathNumbers={currentDeathNumbers} yfunction={yfunction} />
                <RightTickForRightMargin value={90000} currentDeathNumbers={currentDeathNumbers} yfunction={yfunction} />
            </g>
        </>
    )
}

export default RightMargin
const StyledVerticalPath = styled.path`
    stroke:grey;
    stroke-width:2;
`
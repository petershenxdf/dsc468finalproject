import React, { useState, useEffect, useCallback } from 'react';
import USA from './USA'
import { fetchDailyCovidData } from './data'
import CovidDeathLineGraph from './CovidDeathLineGraph'
import CovidImageGallery from './CovidImageGallery'
import styled from 'styled-components'
import noop from 'lodash'
import ZoomWindow from './ZoomWindow'
import ZoomParticipant from './ZoomParticipant';
import ReactPlayer from 'react-player'

function App() {
  const startDate = new Date(Date.UTC(2020, 2,11,0,0))
  const endDate = new Date(Date.UTC(2020,4,24))
  const [result, setResult] = useState(null)
  const [date, setDate] = useState(startDate)
  const [dateIndex, setDateIndex] = useState(0)
  const [playFarmAnimal, setPlayFarmAnimal] = useState(false)


  const filterResultByDate = useCallback((result, date) => {
    const formatted = `${date.toISOString().split('T')[0].replace(/-/g, '')}`
    return result && result.filter(item => item.date == formatted)
  })

  var filteredResults = filterResultByDate(result, date);

  const calculateTotalDeath = (filteredResults) => {
    if (filteredResults) {
      const {death} = filteredResults.reduce((item, {death}) => ({ death: death + item.death }), { death: 0})      
      return isNaN(death) ? 0 : death
    }
    return 0
  };

  const incrementDate = e => {
    e.stopPropagation();
    var day = 60 * 60 * 24 * 1000;
    if (date.getTime() <= endDate.getTime()) {
      const nextDate = new Date(date.getTime() + day)
      setDate(nextDate)
      setDateIndex(dateIndex+1)
    }
  }
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const resetDate = useCallback(e => {
    e.stopPropagation();
    setDate(startDate)
    setDateIndex(0)
  })

  useEffect(() => {
    fetchDailyCovidData(noop, setResult)
  },[])

  const calculateDeathArr = (result, startDate, endDate) => {
    const filterResultByDate2 = (result, date) => {
      const formatted = `${date.toISOString().split('T')[0].replace(/-/g, '')}`
      return result && result.filter(item => item.date == formatted)
    }
    const formatDate = (date) => {
      return date.toISOString().split('T')[0].replace(/-/g, '');
    }

    var iter = new Date(startDate.getTime())

    var deathArr = []
    while (iter.getTime() <= endDate.getTime()) {
      const filtered = filterResultByDate2(result, iter);
      const total = calculateTotalDeath(filtered)
      deathArr = [...deathArr, {Date: formatDate(iter), TotalDeath: total}]
      iter = addDays(iter, 1)
    }
    // console.log("useEffect, deathArr is ", deathArr)
    return deathArr;
  }

  const height = 400;
  const width = 500;

  return (
    <ZoomApp  id="ZoomApp">
      <ZoomWindow>
        <ZoomParticipant width={width} height={height} name={"Covid Gallery"}>
        <button onClick={incrementDate}>Next Photo</button>
          <CovidImageGallery index={dateIndex} width={width} height={height}/>
        </ZoomParticipant>
        <ZoomParticipant width={width} height={height} name={"Covid Deaths across USA"}>
          <button onClick={incrementDate}>Next Date</button>
          <button onClick={resetDate}>Reset Date</button>
          <USA width={width} height={height} tooltipsEnabled={true} result={filteredResults} />
        </ZoomParticipant>
        <ZoomParticipant width={width} height={height} name={"Farm animals"} onEnterMeeting={() => setPlayFarmAnimal(true)} onExitMeeting={() => setPlayFarmAnimal(false)} >
          <ReactPlayer width={width} height={height} url='https://www.youtube.com/watch?v=PwazdGn6ldc' playing={playFarmAnimal} />
        </ZoomParticipant>

        <ZoomParticipant width={width} height={height} name={"Covid Deaths By Date"}>
        <button onClick={incrementDate}>Next Date</button>
          <button onClick={resetDate}>Reset Date</button>
          <CovidDeathLineGraph index={dateIndex} date={date} data={calculateDeathArr(result, startDate, endDate).map(x => x.TotalDeath)} width={width} marginLeft={20} marginRight={60} marginTop={20} height={height} />
        </ZoomParticipant>
      </ZoomWindow>

    </ZoomApp>



    // <StyledVerticalDiv id="theApp" className="App">
    //     {/* <DeathCounter totalDeath={calculateTotalDeath(filterResultByDate(result, date))} date={date} /> */}
    //     <button onClick={incrementDate}>Next Date</button>
    //     <button onClick={resetDate}>Reset Date</button>
    //     <OverlayContainer width={800} height={height}>
    //       <FirstLayer>
    //       <CovidImageGallery className="firstLayer" index={dateIndex} width={800} height={height}/>
    //       </FirstLayer>
    //       <SecondLayer>
    //       <USA className="secondLayer" width={800} height={height} tooltipsEnabled={true} result={filteredResults} onClick={() => alert('clicked USA')} />
    //       </SecondLayer>
    //     </OverlayContainer>

    //     <CovidDeathLineGraph index={dateIndex} date={date} data={calculateDeathArr(result, startDate, endDate).map(x => x.TotalDeath)} width={800} marginLeft={20} marginRight={60} marginTop={20} height={400} />
    //   </StyledVerticalDiv>
  );
}
const ZoomApp = styled.div`

`

export default App;

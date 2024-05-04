import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { mapObjects } from './constants';


function Main() {

  const [activeTab, setActiveTab] = useState(0);

    //Initialize Horizontal Scroll Variables
    const component = useRef();
    const slider = useRef();

  //useState Hook to receive data from <BrandIntroSection /> to update Tabs
  //const [data, setData] = useState();
  // const [activeTab, setActiveTab] = useState(tabValue.value);
  // const sendData = (activeTab) => {
  //   setActiveTab(activeTab);
  //   console.log(activeTab);
  // }
  const handleTab = (num) => {
    setActiveTab(num);

    console.log(`Active tab is ${activeTab}`)
  };

  return (
    <>
      <div className="main">
        <div className="nav">
            {mapObjects.map((mapObject, i) => {
          return (
            <>
            <div key={mapObject.index} className="map-title-container" onClick={()=> handleTab(mapObject.index)} >
              <h4 className="hmm">{mapObject.title}</h4>
              {/* <img src={slide.image} alt="" /> */}
            </div>
            </>
          );
        })}
        </div>
        <div className="content-bg" style={{backgroundImage: `url(${mapObjects[activeTab].image})`}}>
          <div className="content-tint">
            <div className="content">
              <h2 className="hmm">{mapObjects[activeTab].title}</h2>
              <h3 className="hmm">Created by: {mapObjects[activeTab].author}</h3>
              <button className="content-btn">
                <a href={mapObjects[activeTab].url} target="_blank" className="content-btn-link">Link</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main

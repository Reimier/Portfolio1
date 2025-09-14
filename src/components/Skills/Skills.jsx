import "./skills.css"
import { useState } from "react";
function Skills(){

    const [activeTab, setActiveTab] = useState("tab1");

    return(

        <>

        <div id="skills-box">

        <div id="skills-title">

        <h1>Skills</h1>

        </div>
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => setActiveTab("tab1")}
        >
          Soft Skills
        </button>
        <button
          className={`tab-btn ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          Technical Skills
        </button>
        <button
          className={`tab-btn ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => setActiveTab("tab3")}
        >
          Tools Used
        </button>
      </div>

      {/* Tab Content */}
      <div
        id="tab1"
        className="tab-content"
        style={{ display: activeTab === "tab1" ? "block" : "none" }}
      >
        This is content for Tab 1.
      </div>
      <div
        id="tab2"
        className="tab-content"
        style={{ display: activeTab === "tab2" ? "block" : "none" }}
      >
        This is content for Tab 2.
      </div>
      <div
        id="tab3"
        className="tab-content"
        style={{ display: activeTab === "tab3" ? "block" : "none" }}
      >
        This is content for Tab 3.
      </div>
    </div>

        
        
        </>
    )

}

export default Skills;
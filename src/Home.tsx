import React from "react";
export default function Home() {
  return (
    <>
      <h2>Smart Building Energy Management & Audit</h2>
      <p></p>
      <h4>Features</h4>
      <h4>1. Simulate Sensors in a Building</h4>
      <p><b>Ambient Intelligence:</b> Automating lighting and cooling systems based on the ambient intelligence <br></br><b>Improve the location of devices by running simulations:</b> Accurate building occupancy information can be beneficial in minimizing energy use by improving the intelligence of a Building Automation System and helping designers predict the effect of different design options on occupant behaviour. The use of simulation to model occupant behaviour in combination with motion sensors to be able to study the relationship between known and measured occupant behaviour</p>
      <h4>2. Connect to Cloud, and enable remote Building Energy Management</h4>
      <p>Import features from the building including energy usage in each section, inputs from Heating, Ventilation & Air-Conditioning Systems, Lighting Systems & Plug-Load Data and uploads the data to the cloud</p>
      <p>Feature Selection using Random Forest algorithm to analyse and detect the key features for the energy management </p>
      <h4>3. Energy Monitoring and Load Shedding.</h4>
      <p>Monitoring and making decisions based on the state of the system model, value of the operation, the criticality of the processes running, and environmental impact<br></br>
      > Complete information about the plant (circuit breakers status, source of feeding, and level of the consumed power).<br></br>
      > Information about the operating values of the voltage, operating values of the transformers, operating values of the medium voltage, load feeders, operating values of the generators. These values will assist in getting any action to return the plant to its normal operation by minimum costs.<br></br>
      > Protective information such as the insulation of cables, temperatures of the generators. These parameters are used as a back up for the main protection.<br></br>
      > Information about the quality of the system (harmonics, current, voltages, power factors, flickers, etc.). These values will be very essential in case of a future correction.<br></br>
      > Recorded information such case voltage spikes, reducing the voltage on the medium or current interruption.<br></br></p>
      <h4>4. Analytics and Auditing </h4>
      <p>The analysis includes:<br></br>
      Phantom load: each building has systems that operate all the time. We estimate the building's baseline energy consumption produced by its systems.<br></br>
      Periodicity: buildings have regular, predictable cycles in their energy consumption. Examples include: Weekend/Weekday, Time of the Day, Holidays, Schedule<br></br>
      Anomaly detection: Classifying days according to their energy consumption patterns. Days can be grouped according to their cycles, periodicity and variability.<br></br>
      Outlier detection: within each group of days, particularly extreme days can be recognized. This helps identify erratic energy behaviour within a building.<br></br>
      Temperature sensitivity classification of a building:<br></br>
      High sensitivity: energy consumption is extremely reactive to outside temperature both when it is high and low.<br></br>
      Medium sensitivity: energy consumption is very reactive but only when the temperature is high. This can be due to alternative heating systems.<br></br>
      Low sensitivity: the consumption of energy is not highly correlated with the outside temperature.<br></br>
      Peak prediction: Modeling and prediction of energy consumption yield an estimate on the savings due to the elimination of peaks in consumption.<br></br>
      Methodology:<br></br>
      Types of Days: We use a machine learning algorithm (K-Means) to identify and profile the most commonly occurring patterns in daily energy consumption<br></br>
      Effect of Schedule: Study the distributional characteristics of energy consumption, as they compare for times during normal hours of operation, and after hours. They are also useful for identifying outliers and for capturing the variation within each group.<br></br>
      Energy Usage vs Temperature (Average daily energy consumption vs. average daily temperature queried from the nearest weather station)<br></br>
      Energy Usage vs Sunlight (position of the sun as a proxy for the amount of sunlight hitting a building)<br></br>
      </p>

      <h4>5. Architecture:</h4>

      <p>Software to collect data, sanitize it and upload to cloud. <br></br>
      Software which feeds into this data, and performs the Analytics<br></br>
      Web-Frontend to display all data and analytics<br></br>
      [Sensor emulator (time-series data) >> kafka queue >> database >> apache spark >> grafana dashboard]</p>

      <h4>6. Demo</h4>
      <p>Designing the frontend UI for displaying all the data and analytics using sample APIs (currently using stock data) for realtime displays using ReactJS and Kendo-React for UI</p>
    </>
  )
}
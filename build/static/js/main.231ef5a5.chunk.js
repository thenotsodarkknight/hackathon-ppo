(this.webpackJsonpSmart_Building_Energy_Management_Audit=this.webpackJsonpSmart_Building_Energy_Management_Audit||[]).push([[0],{35:function(e,t,n){e.exports=n(55)},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(10),i=n.n(r),o=(n(40),n(22)),c=n(13),s=n(25),u=n(12),m=n(5),d=n(18),h="User Name",g="https://developers.google.com/web/images/contributors/no-photo.jpg",p=[{text:"Home",icon:"k-i-home",route:"/",children:null},{text:"Dashboard",icon:"k-i-window",route:"/dashboard",children:null}],f=Object(c.g)((function(e){var t=Object(c.f)(),n=l.a.useState(!1),a=Object(u.a)(n,2),r=a[0],i=a[1],o=l.a.useState(0),f=Object(u.a)(o,2),E=f[0],y=f[1];return l.a.createElement("div",null,l.a.createElement(d.a,{expanded:r,items:p.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:p[E].text===e.text})})),onSelect:function(e){y(e.itemIndex),i(!1),t.push(e.itemTarget.props.route)},animation:{duration:400},position:"start",onOverlayClick:function(){i(!1)}},l.a.createElement(d.b,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement(m.a,{icon:"menu",look:"flat",onClick:function(){i((function(e){return!e}))}}),l.a.createElement("span",{className:"title"},"Honeywell SBEM",l.a.createElement("span",{className:"divider"},"|"),l.a.createElement("span",{className:"Energy"},p[E].text))),l.a.createElement("img",{alt:h,src:g}))),e.children)))}));function E(){return l.a.createElement("span",{className:"k-icon k-i-loading"})}function y(){var e=l.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1];return l.a.useEffect((function(){fetch("https://demoapis.com/sample/finance/info").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement(E,null),l.a.createElement(d.c,{style:{opacity:n?"1":"0"}},l.a.createElement(d.d,{title:"Consumption Details"},n&&n.quarters.map((function(e,t){return l.a.createElement(d.d,{title:e.title,key:t},l.a.createElement("ul",{className:"Energy-detail-list"},e.details.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("span",null,e.name,":"),l.a.createElement("span",null,e.value))}))))})))))}var b=n(8),v=function(e){return"".concat(e.value,"%")},k=function(e){return l.a.createElement("div",null,e.point?e.point.category:"")};function w(){var e=l.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1];return l.a.useEffect((function(){fetch("https://demoapis.com/sample/finance/allocation?counter=5").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement(E,null),l.a.createElement(b.a,{style:{opacity:n?"1":"0"}},l.a.createElement(b.h,{text:"Energy Allocation"}),l.a.createElement(b.e,null,l.a.createElement(b.f,{type:"donut",data:n},l.a.createElement(b.g,{content:v,background:"none",color:"#fff"}))),l.a.createElement(b.d,{position:"bottom",visible:!0}),l.a.createElement(b.i,{render:k})))}var S=function(e){return l.a.createElement("div",null,e.point?"$"+e.point.value.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):"")};function A(){var e=l.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1];return l.a.useEffect((function(){fetch("https://demoapis.com/sample/finance/performance").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement(E,null),l.a.createElement(b.a,{style:{opacity:n?"1":"0"}},l.a.createElement(b.h,{text:"Energy Usage"}),l.a.createElement(b.b,null,l.a.createElement(b.c,{categories:["2014","2015","2016","2017","2018","2019","2020"]})),l.a.createElement(b.e,null,l.a.createElement(b.f,{type:"line",data:n})),l.a.createElement(b.i,{render:S})))}var x=n(16),j=function(e){var t,n=e.field||"",a=e.dataItem[n];return a>1e6&&(t=(a/1e6).toFixed(2)+"M"),a>1e9&&(t=(a/1e9).toFixed(2)+"M"),l.a.createElement("td",null,t)},N=function(e){var t=e.field||"",n=e.dataItem[t];return l.a.createElement("td",{className:n>0?"change-up":"change-down"},n,"%")};function M(){var e=l.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1];return l.a.useEffect((function(){fetch("https://demoapis.com/sample/finance/positions").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement(E,null),l.a.createElement(x.a,{data:n,style:{height:700,opacity:n?"1":"0"}},l.a.createElement(x.b,{title:"Symbol",field:"symbol",locked:!0,width:100}),l.a.createElement(x.b,{title:"Name",field:"name"}),l.a.createElement(x.b,{title:"Change",field:"day_change",cell:N}),l.a.createElement(x.b,{title:"% Change",field:"change_pct",cell:N}),l.a.createElement(x.b,{title:"Volume Consumed",field:"volume",cell:j}),l.a.createElement(x.b,{title:"Average Consumption",field:"market_cap",cell:j})))}function T(){return l.a.createElement("div",{className:"panels"},l.a.createElement("div",{className:"panel-info"},l.a.createElement(y,null)),l.a.createElement("div",{className:"panel-allocation"},l.a.createElement(w,null)),l.a.createElement("div",{className:"panel-balance"},l.a.createElement(A,null)),l.a.createElement("div",{className:"panel-positions"},l.a.createElement(M,null)))}function C(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Smart Building Energy Management & Audit"),l.a.createElement("p",null),l.a.createElement("h4",null,"Features"),l.a.createElement("h4",null,"1. Simulate Sensors in a Building"),l.a.createElement("p",null,l.a.createElement("b",null,"Ambient Intelligence:")," Automating lighting and cooling systems based on the ambient intelligence ",l.a.createElement("br",null),l.a.createElement("b",null,"Improve the location of devices by running simulations:")," Accurate building occupancy information can be beneficial in minimizing energy use by improving the intelligence of a Building Automation System and helping designers predict the effect of different design options on occupant behaviour. The use of simulation to model occupant behaviour in combination with motion sensors to be able to study the relationship between known and measured occupant behaviour"),l.a.createElement("h4",null,"2. Connect to Cloud, and enable remote Building Energy Management"),l.a.createElement("p",null,"Import features from the building including energy usage in each section, inputs from Heating, Ventilation & Air-Conditioning Systems, Lighting Systems & Plug-Load Data and uploads the data to the cloud"),l.a.createElement("p",null,"Feature Selection using Random Forest algorithm to analyse and detect the key features for the energy management "),l.a.createElement("h4",null,"3. Energy Monitoring and Load Shedding."),l.a.createElement("p",null,"Monitoring and making decisions based on the state of the system model, value of the operation, the criticality of the processes running, and environmental impact",l.a.createElement("br",null),"> Complete information about the plant (circuit breakers status, source of feeding, and level of the consumed power).",l.a.createElement("br",null),"> Information about the operating values of the voltage, operating values of the transformers, operating values of the medium voltage, load feeders, operating values of the generators. These values will assist in getting any action to return the plant to its normal operation by minimum costs.",l.a.createElement("br",null),"> Protective information such as the insulation of cables, temperatures of the generators. These parameters are used as a back up for the main protection.",l.a.createElement("br",null),"> Information about the quality of the system (harmonics, current, voltages, power factors, flickers, etc.). These values will be very essential in case of a future correction.",l.a.createElement("br",null),"> Recorded information such case voltage spikes, reducing the voltage on the medium or current interruption.",l.a.createElement("br",null)),l.a.createElement("h4",null,"4. Analytics and Auditing "),l.a.createElement("p",null,"The analysis includes:",l.a.createElement("br",null),"Phantom load: each building has systems that operate all the time. We estimate the building's baseline energy consumption produced by its systems.",l.a.createElement("br",null),"Periodicity: buildings have regular, predictable cycles in their energy consumption. Examples include: Weekend/Weekday, Time of the Day, Holidays, Schedule",l.a.createElement("br",null),"Anomaly detection: Classifying days according to their energy consumption patterns. Days can be grouped according to their cycles, periodicity and variability.",l.a.createElement("br",null),"Outlier detection: within each group of days, particularly extreme days can be recognized. This helps identify erratic energy behaviour within a building.",l.a.createElement("br",null),"Temperature sensitivity classification of a building:",l.a.createElement("br",null),"High sensitivity: energy consumption is extremely reactive to outside temperature both when it is high and low.",l.a.createElement("br",null),"Medium sensitivity: energy consumption is very reactive but only when the temperature is high. This can be due to alternative heating systems.",l.a.createElement("br",null),"Low sensitivity: the consumption of energy is not highly correlated with the outside temperature.",l.a.createElement("br",null),"Peak prediction: Modeling and prediction of energy consumption yield an estimate on the savings due to the elimination of peaks in consumption.",l.a.createElement("br",null),"Methodology:",l.a.createElement("br",null),"Types of Days: We use a machine learning algorithm (K-Means) to identify and profile the most commonly occurring patterns in daily energy consumption",l.a.createElement("br",null),"Effect of Schedule: Study the distributional characteristics of energy consumption, as they compare for times during normal hours of operation, and after hours. They are also useful for identifying outliers and for capturing the variation within each group.",l.a.createElement("br",null),"Energy Usage vs Temperature (Average daily energy consumption vs. average daily temperature queried from the nearest weather station)",l.a.createElement("br",null),"Energy Usage vs Sunlight (position of the sun as a proxy for the amount of sunlight hitting a building)",l.a.createElement("br",null)),l.a.createElement("h4",null,"5. Architecture:"),l.a.createElement("p",null,"Software to collect data, sanitize it and upload to cloud. ",l.a.createElement("br",null),"Software which feeds into this data, and performs the Analytics",l.a.createElement("br",null),"Web-Frontend to display all data and analytics",l.a.createElement("br",null),"[Sensor emulator (time-series data) >> kafka queue >> database >> apache spark >> grafana dashboard]"),l.a.createElement("h4",null,"6. Demo"),l.a.createElement("p",null,"Designing the frontend UI for displaying all the data and analytics using sample APIs (currently using stock data) for realtime displays using ReactJS and Kendo-React for UI"))}n(54);var I=function(){return l.a.createElement(o.a,null,l.a.createElement(f,null,l.a.createElement("div",{className:"page-container"},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/dashboard"},l.a.createElement(T,null)),l.a.createElement(c.a,{path:"/"},l.a.createElement(C,null))))))};i.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.231ef5a5.chunk.js.map
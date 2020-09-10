import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { getEnergyInfo } from "../services/dataService";
import Loading from "../layout/Loading";
import { EnergyInfo } from "../data/models";

export default function InfoPanel() {
  const [EnergyInfo, setEnergyInfo] = React.useState<EnergyInfo>();
  React.useEffect(() => {
    getEnergyInfo().then((data: EnergyInfo) => {
      setEnergyInfo(data);
    });
  }, []);

  return (
    <>
      {!EnergyInfo && <Loading />}
      <PanelBar style={{ opacity: EnergyInfo ? "1" : "0" }}>
        <PanelBarItem title={"Consumption Details"}>
          {EnergyInfo && EnergyInfo.quarters.map((quarter, idx) => (
            <PanelBarItem title={quarter.title} key={idx}>
              <ul className="Energy-detail-list">
                {quarter.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.name}:</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </PanelBarItem>
          ))}
        </PanelBarItem >
      </PanelBar>
    </>
  );
}

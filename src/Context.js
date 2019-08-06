import React, { Component } from "react";
import { serviceData } from "./Data/Service";
import { CustomerData } from "./Data/Customer";
import { licenseData} from "./Data/License";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    service: serviceData,
    customer: CustomerData,
    license : licenseData
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };

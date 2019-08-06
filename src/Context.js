import React, { Component } from "react";
import { serviceData } from "./Data/Service";
import { CustomerData } from "./Data/Customer";
import { licenseData} from "./Data/License";


const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    service:[],
    customer: CustomerData,
    license : licenseData
  };
  setIngresos=() =>{
    let tempProducts =[];
    serviceData.forEach(item =>{
      const singleItem = {...item};
      tempProducts=[...tempProducts, singleItem];
    });
    
    
    this.setState({
      service:tempProducts,
    })
  }
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

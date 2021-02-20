import React from "react";
import ProductCard from './ProductCard';

export default class FetchProducts extends React.Component {
  state = {
    loading: true,
    product1GB: [],
    product6GB: [],
    product15GB: [],
    product40GB: [],
    product60GB: [],
    product100GB: []
  };

  async componentDidMount() {
    const url = "resources/products.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false });
    this.setState({ product1GB: data["MOB-1GB"], product6GB: data["MOB-6GB"], 
                    product15GB: data["MOB-15GB"], product40GB: data["MOB-40GB"], 
                    product60GB: data["MOB-60GB"], product100GB: data["MOB-100GB"] });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      let selectedSim = this.props.simCount;
      let selectedData = this.props.dataValue;
      let productData = this.state.product1GB;

      if (selectedData.includes("1GB")) {
        Object.keys(this.state.product1GB).map((type) => {
          if (this.state.product1GB[type].sim_count == selectedSim) {
            productData = this.state.product1GB[type];
          }
        })
      } else if (selectedData.includes("6GB")) {
        Object.keys(this.state.product6GB).map((type) => {
          if (this.state.product6GB[type].sim_count == selectedSim) {
            productData = this.state.product6GB[type];
          }
        })
      } else if (selectedData.includes("15GB")) {
        Object.keys(this.state.product15GB).map((type) => {
          if (this.state.product15GB[type].sim_count == selectedSim) {
            productData = this.state.product15GB[type];
          }
        })
      } else if (selectedData.includes("40GB")) {
        Object.keys(this.state.product40GB).map((type) => {
          if (this.state.product40GB[type].sim_count == selectedSim) {
            productData = this.state.product40GB[type];
          }
        })
      } else if (selectedData.includes("60GB")) {
        Object.keys(this.state.product60GB).map((type) => {
          if (this.state.product60GB[type].sim_count == selectedSim) {
            productData = this.state.product60GB[type];
          }
        })
      } else if (selectedData.includes("100GB")) {
        Object.keys(this.state.product100GB).map((type) => {
          if (this.state.product100GB[type].sim_count == selectedSim) {
            productData = this.state.product100GB[type];
          }
        })
      }
      return <ProductCard productDetails={productData}/>;
    } 
  }
}

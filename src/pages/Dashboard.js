import React, { Component } from "react";
import { withAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Dashboard extends Component {
  state = {
    title: 'Dashboard'
  }

  componentDidMount(){
    document.title = this.state.title;
  }

    render() {
        return(
            <React.Fragment>
                <Sidebar />
                    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <Header data={this.state} />
                    <div className="body flex-grow-1 px-3">
                      <div className="container-lg">
                        <div className="card mb-4">
                          <div className="card-header">Dashboard</div>
                          <div className="card-body">
                            <p>Tes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Footer />
                  </div>
            </React.Fragment>
        )
    }
}

export default withAuth(Dashboard)
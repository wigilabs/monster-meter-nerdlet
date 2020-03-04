import React from 'react'

import axios from 'axios'



import client   from './img/client.png'

import newrelic from './img/newrelic.png'



import aws_img from './img/aws.png'

import google_img  from './img/google.png'

import zendesk_img  from './img/zendesk.png'

import salesforce_img  from './img/salesforce.png'

// import mailgun from './img/mailgun.png'



import Utils from './js/utils.js'





export default class MosterMeterNerdletNerdletNerdlet extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      overlay: false,

      aws: {},

      google: {},



      cloud: {}

    }

    this.openOverlay = this.openOverlay.bind(this);

    this.closeOverlay = this.closeOverlay.bind(this);

  }



  openOverlay(service) {

    // console.log('service: ', service)



    this.setState({ cloud: service })



    this.setState({ overlay: true })

  }

  closeOverlay() {

    this.setState({ overlay: false })

  }



  async componentDidMount() {

    let res_aws = await axios.get('https://monster-meter-server.now.sh/api/aws')
    let aws = res_aws.data
    console.log('aws: ', aws)
    aws = Utils.enrich_cloud(aws, 'aws')
    console.log('aws: ', aws)
    this.setState({ aws })
    let res_google = await axios.get('https://monster-meter-server.now.sh/api/google')
    let google = res_google.data
    google = Utils.enrich_cloud(google, 'google')
    console.log('google: ', google)
    this.setState({ google })
  }



  render() {

      return (

        <div class="app">

          <header class="header">

            <div class="inner">

              <img class="client" src={client} />

              Monster Meter

              <img class="newrelic" src={newrelic} />

            </div>

          </header>

          <section class="content">



            <div className={this.state.overlay ? 'overlay visible' : 'overlay'}>



              <div class={"detail " + this.state.cloud.status}>

                <div class="detail-bar"></div>

                <header class="detail-header">

                  <div class="avatar">

                    <img src={this.state.cloud.image} />

                    <div>

                      <p>{this.state.cloud.name}</p>

                      <span>CLOUD</span>

                    </div>

                  </div>

                  <span class="close" onClick={this.closeOverlay}>X</span>

                </header>

                <section class="row">

                  <div class="column">

                    <p class="title">STATUS</p> <br/>

                    <p class="subtitle">ALERTS</p>

                    <div class="separator"></div>

                    <div class="stat"><p>11/02/20</p> <p class="msg"><i>Incident at 16:47 UTC</i></p></div>

                    <div class="stat"><p>11/02/20</p> <p class="msg"><i>Incident at 16:47 UTC</i></p></div>

                    <div class="stat"><p>11/02/20</p> <p class="msg"><i>Incident at 16:47 UTC</i></p></div>



                  </div>

                  <div class="column">

                    <p class="title">OPTIMIZE</p> <br/>

                    <p class="subtitle">OVERPAY <span>(${this.state.cloud.overpay_yearly})</span></p>

                    <div class="separator"></div>

                    <table class="table">

                      <tbody>

                      <tr>

                        <td></td>

                        <td class="center"><span>Monthly</span></td>

                        <td class="right"><span>Yearly</span></td>

                      </tr>

                      <tr>

                        <td>Non-Optimized</td>

                        <td class="center">$ {this.state.cloud.monthy_cost}</td>

                        <td class="right">$ {this.state.cloud.yearly_cost}</td>

                      </tr>

                      <tr>

                        <td>Optimized</td>

                        <td class="center">$ {this.state.cloud.monthy_optimized_cost}</td>

                        <td class="right">$ {this.state.cloud.yearly_optimized_cost}</td>

                      </tr>

                      <tr>

                        <td>Saving</td>

                        <td class="center"><span>$ {this.state.cloud.overpay_monthy}</span></td>

                        <td class="right"><span>$ {this.state.cloud.overpay_yearly}</span></td>

                      </tr>

                      </tbody>

                    </table> <br/>



                    <button class="button center">SHOW OPTIMIZATION CANDIDATES</button> <br/>



                    <div class="separator"></div> <br/>



                    <table class="table line">

                      <tbody>

                      <tr>

                        <td class="center"><span>CONTRACTED</span></td>

                        <td class="center"><span>SPEND</span></td>

                        <td class="center"><span>ACTUAL USAGE</span></td>

                        <td class="center red"><span class="red">WASTE</span></td>

                      </tr>

                      <tr>

                        <td class="center">50 hosts</td>

                        <td class="center">50 hosts</td>

                        <td class="center">50 hosts</td>

                        <td class="center">50 hosts</td>

                      </tr>

                      </tbody>

                    </table> <br/><br/>



                    <button class="button center">SLA REPORT</button> <br/><br/>



                  </div>

                </section>

              </div>



            </div>



            <article class={"box " + this.state.aws.status} onClick={() => this.openOverlay(this.state.aws)}>

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={aws_img} />

                <div>

                  <p>Amazon AWS</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>{this.state.aws.r}</span> / 100</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>(${this.state.aws.overpay_yearly})</span></p>

                </div>

              </footer>

            </article>



            <article class={"box " + this.state.google.status} onClick={() => this.openOverlay(this.state.google)}>

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={google_img} />

                <div>

                  <p>Google Cloud</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>{this.state.google.r}</span> / 100</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>(${this.state.google.overpay_yearly})</span></p>

                </div>

              </footer>

            </article>



            <article class={"box " + this.state.google.status} onClick={() => this.openOverlay(this.state.google)}>

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={zendesk_img} />

                <div>

                  <p>Zendesk</p>

                  <span>SUPPORT</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>3</span> / 10</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($80.00)</span></p>

                </div>

              </footer>

            </article>



            <article class={"box " + this.state.google.status} onClick={() => this.openOverlay(this.state.google)}>

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={salesforce_img} />

                <div>

                  <p>Salesforce</p>

                  <span>CRM</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>3</span> / 10</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($80.00)</span></p>

                </div>

              </footer>

            </article>



            {/*<article class="box red" onClick={this.openOverlay}>

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={google} />

                <div>

                  <p>Google Cloud</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box red">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={google} />

                <div>

                  <p>Google Cloud</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box red">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={google} />

                <div>

                  <p>Google Cloud</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box yellow">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={aws} />

                <div>

                  <p>Amazon AWS</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box yellow">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={aws} />

                <div>

                  <p>Amazon AWS</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box yellow">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={aws} />

                <div>

                  <p>Amazon AWS</p>

                  <span>CLOUD</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box green">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={mailgun} />

                <div>

                  <p>Mailgun</p>

                  <span>MAIL</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box green">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={mailgun} />

                <div>

                  <p>Mailgun</p>

                  <span>MAIL</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>



            <article class="box green">

              <div class="box-bar"></div>

              <header class="box-header">

                <img src={mailgun} />

                <div>

                  <p>Mailgun</p>

                  <span>MAIL</span>

                </div>

              </header>

              <div class="box-content">

                <p>11/02/20</p>

                <p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>

              </div>

              <footer class="box-footer">

                <div class="box-footer-bar">

                  <div class="bar"><span></span></div>

                  <div class="text">

                    <p><span><i>Service capacity</i></span></p>

                    <p><span>800</span>/1800</p>

                  </div>

                </div>

                <div class="box-footer-overpay">

                  <p>OVERPAY</p>

                  <p><span>($324.00)</span></p>

                </div>

              </footer>

            </article>*/}



          </section>

        </div>

      );

  }

}
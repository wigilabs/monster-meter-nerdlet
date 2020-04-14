import React from 'react'
import axios from 'axios'

import client   from './img/client.png'
import newrelic from './img/newrelic.png'

import aws_img from './img/aws.png'
import google_img  from './img/google.png'
import azure_img  from './img/aws.png'
import zendesk_img  from './img/zendesk.png'
import salesforce_img from './img/salesforce.png'
// import mailgun from './img/mailgun.png'

import Utils from './js/utils.js'


const URL = 'https://monster-meter-server-seven.now.sh'
// const URL = 'http://localhost:3000'


export default class MosterMeter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
      aws: {},
      awsAlert: {},
      google: {},
      gcpAlert: {},
      azure: {},
      azureAlert:{},
      zendesk: {},
      zendeskAlert:{},
      salesforce: {},
      salesforceAlert: {},
      cloud: {status: []}
    }
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }


  openOverlay(service) {
    this.setState({ cloud: service })
    this.setState({ overlay: true })
  }


  closeOverlay() {
    this.setState({ overlay: false })
  }

  async setup() {
    console.log('setup ...')

    let res_aws = await axios.get(URL + '/api/aws')
    //let res_aws = await axios({ method: "GET", url: "https://insights-api.newrelic.com/v1/accounts/2482859/query?nrql=FROM+SystemSample+SELECT+latest(coreCount),+latest(memoryTotalBytes),+max(cpuPercent),+max(memoryUsedBytes/memoryTotalBytes)*100 , latest(instanceType) +WHERE+coreCount+is+not+null+and+((instanceType+is+not+null+AND+instanceType!='unknown')+OR+ec2InstanceType+is+not+null)+and+providerAccountName=634037824681+LIMIT+2000+since+1+week ago", headers: {"X-Query-Key": "NRIQ-V-S-D7Tgcd4R7BHtumVd8QYaLVxzTDXG"} })
    let aws = res_aws.data
    aws = Utils.enrich_cloud(aws, 'aws')
    this.setState({ aws })

    let res_google = await axios.get(URL + '/api/google')
    let google = res_google.data
    google = Utils.enrich_cloud(google, 'google')
    this.setState({ google })

    let res_azure = await axios.get(URL + '/api/azure')
    let azure = res_azure.data
    azure = Utils.enrich_cloud(azure, 'azure')
    this.setState({ azure })

    let res_zendesk = await axios.get(URL + '/api/zendesk')
    let zendesk = res_zendesk.data
    zendesk = Utils.enrich_cloud(zendesk, 'zendesk')
    this.setState({ zendesk })

    let res_salesforce = await axios.get(URL + '/api/salesforce')
    let salesforce = res_salesforce.data
    salesforce = Utils.enrich_cloud(salesforce, 'salesforce')
    this.setState({ salesforce })
  }

  componentDidMount() {
    let self = this
    self.setup()
    setInterval(function(){ self.setup() }, 20000)
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
              <div class={"detail " + this.state.cloud.last_status_type}>
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
                    {this.state.cloud.status.map((state, index) => (
                      <div class="stat"><p>{state.date}</p> <p class="msg"><i>{state.description}</i></p></div>
                    ))}
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

            <article class={"box " + this.state.aws.last_status_type} onClick={() => this.openOverlay(this.state.aws)}>
              <div class="box-bar"></div>
              <header class="box-header">
                <img src={aws_img} />
                <div>
                  <p>Amazon AWS</p>
                  <span>CLOUD</span>
                </div>
              </header>

              <div class="box-content">
                <p>{this.state.aws.last_status_date}</p>
                {/*<p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>*/}
                <p class="msg"><i>{this.state.aws.last_status_description}</i></p>
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

            <article class={"box " + this.state.google.last_status_type} onClick={() => this.openOverlay(this.state.google)}>
              <div class="box-bar"></div>
              <header class="box-header">
                <img src={google_img} />
                <div>
                  <p>Google Cloud</p>
                  <span>CLOUD</span>
                </div>
              </header>

              <div class="box-content">
                <p>{this.state.google.last_status_date}</p>
                {/*<p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>*/}
                <p class="msg"><i>{this.state.google.last_status_description}</i></p>
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

            <article class={"box " + this.state.azure.last_status_type} onClick={() => this.openOverlay(this.state.azure)}>
              <div class="box-bar"></div>
              <header class="box-header">
                <img src={azure_img} />
                <div>
                  <p>Microsoft Azure</p>
                  <span>CLOUD</span>
                </div>
              </header>

              <div class="box-content">
                <p>{this.state.azure.last_status_date}</p>
                {/*<p class="msg"><i>Incident at 16:47 UTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+3</span></i></p>*/}
                <p class="msg"><i>{this.state.azure.last_status_description}</i></p>
              </div>

              <footer class="box-footer">
                <div class="box-footer-bar">
                  <div class="bar"><span></span></div>
                  <div class="text">
                    <p><span><i>Service capacity</i></span></p>
                    <p><span>{this.state.azure.r}</span> / 100</p>
                  </div>
                </div>

                <div class="box-footer-overpay">
                  <p>OVERPAY</p>
                  <p><span>(${this.state.azure.overpay_yearly})</span></p>
                </div>
              </footer>
            </article>


            <article class={"box " + this.state.zendesk.last_status_type} onClick={() => this.openOverlay(this.state.zendesk)}>
              <div class="box-bar"></div>
              <header class="box-header">
                <img src={zendesk_img} />
                <div>
                  <p>Zendesk</p>
                  <span>SUPPORT</span>
                </div>
              </header>

              <div class="box-content">
                <p>{this.state.zendesk.last_status_date}</p>
                <p class="msg"><i>{this.state.zendesk.last_status_description}</i></p>
              </div>

              <footer class="box-footer">
                <div class="box-footer-bar">
                  <div class="bar"><span></span></div>
                  <div class="text">
                    <p><span><i>Service capacity</i></span></p>
                    <p><span>{this.state.zendesk.activeUsers}</span> / {this.state.zendesk.totalUsers}</p>
                  </div>
                </div>

                <div class="box-footer-overpay">
                  <p>OVERPAY</p>
                  <p><span>(${this.state.zendesk.overpay_yearly})</span></p>
                </div>
              </footer>
            </article>

            <article class={"box " + this.state.salesforce.last_status_type} onClick={() => this.openOverlay(this.state.salesforce)}>
              <div class="box-bar"></div>
              <header class="box-header">
                <img src={salesforce_img} />
                <div>
                  <p>Salesforce</p>
                  <span>CRM</span>
                </div>
              </header>
              <div class="box-content">
                <p>{this.state.salesforce.last_status_date}</p>
                <p class="msg"><i>{this.state.salesforce.last_status_description}</i></p>
              </div>
              <footer class="box-footer">
                <div class="box-footer-bar">
                  <div class="bar"><span></span></div>
                  <div class="text">
                    <p><span><i>Service capacity</i></span></p>
                    <p><span>{this.state.salesforce.activeUsers}</span> / {this.state.salesforce.totalUsers}</p>
                  </div>
                </div>
                <div class="box-footer-overpay">
                  <p>OVERPAY</p>
                  <p><span>(${this.state.salesforce.overpay_yearly})</span></p>
                </div>
              </footer>
            </article>
          </section>
        </div>
     );
  }
}

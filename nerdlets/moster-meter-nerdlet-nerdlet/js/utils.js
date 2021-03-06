import aws_img from '../img/aws.png'
import google_img  from '../img/google.png'
import azure_img  from '../img/azure.png'
import zendesk_img  from '../img/zendesk.png'
import salesforce_img  from '../img/salesforce.png'


let aws_instances = [{"type":"m5d.12xlarge","onDemandPrice":2.712},{"type":"m5a.12xlarge","onDemandPrice":2.064},{"type":"m1.small","onDemandPrice":0.044},{"type":"r5a.xlarge","onDemandPrice":0.226},{"type":"r5.2xlarge","onDemandPrice":0.504},{"type":"t2.2xlarge","onDemandPrice":0.3712},{"type":"c5.xlarge","onDemandPrice":0.17},{"type":"m5ad.12xlarge","onDemandPrice":2.472},{"type":"c4.2xlarge","onDemandPrice":0.398},{"type":"cc2.8xlarge","onDemandPrice":2},{"type":"g3.16xlarge","onDemandPrice":4.56},{"type":"t3a.nano","onDemandPrice":0.0047},{"type":"cr1.8xlarge","onDemandPrice":3.5},{"type":"z1d.large","onDemandPrice":0.186},{"type":"m4.4xlarge","onDemandPrice":0.8},{"type":"r5d.metal","onDemandPrice":6.912},{"type":"i3.4xlarge","onDemandPrice":1.248},{"type":"a1.xlarge","onDemandPrice":0.102},{"type":"m4.xlarge","onDemandPrice":0.2},{"type":"g2.2xlarge","onDemandPrice":0.65},{"type":"m5n.2xlarge","onDemandPrice":0.476},{"type":"c4.large","onDemandPrice":0.1},{"type":"c5.9xlarge","onDemandPrice":1.53},{"type":"r5d.24xlarge","onDemandPrice":6.912},{"type":"c4.xlarge","onDemandPrice":0.199},{"type":"h1.4xlarge","onDemandPrice":0.936},{"type":"m5d.metal","onDemandPrice":5.424},{"type":"r3.8xlarge","onDemandPrice":2.66},{"type":"r5dn.24xlarge","onDemandPrice":8.016},{"type":"p2.xlarge","onDemandPrice":0.9},{"type":"m5.xlarge","onDemandPrice":0.192},{"type":"i2.xlarge","onDemandPrice":0.853},{"type":"r5n.2xlarge","onDemandPrice":0.596},{"type":"g3s.xlarge","onDemandPrice":0.75},{"type":"r5dn.12xlarge","onDemandPrice":4.008},{"type":"t1.micro","onDemandPrice":0.02},{"type":"p3.2xlarge","onDemandPrice":3.06},{"type":"m5.large","onDemandPrice":0.096},{"type":"z1d.3xlarge","onDemandPrice":1.116},{"type":"m5n.24xlarge","onDemandPrice":5.712},{"type":"r5.8xlarge","onDemandPrice":2.016},{"type":"c1.xlarge","onDemandPrice":0.52},{"type":"c5.large","onDemandPrice":0.085},{"type":"m5d.large","onDemandPrice":0.113},{"type":"c5d.12xlarge","onDemandPrice":2.304},{"type":"r5n.8xlarge","onDemandPrice":2.384},{"type":"r5dn.xlarge","onDemandPrice":0.334},{"type":"r5d.xlarge","onDemandPrice":0.288},{"type":"z1d.12xlarge","onDemandPrice":4.464},{"type":"r5.metal","onDemandPrice":6.048},{"type":"r5a.16xlarge","onDemandPrice":3.616},{"type":"g4dn.xlarge","onDemandPrice":0.526},{"type":"x1e.32xlarge","onDemandPrice":26.688},{"type":"x1e.16xlarge","onDemandPrice":13.344},{"type":"t3a.small","onDemandPrice":0.0188},{"type":"i3.metal","onDemandPrice":4.992},{"type":"x1.32xlarge","onDemandPrice":13.338},{"type":"c5d.2xlarge","onDemandPrice":0.384},{"type":"m4.large","onDemandPrice":0.1},{"type":"m5a.xlarge","onDemandPrice":0.172},{"type":"r5n.16xlarge","onDemandPrice":4.768},{"type":"f1.4xlarge","onDemandPrice":3.3},{"type":"r5dn.large","onDemandPrice":0.167},{"type":"c4.8xlarge","onDemandPrice":1.591},{"type":"r5ad.12xlarge","onDemandPrice":3.144},{"type":"m5d.xlarge","onDemandPrice":0.226},{"type":"r5.12xlarge","onDemandPrice":3.024},{"type":"r5a.4xlarge","onDemandPrice":0.904},{"type":"g2.8xlarge","onDemandPrice":2.6},{"type":"m3.xlarge","onDemandPrice":0.266},{"type":"a1.large","onDemandPrice":0.051},{"type":"m5.12xlarge","onDemandPrice":2.304},{"type":"t2.nano","onDemandPrice":0.0058},{"type":"m5n.8xlarge","onDemandPrice":1.904},{"type":"c4.4xlarge","onDemandPrice":0.796},{"type":"m3.medium","onDemandPrice":0.067},{"type":"r5ad.2xlarge","onDemandPrice":0.524},{"type":"r5n.large","onDemandPrice":0.149},{"type":"c3.4xlarge","onDemandPrice":0.84},{"type":"c5d.18xlarge","onDemandPrice":3.456},{"type":"t3a.medium","onDemandPrice":0.0376},{"type":"r4.large","onDemandPrice":0.133},{"type":"r5dn.4xlarge","onDemandPrice":1.336},{"type":"r4.2xlarge","onDemandPrice":0.532},{"type":"t3.micro","onDemandPrice":0.0104},{"type":"hs1.8xlarge","onDemandPrice":4.6},{"type":"c5.24xlarge","onDemandPrice":4.08},{"type":"r3.2xlarge","onDemandPrice":0.665},{"type":"c5d.xlarge","onDemandPrice":0.192},{"type":"t2.xlarge","onDemandPrice":0.1856},{"type":"i3en.24xlarge","onDemandPrice":10.848},{"type":"m5.4xlarge","onDemandPrice":0.768},{"type":"x1e.4xlarge","onDemandPrice":3.336},{"type":"m4.16xlarge","onDemandPrice":3.2},{"type":"r5dn.16xlarge","onDemandPrice":5.344},{"type":"r5d.4xlarge","onDemandPrice":1.152},{"type":"i3en.3xlarge","onDemandPrice":1.356},{"type":"f1.16xlarge","onDemandPrice":13.2},{"type":"m1.xlarge","onDemandPrice":0.35},{"type":"m5dn.4xlarge","onDemandPrice":1.088},{"type":"m5n.16xlarge","onDemandPrice":3.808},{"type":"t3a.xlarge","onDemandPrice":0.1504},{"type":"m5dn.xlarge","onDemandPrice":0.272},{"type":"c5.18xlarge","onDemandPrice":3.06},{"type":"m5ad.4xlarge","onDemandPrice":0.824},{"type":"a1.metal","onDemandPrice":0.408},{"type":"z1d.metal","onDemandPrice":4.464},{"type":"c5n.9xlarge","onDemandPrice":1.944},{"type":"c3.xlarge","onDemandPrice":0.21},{"type":"r5ad.large","onDemandPrice":0.131},{"type":"c3.large","onDemandPrice":0.105},{"type":"m5ad.2xlarge","onDemandPrice":0.412},{"type":"c3.8xlarge","onDemandPrice":1.68},{"type":"c5.2xlarge","onDemandPrice":0.34},{"type":"t3.large","onDemandPrice":0.0832},{"type":"c5d.metal","onDemandPrice":4.608},{"type":"c5n.xlarge","onDemandPrice":0.216},{"type":"i3en.large","onDemandPrice":0.226},{"type":"m5.16xlarge","onDemandPrice":3.072},{"type":"a1.4xlarge","onDemandPrice":0.408},{"type":"z1d.xlarge","onDemandPrice":0.372},{"type":"m5dn.24xlarge","onDemandPrice":6.528},{"type":"p3dn.24xlarge","onDemandPrice":31.212},{"type":"r5a.large","onDemandPrice":0.113},{"type":"t2.micro","onDemandPrice":0.0116},{"type":"m4.10xlarge","onDemandPrice":2},{"type":"r5a.2xlarge","onDemandPrice":0.452},{"type":"r3.xlarge","onDemandPrice":0.333},{"type":"m2.xlarge","onDemandPrice":0.245},{"type":"c5n.18xlarge","onDemandPrice":3.888},{"type":"r5n.xlarge","onDemandPrice":0.298},{"type":"i3.large","onDemandPrice":0.156},{"type":"c5n.metal","onDemandPrice":3.888},{"type":"m5a.4xlarge","onDemandPrice":0.688},{"type":"r5.16xlarge","onDemandPrice":4.032},{"type":"t3.nano","onDemandPrice":0.0052},{"type":"z1d.6xlarge","onDemandPrice":2.232},{"type":"r5a.12xlarge","onDemandPrice":2.712},{"type":"m1.large","onDemandPrice":0.175},{"type":"i3.2xlarge","onDemandPrice":0.624},{"type":"r5dn.8xlarge","onDemandPrice":2.672},{"type":"m5.metal","onDemandPrice":4.608},{"type":"a1.2xlarge","onDemandPrice":0.204},{"type":"g4dn.8xlarge","onDemandPrice":2.176},{"type":"m5d.8xlarge","onDemandPrice":1.808},{"type":"r4.4xlarge","onDemandPrice":1.064},{"type":"c5d.large","onDemandPrice":0.096},{"type":"i2.2xlarge","onDemandPrice":1.705},{"type":"m5a.large","onDemandPrice":0.086},{"type":"c5n.large","onDemandPrice":0.108},{"type":"m5d.24xlarge","onDemandPrice":5.424},{"type":"r5.24xlarge","onDemandPrice":6.048},{"type":"i3en.xlarge","onDemandPrice":0.452},{"type":"i2.8xlarge","onDemandPrice":6.82},{"type":"c5n.2xlarge","onDemandPrice":0.432},{"type":"r5.large","onDemandPrice":0.126},{"type":"m5dn.large","onDemandPrice":0.136},{"type":"t3.medium","onDemandPrice":0.0416},{"type":"m5n.xlarge","onDemandPrice":0.238},{"type":"m5ad.xlarge","onDemandPrice":0.206},{"type":"r5d.8xlarge","onDemandPrice":2.304},{"type":"m5ad.24xlarge","onDemandPrice":4.944},{"type":"d2.2xlarge","onDemandPrice":1.38},{"type":"m5.24xlarge","onDemandPrice":4.608},{"type":"r5ad.24xlarge","onDemandPrice":6.288},{"type":"r5n.4xlarge","onDemandPrice":1.192},{"type":"m5a.8xlarge","onDemandPrice":1.376},{"type":"m5dn.16xlarge","onDemandPrice":4.352},{"type":"m5dn.12xlarge","onDemandPrice":3.264},{"type":"m5d.2xlarge","onDemandPrice":0.452},{"type":"i3.xlarge","onDemandPrice":0.312},{"type":"t3.small","onDemandPrice":0.0208},{"type":"g4dn.4xlarge","onDemandPrice":1.204},{"type":"i3en.2xlarge","onDemandPrice":0.904},{"type":"m2.2xlarge","onDemandPrice":0.49},{"type":"z1d.2xlarge","onDemandPrice":0.744},{"type":"t2.large","onDemandPrice":0.0928},{"type":"r4.xlarge","onDemandPrice":0.266},{"type":"g4dn.12xlarge","onDemandPrice":3.912},{"type":"m3.2xlarge","onDemandPrice":0.532},{"type":"h1.16xlarge","onDemandPrice":3.744},{"type":"c5.4xlarge","onDemandPrice":0.68},{"type":"c5d.4xlarge","onDemandPrice":0.768},{"type":"t2.medium","onDemandPrice":0.0464},{"type":"m5.8xlarge","onDemandPrice":1.536},{"type":"m2.4xlarge","onDemandPrice":0.98},{"type":"g3.8xlarge","onDemandPrice":2.28},{"type":"r3.4xlarge","onDemandPrice":1.33},{"type":"t3.xlarge","onDemandPrice":0.1664},{"type":"m5dn.8xlarge","onDemandPrice":2.176},{"type":"r5n.24xlarge","onDemandPrice":7.152},{"type":"x1e.xlarge","onDemandPrice":0.834},{"type":"c5.12xlarge","onDemandPrice":2.04},{"type":"m5a.16xlarge","onDemandPrice":2.752},{"type":"g3.4xlarge","onDemandPrice":1.14},{"type":"m5ad.large","onDemandPrice":0.103},{"type":"g4dn.2xlarge","onDemandPrice":0.752},{"type":"r4.16xlarge","onDemandPrice":4.256},{"type":"x1e.2xlarge","onDemandPrice":1.668},{"type":"a1.medium","onDemandPrice":0.0255},{"type":"t3a.micro","onDemandPrice":0.0094},{"type":"r5.xlarge","onDemandPrice":0.252},{"type":"c5n.4xlarge","onDemandPrice":0.864},{"type":"r3.large","onDemandPrice":0.166},{"type":"d2.xlarge","onDemandPrice":0.69},{"type":"m5a.2xlarge","onDemandPrice":0.344},{"type":"x1e.8xlarge","onDemandPrice":6.672},{"type":"h1.2xlarge","onDemandPrice":0.468},{"type":"m5n.12xlarge","onDemandPrice":2.856},{"type":"p3.8xlarge","onDemandPrice":12.24},{"type":"t3.2xlarge","onDemandPrice":0.3328},{"type":"m5d.16xlarge","onDemandPrice":3.616},{"type":"t2.small","onDemandPrice":0.023},{"type":"r5d.12xlarge","onDemandPrice":3.456},{"type":"c5d.9xlarge","onDemandPrice":1.728},{"type":"m4.2xlarge","onDemandPrice":0.4},{"type":"f1.2xlarge","onDemandPrice":1.65},{"type":"i3.8xlarge","onDemandPrice":2.496},{"type":"p2.8xlarge","onDemandPrice":7.2},{"type":"m5d.4xlarge","onDemandPrice":0.904},{"type":"r5d.large","onDemandPrice":0.144},{"type":"m5n.large","onDemandPrice":0.119},{"type":"r5n.12xlarge","onDemandPrice":3.576},{"type":"t3a.large","onDemandPrice":0.0752},{"type":"m5dn.2xlarge","onDemandPrice":0.544},{"type":"r5a.8xlarge","onDemandPrice":1.808},{"type":"m5n.4xlarge","onDemandPrice":0.952},{"type":"i3en.metal","onDemandPrice":10.848},{"type":"c1.medium","onDemandPrice":0.13},{"type":"c5.metal","onDemandPrice":4.08},{"type":"c5d.24xlarge","onDemandPrice":4.608},{"type":"p3.16xlarge","onDemandPrice":24.48},{"type":"i3en.6xlarge","onDemandPrice":2.712},{"type":"r5a.24xlarge","onDemandPrice":5.424},{"type":"d2.8xlarge","onDemandPrice":5.52},{"type":"r5.4xlarge","onDemandPrice":1.008},{"type":"r5ad.xlarge","onDemandPrice":0.262},{"type":"p2.16xlarge","onDemandPrice":14.4},{"type":"r5dn.2xlarge","onDemandPrice":0.668},{"type":"r5d.2xlarge","onDemandPrice":0.576},{"type":"t3a.2xlarge","onDemandPrice":0.3008},{"type":"m3.large","onDemandPrice":0.133},{"type":"i3en.12xlarge","onDemandPrice":5.424},{"type":"x1.16xlarge","onDemandPrice":6.669},{"type":"m1.medium","onDemandPrice":0.087},{"type":"m5a.24xlarge","onDemandPrice":4.128},{"type":"r4.8xlarge","onDemandPrice":2.128},{"type":"c3.2xlarge","onDemandPrice":0.42},{"type":"g4dn.16xlarge","onDemandPrice":4.352},{"type":"i3.16xlarge","onDemandPrice":4.992},{"type":"i2.4xlarge","onDemandPrice":3.41},{"type":"r5ad.4xlarge","onDemandPrice":1.048},{"type":"r5d.16xlarge","onDemandPrice":4.608},{"type":"m5.2xlarge","onDemandPrice":0.384},{"type":"d2.4xlarge","onDemandPrice":2.76},{"type":"h1.8xlarge","onDemandPrice":1.872}]
let google_instances = [{"type":"n1-highcpu-16","onDemandPrice":0.566790455078125},{"type":"n1-highcpu-96","onDemandPrice":3.400734455078125},{"type":"n1-standard-8","onDemandPrice":0.379998},{"type":"n1-standard-96","onDemandPrice":4.559976},{"type":"m1-ultramem-40","onDemandPrice":5.336197},{"type":"n1-highcpu-4","onDemandPrice":0.141695544921875},{"type":"n1-highcpu-64","onDemandPrice":2.267153544921875},{"type":"n1-standard-1","onDemandPrice":0.04749975},{"type":"n1-highmem-4","onDemandPrice":0.236606},{"type":"n1-highmem-64","onDemandPrice":3.785696},{"type":"n1-highmem-8","onDemandPrice":0.473212},{"type":"c2-standard-30","onDemandPrice":1.4567700000000001},{"type":"c2-standard-8","onDemandPrice":0.38847200000000004},{"type":"g1-small","onDemandPrice":0.0257},{"type":"n1-highcpu-32","onDemandPrice":1.1335767724609376},{"type":"n1-highmem-2","onDemandPrice":0.118303},{"type":"n1-standard-16","onDemandPrice":0.759996},{"type":"n1-standard-2","onDemandPrice":0.0949995},{"type":"f1-micro","onDemandPrice":0.007600000000000001},{"type":"m1-ultramem-160","onDemandPrice":21.344788},{"type":"m1-ultramem-80","onDemandPrice":10.672394},{"type":"n1-highcpu-8","onDemandPrice":0.2833952275390625},{"type":"n1-highmem-16","onDemandPrice":0.946424},{"type":"c2-standard-16","onDemandPrice":0.7769440000000001},{"type":"c2-standard-60","onDemandPrice":2.9135400000000002},{"type":"n1-standard-32","onDemandPrice":1.519992},{"type":"c2-standard-4","onDemandPrice":0.19423600000000002},{"type":"m1-megamem-96","onDemandPrice":9.108817544921877},{"type":"n1-highcpu-2","onDemandPrice":0.0708477724609375},{"type":"n1-standard-4","onDemandPrice":0.189999},{"type":"n1-highmem-32","onDemandPrice":1.892848},{"type":"n1-highmem-96","onDemandPrice":5.6785440000000005},{"type":"n1-standard-64","onDemandPrice":3.039984}]
let zendesk_instances = [{"type":"Lite","onDemandPrice":0},{"type":"Professional","onDemandPrice":19},{"type":"Enterprise","onDemandPrice":59}]
let salesforce_instances = [{"type":"Essentials","onDemandPrice":25},{"type":"Professional","onDemandPrice":75},{"type":"Enterprise","onDemandPrice":150},{"type":"Unlimited","onDemandPrice":300}]

class Utils {

  getOnDemandPrice(type, arr) {
    for (var i = 0; i < arr.length; i++) {
      let instance = arr[i]
      if(instance.type == type) return instance.onDemandPrice
    }
  }

  enrich_cloud(cloud, type) {
    cloud.type = type
    // Status
    for (const state of cloud.status) {
      let time = parseFloat(state.time)
      state.date = new Date(time).toString().slice(0, 24)
    }

    cloud.last_status_type = cloud.status[0].type
    cloud.last_status_date = cloud.status[0].date
    cloud.last_status_description = cloud.status[0].description

    // Cost
    if(type == 'aws') {
      cloud.name = 'Amazon AWS'
      cloud.image = aws_img
      cloud.onDemandPrice = this.getOnDemandPrice(cloud.instanceType, aws_instances)
    }
    if(type == 'google') {
      cloud.name = 'Google Cloud'
      cloud.image = google_img
      cloud.onDemandPrice = this.getOnDemandPrice(cloud.instanceType, google_instances)
    }
    if(type == 'azure') {
      cloud.name = 'Microsft Azure'
      cloud.image = azure_img
      cloud.onDemandPrice = this.getOnDemandPrice(cloud.instanceType, aws_instances)
    }
    if(type == 'zendesk') {
      cloud.name = 'Zendesk'
      cloud.image = azure_img
      cloud.onDemandPrice = this.getOnDemandPrice(cloud.instanceType, zendesk_instances)
    }
    if(type == 'salesforce') {
      cloud.name = 'Salesforce'
      cloud.image = salesforce_img
      cloud.onDemandPrice = this.getOnDemandPrice(cloud.instanceType, salesforce_instances)
    }


    if(type != 'zendesk' && type != 'salesforce') {

      cloud.monthy_cost = cloud.onDemandPrice * 30 * 24
      cloud.yearly_cost = cloud.monthy_cost * 12

      cloud.r = (cloud.maxCpuPercent > cloud.maxMemoryPercent) ? cloud.maxCpuPercent : cloud.maxMemoryPercent

      if(cloud.r < 60) {
        // optimize
        cloud.optimize = true

        let x = cloud.r * 100 / 60

        cloud.monthy_optimized_cost = x / 100 * cloud.monthy_cost
        cloud.yearly_optimized_cost = x / 100 * cloud.yearly_cost

        cloud.overpay_monthy = cloud.monthy_cost - cloud.monthy_optimized_cost
        cloud.overpay_yearly = cloud.yearly_cost - cloud.yearly_optimized_cost

      } else {
        // no optimize
        cloud.optimize = false

        cloud.monthy_optimized_cost = cloud.monthy_cost
        cloud.yearly_optimized_cost = cloud.yearly_cost

        cloud.overpay_monthy = 0.00
        cloud.overpay_yearly = 0.00
      }

      cloud.monthy_cost           = cloud.monthy_cost.toFixed(2)
      cloud.yearly_cost           = cloud.yearly_cost.toFixed(2)
      cloud.r                     = cloud.r.toFixed(2)
      cloud.monthy_optimized_cost = cloud.monthy_optimized_cost.toFixed(2)
      cloud.yearly_optimized_cost = cloud.yearly_optimized_cost.toFixed(2)
      cloud.overpay_monthy        = cloud.overpay_monthy.toFixed(2)
      cloud.overpay_yearly        = cloud.overpay_yearly.toFixed(2)

    } else {

      cloud.monthy_cost = cloud.onDemandPrice * cloud.totalUsers
      cloud.yearly_cost = cloud.monthy_cost * 12

      cloud.activeUsers = cloud.activeUsers

      cloud.r = cloud.activeUsers / cloud.totalUsers

      if(cloud.r < 1) {
        // optimize
        cloud.optimize = true

        let x = cloud.r

        cloud.monthy_optimized_cost = x * cloud.monthy_cost
        cloud.yearly_optimized_cost = x * cloud.yearly_cost

        cloud.overpay_monthy = cloud.monthy_cost - cloud.monthy_optimized_cost
        cloud.overpay_yearly = cloud.yearly_cost - cloud.yearly_optimized_cost

      } else {
        // no optimize
        cloud.optimize = false

        cloud.monthy_optimized_cost = cloud.monthy_cost
        cloud.yearly_optimized_cost = cloud.yearly_cost

        cloud.overpay_monthy = 0.00
        cloud.overpay_yearly = 0.00
      }

      cloud.monthy_cost           = cloud.monthy_cost.toFixed(2)
      cloud.yearly_cost           = cloud.yearly_cost.toFixed(2)
      cloud.r                     = cloud.r.toFixed(2)
      cloud.monthy_optimized_cost = cloud.monthy_optimized_cost.toFixed(2)
      cloud.yearly_optimized_cost = cloud.yearly_optimized_cost.toFixed(2)
      cloud.overpay_monthy        = cloud.overpay_monthy.toFixed(2)
      cloud.overpay_yearly        = cloud.overpay_yearly.toFixed(2)

    }

    return cloud
  }
}

export default new Utils()

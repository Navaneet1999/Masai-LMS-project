import { Front } from "../front/front"
import "./assignment.css"

export const Assignment = () => {
    const datas = [
        {"id":1,"lectures":"Sales","assignments":"Games","ip_address":"14.97.74.138"},
{"id":2,"lectures":"Engineering","assignments":"Toys","ip_address":"107.145.184.103"},
{"id":3,"lectures":"Accounting","assignments":"Electronics","ip_address":"69.12.195.243"},
{"id":4,"lectures":"Business Development","assignments":"Baby","ip_address":"19.239.73.202"},
{"id":5,"lectures":"Engineering","assignments":"Toys","ip_address":"132.144.197.169"},
{"id":6,"lectures":"Legal","assignments":"Grocery","ip_address":"35.22.52.99"},
{"id":7,"lectures":"Marketing","assignments":"Garden","ip_address":"226.179.79.7"},
{"id":8,"lectures":"Legal","assignments":"Health","ip_address":"24.64.246.158"},
{"id":9,"lectures":"Legal","assignments":"Jewelry","ip_address":"66.76.218.158"},
{"id":10,"lectures":"Training","assignments":"Clothing","ip_address":"140.129.187.111"},
{"id":11,"lectures":"Support","assignments":"Beauty","ip_address":"65.147.59.191"},
{"id":12,"lectures":"Research and Development","assignments":"Beauty","ip_address":"213.30.221.67"},
{"id":13,"lectures":"Human Resources","assignments":"Shoes","ip_address":"228.189.16.201"},
{"id":14,"lectures":"Business Development","assignments":"Computers","ip_address":"120.207.100.91"},
{"id":15,"lectures":"Support","assignments":"Electronics","ip_address":"127.159.41.13"},
{"id":16,"lectures":"Engineering","assignments":"Garden","ip_address":"210.173.136.180"},
{"id":17,"lectures":"Human Resources","assignments":"Grocery","ip_address":"130.232.126.213"},
{"id":18,"lectures":"Product Management","assignments":"Jewelry","ip_address":"152.211.32.114"},
{"id":19,"lectures":"Services","assignments":"Tools","ip_address":"84.65.95.115"},
{"id":20,"lectures":"Legal","assignments":"Health","ip_address":"229.254.85.1"},
{"id":21,"lectures":"Marketing","assignments":"Movies","ip_address":"147.45.194.92"},
{"id":22,"lectures":"Training","assignments":"Sports","ip_address":"137.114.240.101"},
{"id":23,"lectures":"Legal","assignments":"Computers","ip_address":"126.48.147.136"},
{"id":24,"lectures":"Sales","assignments":"Jewelry","ip_address":"217.114.100.133"},
{"id":25,"lectures":"Marketing","assignments":"Music","ip_address":"233.133.110.84"},
{"id":26,"lectures":"Training","assignments":"Music","ip_address":"72.224.209.87"},
{"id":27,"lectures":"Accounting","assignments":"Home","ip_address":"129.152.114.202"},
{"id":28,"lectures":"Research and Development","assignments":"Games","ip_address":"219.3.169.1"},
{"id":29,"lectures":"Research and Development","assignments":"Baby","ip_address":"254.50.52.112"},
{"id":30,"lectures":"Engineering","assignments":"Tools","ip_address":"161.105.134.158"},
{"id":31,"lectures":"Sales","assignments":"Beauty","ip_address":"122.231.45.208"},
{"id":32,"lectures":"Human Resources","assignments":"Garden","ip_address":"36.107.241.244"},
{"id":33,"lectures":"Accounting","assignments":"Baby","ip_address":"166.216.72.18"},
{"id":34,"lectures":"Product Management","assignments":"Music","ip_address":"252.12.18.90"},
{"id":35,"lectures":"Training","assignments":"Clothing","ip_address":"171.150.168.39"},
{"id":36,"lectures":"Services","assignments":"Music","ip_address":"186.113.20.231"},
{"id":37,"lectures":"Research and Development","assignments":"Sports","ip_address":"35.85.206.127"},
{"id":38,"lectures":"Human Resources","assignments":"Industrial","ip_address":"141.146.118.73"},
{"id":39,"lectures":"Research and Development","assignments":"Outdoors","ip_address":"38.129.36.178"},
{"id":40,"lectures":"Training","assignments":"Outdoors","ip_address":"228.179.36.244"},
{"id":41,"lectures":"Engineering","assignments":"Music","ip_address":"155.105.111.5"},
{"id":42,"lectures":"Sales","assignments":"Games","ip_address":"179.6.223.246"},
{"id":43,"lectures":"Human Resources","assignments":"Games","ip_address":"13.132.75.59"},
{"id":44,"lectures":"Business Development","assignments":"Electronics","ip_address":"122.233.219.24"},
{"id":45,"lectures":"Human Resources","assignments":"Sports","ip_address":"138.6.103.81"},
{"id":46,"lectures":"Business Development","assignments":"Games","ip_address":"49.165.29.101"},
{"id":47,"lectures":"Business Development","assignments":"Shoes","ip_address":"79.91.61.137"},
{"id":48,"lectures":"Marketing","assignments":"Computers","ip_address":"138.174.190.52"},
{"id":49,"lectures":"Legal","assignments":"Industrial","ip_address":"25.80.18.169"},
{"id":50,"lectures":"Services","assignments":"Shoes","ip_address":"56.131.160.74"}
    ]
    return(
        <div>
            <Front/>
            <>
            {datas.map(function(data,ind){
                return(<div key={ind}>{data.assignments}</div>)
            })}
            </>
        </div>
    )
}
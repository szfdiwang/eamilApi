exports.emailTemp = (type, data) => {

    switch (type) {
        case 'subscribe':
            return `<div>
            来自<br/> 
            <span>${data.email}</span><br/>的订阅请求,
            <span>他希望订阅我们的信息</span>
        </div>`
        case 'contact':
            return `<div>
            来自<br/> 
            <span>${data.companyName} 的 ${data.name}</span><br/>
            <span>希望与我们获得联系</span>
            他的联系方式是: <span>${data.email}</span>
        </div>`
        default:
            return `<span>1111111111111</span>`
    }

}
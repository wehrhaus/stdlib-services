const _S4 = () => {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

module.exports = (params, callback) => {

    let guid = (_S4() + _S4() + '-' + _S4() + '-4' + _S4().substr(0,3) + '-' + _S4() + '-' + _S4() + _S4() + _S4()).toLowerCase();
    callback(null, guid);

};

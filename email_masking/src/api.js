
const maskEmail = (email = '') => {
    const [name, domain] = email.split('@');
    const { length: len } = name;
    const maskedName = name[0] + '*' + name[len - 1];
    return maskedName + '@' + domain;
};

const maskEmail2 = (email = '') =>{
    const [name, domain] = email.split('@');
    const { length: len } = name;
    const maskedName = name[0] + '*' + name[len];
    return maskedName + '@' + domain;
}

module.exports={
    maskEmail:maskEmail,
    maskEmail2:maskEmail2
}
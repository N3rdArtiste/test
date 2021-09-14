export const truncateNumber = (number:number,digits:number):number => {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = number.toString().match(re);
    return m ? parseFloat(m[1]) : number.valueOf();
};
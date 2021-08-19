module.exports={
    PASS:{
        isGoodPass:(value)=>{
            const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
            return regex.test(value);
        }
    },
    EMAIL:{
        isEmail:(value) => {
            const regex =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return regex.test(value);
        }
    }
}
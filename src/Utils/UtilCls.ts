export class UtilCls{
    static MyRoot(n){
        return Math.sqrt(n);
    }

    static MyPow(n){
        return Math.pow(n,2);
    }

    static MyCube(n){
        return Math.pow(n,3);
    }
    static calcRoadTax(n){
        return n*0.2;
    }
    static calcServiceTax(n){
        return n*0.18;
    }
    static calcCityCharge(n){
        return n*0.1;
    }
    static calcCarCost(n){
        return n+this.calcCityCharge(n)+this.calcServiceTax(n)+this.calcRoadTax(n)
    }

}

export default UtilCls;
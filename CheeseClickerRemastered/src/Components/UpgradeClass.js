class Upgrade{

    constructor(name,description,output,cost,multiplier,count,augments=[]){
        this.name=name
        this.description=description
        this.output=output
        this.cost=cost
        this.multiplier=multiplier
        this.count=count
        this.augments=augments
    }

}

export default Upgrade
class Amit{
    constructor(total){
        this.group={}
        this.totalExpense=total
        this.totalMember=0
    }

    convertToJson(data){
        return JSON.stringify(data)   
    }

    addMember(name){
      if(this.group[name]==undefined)
      {
        this.group[name]=0
        this.totalMember++
        console.log(this.convertToJson(this.group))
      }
      else{
          console.log(`${name} already exits in group`)
      }
    }

    addExpense(name,value){
       if(this.group[name]==undefined)
       {
           console.log("doesn't exist in group")
       }
       else{
           this.group[name]+=value
           console.log(this.convertToJson(this.group))
       }
    }

    showAllMember(){
        console.log(this.convertToJson(this.group))
    }
    splitExpenses(){
       let each=this.totalExpense/this.totalMember
       let arr=[]
       let pay=[]
       for(let key in this.group)
       {
          arr.push({name:key,remaining:(each-this.group[key])})
          pay.push(each-this.group[key])
       }
// console.log(arr,pay)
       for(let i=0;i<arr.length;i++)
       {
           let temp=pay[i]
           if(pay.indexOf(-temp)!==-1 )
           {
               let a=pay.indexOf(-temp)
               if(temp>0)
                console.log(`${arr[i].name} have to pay ${pay[i]} to ${arr[a].name}}`)
                else
                console.log(`${arr[a].name} have to pay ${-pay[i]} to ${arr[i].name}}`)
                arr.splice(a, 1);

                arr.splice(arr.indexOf(temp), 1);
                pay.splice(a, 1);
                pay.splice(pay.indexOf(temp), 1);
                i=-1
           }
          
       }
    //    console.log(arr,pay)
       if(arr.length>0)
       {
           
           for(let i=0;i<arr.length;i++)
           {
               if(arr[i].remaining<0)
               for(let j=0;j<arr.length;j++)
               {
                   if((arr[i].remaining+arr[j].remaining)<=0)
              {  console.log(`${arr[j].name} have to pay ${arr[j].remaining} to ${arr[i].name}`)
              arr[i].remaining+=arr[j].remaining
              arr.splice(j,1)
              
              i=0
               }
               }
           }
        //    console.log(arr,pay)
       }
    }

}
//pass total money required
let amit=new Amit(15)
amit.addMember("amit")
amit.addMember("rahul")
amit.addMember("pinki")
// amit.addMember("abhishek")
// amit.addMember("pavan")
// amit.addExpense("pinki",5)
amit.addExpense("pinki",3)
amit.addExpense("amit",2)
amit.addExpense("rahul",10)
// amit.addExpense("abhishek",7)
// amit.addExpense("pavan",3)
amit.showAllMember()
amit.splitExpenses()
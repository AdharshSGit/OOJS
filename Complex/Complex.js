
(function title(){
    document.getElementById('titl').innerHTML='Welcome to our GARAGE'
})(); //IIFE

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             var x=JSON.parse(this.responseText);
            
         console.log(x);
         console.log(x.mechpart1[0].part);
         console.log(x.garage[0]);
        localStorage.setItem("garage1",JSON.stringify(x.garage));
        localStorage.setItem("mech",JSON.stringify(x.mechpart1));
        localStorage.setItem("eee",JSON.stringify(x.electricalpart1));
        localStorage.setItem("lub",JSON.stringify(x.lubes1));
        localStorage.setItem("oth",JSON.stringify(x.other1));
        localStorage.setItem("call",JSON.stringify(x.dispcall));
        }

      };   
      xhttp.open("GET",'http://192.168.153.61:81/',true);
      xhttp.send();

function Garage(service,purchase)
{
    
    
    if(service==='Yes')
    {
        document.getElementById('q1').innerHTML='I need to service my vehicle';
        this.time = '10.00AM - 6.00PM';
        this.holiday = 'SATURDAY,SUNDAY';
        this.services='Service'; 
        
    }
   
    else if(purchase==='Yes')
    {
        document.getElementById('q1').innerHTML='I need to purchase accessories for my vehicle';
        this.time = '9.00AM - 7.00PM';
        this.holiday = 'SUNDAY';
        this.services='Purchase';
       
    }
    this.display = function(){
        
        document.getElementById('q2').innerHTML=`Working Time- ${this.time}`+'<br>' + `Holiday-${this.holiday}`;
    };
  
}


function Mechanical(part,cost,brand)
{   
    
    //this.part = part;
    //this.cost = cost;
    //this.brand = brand;
    this.display = function(){
        document.getElementById('q3').innerHTML=`Function: ${this.services}`+ '<br>' +
        `OE part:  ${part}` + '<br>' +` Brand: ${brand}`+ '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    };   
    this.print1 = function(model){
        document.getElementById('q7').innerHTML= `Vehicle Model: ${call1[0].name}-${model}` + '<br>' + 
        `Serviced Part: ${part}` + '<br>' + `Warranty period: ${call1[0].warranty} years`; 
    };
}

function Electrical(part,cost,brand)
{   
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    
    this.display = function(){
        document.getElementById('q4').innerHTML=`OE part : ${part} `+'<br>'+` Brand: ${brand}`+'<br>'+
                ` Cost: Rs${cost}.`+ '<hr>';
    }   
}
function Lubes(part,cost,brand)
{
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.display = function(){
        document.getElementById('q5').innerHTML=`OE part:  ${part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    }  
    this.print1= function(qty,type,name){
        document.getElementById('q8').innerHTML=`Vechicle Model: ${name}`+ '<br>' + `Lube type: ${part}-${type}`+ '<br>' +
        `Quantity: ${qty} litre`;
    };
}
function Other(part,cost,brand)
{
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.display = function(){
        document.getElementById('q6').innerHTML=`OE part:  ${this.part}` + '<br>' +` Brand: ${this.brand}`
        + '<br>' + `Costs Rs:${this.cost}.`+ '<hr>';
    }  
}
var head1 = JSON.parse(localStorage.getItem("garage1"));
console.log(head1[0]);

Mechanical.prototype= new Garage("Yes","No"); //prototype inheritance
Electrical.prototype= new Garage();
Lubes.prototype= new Garage();
Other.prototype= new Garage();

var vehicleservice = new Garage(head1[0].service,head1[0].purchase);
//var vehicleservice = new Garage("Yes","No");
console.log(vehicleservice);
vehicleservice.display();               //Polymorphism
//let vehiclepurchase = new Garage('No','Yes');
//vehiclepurchase.display();

var mech1 = JSON.parse(localStorage.getItem("mech"));
console.log(mech1[0]);
var mechpart1 = new Mechanical(mech1[0].part,mech1[0].cost,mech1[0].brand);
mechpart1.display();
console.log(mechpart1);

var eee1 = JSON.parse(localStorage.getItem("eee"));
console.log(eee1[0]);
var electricalpart1 = new Electrical(eee1[0].part,eee1[0].cost,eee1[0].brand);
electricalpart1.display();
console.log(electricalpart1);

var lub1 = JSON.parse(localStorage.getItem("lub"));
console.log(lub1[0]);
var lubes1 = new Lubes(lub1[0].part,lub1[0].cost,lub1[0].brand);
lubes1.display();

var oth1 = JSON.parse(localStorage.getItem("oth"));
console.log(oth1[0]);
var other1=new Other(oth1[0].part,oth1[0].cost,oth1[0].brand);
other1.display();


//Additional Details.
var call1 = JSON.parse(localStorage.getItem("call"));
console.log(call1[0]);    
function car_call(){
    //this.warranty= warranty;
    //this.name= name;
    mechpart1.print1.call(this,call1[0].model);
}

var dispcall= new car_call();   //Call

function car_apply(){
    lubes1.print1.apply(this,[1.5,'Dot-4','HONDA-Amaze - 2017']);
}
var dispapply = new car_apply();  //Apply

//Discount
const offer=(function(brand,part,MRP)//module
{
    var discount= 10;
    
    var finalamount=(function(){        //submodule
    return (MRP*((100-discount)/100));
    })();

    document.getElementById('offer').innerHTML=`Orginial price is ${MRP}`+ '<br>'+
            `The Final discounted price of ${part}(${brand}) is Rs:${finalamount}`;
})('BOSCH','Air-Filter',1200);

//New Product
function brakedisc()        //Encapsulation
{
    let brand = "Brakes-India";
    let size = 8;
    let price = 4000;
    return{
    dispdisc : function(){
        document.getElementById('brake').innerHTML=`The brake Disc of size ${size}inches of brand 
        ${brand} which cost Rs:${price}`;
    }};
}

//Alternate Brands
var disc = new brakedisc();
disc.dispdisc();

function brand(name){      //composite
    this.brand = name;
    
}
brand.prototype.show=function(){        //Prototype
    document.getElementById('show').innerHTML=`The available brands for Brakedisc are:`+ `${this.brand}`;
}

function addbrand(name1){
    this.brand = name1;
    this.brake_disc = [];
}
addbrand.prototype.show1 = function(brand){
    this.brake_disc.push(brand);
}
addbrand.prototype.show2 = function(index){
    document.getElementById('avail').innerHTML=`Available Brands:` + '<br>';
    document.getElementById('brand').innerHTML+= (this.brake_disc[index].brand)+ '<br>';

}
addbrand1= new addbrand('Suppliers list');

supplier1 = new brand('Valeo');
supplier2 = new brand('BOSCH');

addbrand1.show1(supplier1);
addbrand1.show1(supplier2);

//supplier1.show();
addbrand1.show2(0);
addbrand1.show2(1);

//Benefits
let additional = (function(){   //Design Pattern
    let offer = 'Water-wash';
    let totalprice = '1500';
    function benefits(){
        document.getElementById('benefits').innerHTML= `As the Service charge is above Rs:${totalprice} an additional 
        offer of ${offer} is provided.`
    }
    return{
        offer : benefits
    };
})();
additional.offer();

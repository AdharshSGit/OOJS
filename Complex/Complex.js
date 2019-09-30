
(function title(){
    document.getElementById('titl').innerHTML='Welcome to our GARAGE'
})(); //IIFE

function Garage(service,purchase)
{
    
    if(service==='Yes')
    {
        document.getElementById('q1').innerHTML='I need to service my vehicle';
        this.time = '10.00AM - 6.00PM';
        this.holiday = 'SATURDAY,SUNDAY';
        this.display = function(){
            
            document.getElementById('q2').innerHTML=`Working Time- ${this.time}`+ '<br>' + `Holiday-${this.holiday}`;
        };
    }
  
    else if(purchase==='Yes')
    {
        document.getElementById('q1').innerHTML='I need to purchase accessories for my vehicle';
        this.time = '9.00AM - 7.00PM';
        this.holiday = 'SUNDAY';
        this.display = function(){
            document.getElementById('q2').innerHTML=`Working Time- ${this.time}`+'<br>' + `Holiday-${this.holiday}`;
        };
    }
  
}


function Mechanical(part,cost,brand)
{   
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.display = function(){
        document.getElementById('q3').innerHTML=`OE part:  ${part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    };   
    this.print1 = function(model){
        document.getElementById('q7').innerHTML= `Vehicle Model: ${this.name}-${model}` + '<br>' + 
        `Serviced Part: ${part}` + '<br>' + `Warranty period: ${this.warranty} years`; 
    };
}

function Electrical(part,cost,brand,freq)
{   
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.freq = freq;
    this.display = function(){
        document.getElementById('q4').innerHTML=`OE part : ${part} `+'<br>'+` Brand: ${brand}`+'<br>'+
                `Frequency: ${freq}Hz `+'<br>'+` Cost: Rs${cost}.`+ '<hr>';
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
        document.getElementById('q6').innerHTML=`OE part:  ${this.part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    }  
}

Mechanical.prototype= new Garage(); //prototype inheritance
Electrical.prototype= new Garage();
Lubes.prototype= new Garage();
Other.prototype= new Garage();

var vehicleservice = new Garage("Yes","No");
console.log(vehicleservice);
vehicleservice.display();               //Polymorphism
//let vehiclepurchase = new Garage('No','Yes');
//vehiclepurchase.display();

var mechpart1 = new Mechanical('Spark Plug',850,'SKF');
mechpart1.display();
console.log(mechpart1);


var electricalpart1 = new Electrical('Horn',550,'Roots',10);
electricalpart1.display();
console.log(electricalpart1);

var lubes1 = new Lubes('Engine Oil',1200,'Castrol');
lubes1.display();


var other1=new Other('bumper',3000,'OEM')
other1.display();


//Additional Details
function car_call(){
    this.warranty= 2;
    this.name= 'HONDA-City';
    mechpart1.print1.call(this,2018);
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

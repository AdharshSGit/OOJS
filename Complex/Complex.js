
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
var vehicleservice = new Garage("Yes","No");
console.log(vehicleservice);
vehicleservice.display();
//let vehiclepurchase = new Garage('No','Yes');

function mechanical(part,cost,brand)
{   
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.print = function(){
        document.getElementById('q3').innerHTML=`OE part:  ${part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    };   
    this.print1 = function(model){
        document.getElementById('q7').innerHTML= `Vehicle Model: ${this.name}-${model}` + '<br>' + 
        `Serviced Part: ${part}` + '<br>' + `Warranty period: ${this.warranty} years`; 
    };
}


function electrical(part,cost,brand,freq)
{   
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.freq = freq;
    this.print = function(){
        document.getElementById('q4').innerHTML=`OE part : ${part} `+'<br>'+` Brand: ${brand}`+'<br>'+
                `Frequency: ${freq}Hz `+'<br>'+` Cost: Rs${cost}.`+ '<hr>';
    }   
}
function lubes(part,cost,brand)
{
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.print = function(){
        document.getElementById('q5').innerHTML=`OE part:  ${part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    }  
    this.print1= function(qty,type,name){
        document.getElementById('q8').innerHTML=`Vechicle Model: ${name}`+ '<br>' + `Lube type: ${part}-${type}`+ '<br>' +
        `Quantity: ${qty}`;
    };
}
function other(part,cost,brand)
{
    this.part = part;
    this.cost = cost;
    this.brand = brand;
    this.print = function(){
        document.getElementById('q6').innerHTML=`OE part:  ${part}` + '<br>' +` Brand: ${brand}`
        + '<br>' + `Costs Rs:${cost}.`+ '<hr>';
    }  
}
mechanical.prototype= new Garage();
electrical.prototype= new Garage();
lubes.prototype= new Garage();
other.prototype= new Garage();

var mechpart1 = new mechanical('Spark Plug',850,'SKF');
mechpart1.print();
console.log(mechpart1);

var electricalpart1 = new electrical('Horn',550,'Roots',10);
electricalpart1.print();
console.log(electricalpart1);

var lubes1 = new lubes('Engine Oil',1200,'Castrol');
lubes1.print();

var other1=new other('bumper',3000,'OEM')
other1.print();

function car_call(){
    this.warranty= 2;
    this.name= 'HONDA-City';
    mechpart1.print1.call(this,2018);
}
var dispcall= new car_call();

function car_apply(){
    lubes1.print1.apply(this,[1.5,'Dot-4','HONDA-Amaze - 2017']);
}
var dispapply = new car_apply();

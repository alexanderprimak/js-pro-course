function Car (name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption) {

    this.name  = name;
    this.model = model;
    this.year  = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;

}


Car.prototype.getFullName = function() {

    return `${this.name} ${this.model}`
};

Car.prototype.getAge = function () {

    return `Возраст вашего авто ${2021 - this.year} лет`
};

Car.prototype.changeColor = function (newColor) {

    if (this.color === newColor) {

        console.log(`Цвет вашего авто уже ${this.color}`)

    }else {

        var answer = confirm(`Хотите изменить цвет вашей машины на ${newColor} ?`);

        if(answer) {

            this.color = newColor;

            console.log (`Цвет вашего авто изменен на ${newColor}`);

        }
       
    }
}

Car.prototype.calculateWay = function(kilometers , fuel) {

    if(fuel < this.fuelConsumption) {

        console.log("Критическая норма топлива!!")
    }

    var fuelForWay = kilometers / this.fuelConsumption;

    if(fuelForWay >= fuel ) {
 
         console.log (`Во время поездки  на ${this.name}, вам еще необходимо будет заправить  ${fuelForWay - fuel} литров  топлива  `);
    }

    var averageTravelSpeed = (kilometers / this.maxSpeed) * 60;

   if (averageTravelSpeed >= 60 ) {

    var res = (averageTravelSpeed / 60  | 0)  +  "ч" + " " + averageTravelSpeed % 60  +  "минут"  ;

         console.log (`Среднее время поездки ${res}` );

   } else {

         console.log(` Среднее время в поездки ${averageTravelSpeed} минут`);

   }

}

var myCar = new Car ("Mersedes" , "M-200" , 2010 , "blue" , 200 ,60 , 10 );

console.log(myCar.getFullName());

console.log(myCar.getAge())

myCar.calculateWay(500, 6  );



console.log(`End ${myCar.name}`)

console.log("")




function HisCar (name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption ,exclusiveBMWRoof , exclusiveBMWAutopilot) {

    this.exclusiveBMWRoof = exclusiveBMWRoof;

    this.exclusiveBMWAutopilot = exclusiveBMWAutopilot;

    Car.call(this , name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption )

}


HisCar.prototype = Object.create(Car.prototype);

HisCar.prototype.constructor = HisCar;


HisCar.prototype.activatingAutopilot = function (kilometers) {

    if (kilometers > 200)  {

        var answer = confirm(`Путь не близкий , хотите активировать режим ${this.exclusiveBMWAutopilot}`);

            if(answer) {

                alert (`Режим ${this.exclusiveBMWAutopilot} успешно активирован , приятной поездки`);
            }

    }

}


HisCar.prototype.getFullName = function() {

    return `Вау да это же ${this.name} ${this.model}  у которой в комплекте идет ${this.exclusiveBMWRoof} `

}

    var AlexCar = new HisCar ("BMW" , "X=300" , 2014 , "white" , 250 , 60 , 10 , "панорамная крыша" , "'Автопилот'" );


console.log(AlexCar.getFullName());

console.log(AlexCar.getAge());

AlexCar.calculateWay(400 , 40);

AlexCar.activatingAutopilot(500);






function HerCar (name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption , exclusiveAudi , voiceAssistant ) {

    this.exclusiveAudi = exclusiveAudi;
    this.voiceAssistant = voiceAssistant;

    Car.call(this , name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption )

}

HerCar.prototype = Object.create(Car.prototype);

HerCar.prototype.constructor = HerCar;



HerCar.prototype.useVacuumСleaner = function () {

    var activation = confirm (`Вы хотите активировать функцию ${this.voiceAssistant} для управления салоном вашего авто`);

        if(activation) {

            alert(`${this.voiceAssistant} успешно активирована`)
        }

    var  clear = confirm(`Ваш голосовой помошник сообщает вам о привышении нормы пыли в салоне , и рекомендует включить функцию ${this.exclusiveAudi} , включить?`) ;

        if (clear) {

            alert (`Фукция ${this.exclusiveAudi} успешно активирована , салон очищен`)

            
        }

}

var SvetaCar = new HerCar ("Audi" ,"Q-7" , 2015 , "blue" , 240 , 60  , 10 , "вакуумный пылесос" , "голосовой помошник");

console.log("");

console.log(SvetaCar.getFullName());
console.log(SvetaCar.getAge());
SvetaCar.calculateWay(700 , 60);






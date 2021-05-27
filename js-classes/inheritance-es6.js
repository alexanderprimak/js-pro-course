
class Car {

    constructor (name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption) {

        this.name  = name;
        this.model = model;
        this.year  = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    
    }

    
        getFullName = function() {

             return `${this.name} ${this.model}`
        };

        getAge = function () {

             return `Возраст вашего авто ${2021 - this.year} лет`
        };

        changeColor = function (newColor) {

            if (this.color === newColor) {
        
                console.log(`Цвет вашего авто уже ${this.color}`)
        
            }else {
        
                let answer = confirm(`Хотите изменить цвет вашей машины на ${newColor} ?`);
        
                if(answer) {
        
                    this.color = newColor;
        
                    console.log (`Цвет вашего авто изменен на ${newColor}`);
        
                }
               
            }
        }


        calculateWay = function(kilometers , fuel) {

            if(fuel < this.fuelConsumption) {
        
                console.log("Критическая норма топлива!!")
            }
        
            let fuelForWay = kilometers / this.fuelConsumption;
        
            if(fuelForWay >= fuel ) {
         
                 console.log (`Во время поездки  на ${this.name}, вам еще необходимо будет заправить  ${fuelForWay - fuel} литров  топлива  `);
            }
        
            let averageTravelSpeed = (kilometers / this.maxSpeed) * 60;
        
           if (averageTravelSpeed >= 60 ) {
        
            let res = (averageTravelSpeed / 60  | 0)  +  "ч" + " " + averageTravelSpeed % 60  +  "минут"  ;
        
                 console.log (`Среднее время поездки ${res}` );
        
           } else {
        
                 console.log(` Среднее время в поездки ${averageTravelSpeed} минут`);
        
           }
        
        }
        

}



const myCar = new Car ("Mersedes" , "M-200" , 2010 , "blue" , 200 ,60 , 10 );

console.log(myCar.getFullName());
console.log(myCar.getAge());

myCar.calculateWay(500 , 23);

console.log("")



class HisCar extends Car {

    constructor(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption ,exclusiveBMWRoof , exclusiveBMWAutopilot) {

        super(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);

            
        this.exclusiveBMWRoof = exclusiveBMWRoof;
        this.exclusiveBMWAutopilot = exclusiveBMWAutopilot;
    }


    activatingAutopilot = function (kilometers) {

        if (kilometers > 200)  {
    
            let answer = confirm(`Путь не близкий , хотите активировать режим ${this.exclusiveBMWAutopilot}`);
    
                if(answer) {
    
                    console.log (`Режим ${this.exclusiveBMWAutopilot} успешно активирован , приятной поездки`);
                }
        }
    
    }


}

const AlexCar  = new HisCar ("BMW" , "X=300" , 2014 , "white" , 250 , 60 , 10 , "панорамная крыша" , "'Автопилот'");

console.log(AlexCar.getFullName());

console.log(AlexCar.getAge());

AlexCar.calculateWay(400 , 20);

AlexCar.activatingAutopilot(400);

console.log("");



class HerCar extends Car {

    constructor(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption, exclusiveAudi , voiceAssistant) {

        super(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);

        this.exclusiveAudi = exclusiveAudi;
        this.voiceAssistant = voiceAssistant;
    }


    useVacuumСleaner = function () {

        var activation = confirm (`Вы хотите активировать функцию ${this.voiceAssistant} для управления салоном вашего авто`);
    
            if(activation) {
    
                alert(`${this.voiceAssistant} успешно активирована`)
            }
    
        var  clear = confirm(`Ваш голосовой помошник сообщает вам о привышении нормы пыли в салоне , и рекомендует включить функцию ${this.exclusiveAudi} , включить?`) ;
    
            if (clear) {
    
                alert (`Фукция ${this.exclusiveAudi} успешно активирована , салон очищен`)
    
                
            }
    
    }


}

const SvetlanaCar  = new HerCar ("Audi" ,"Q-7" , 2015 , "blue" , 240 , 60  , 10 , "вакуумный пылесос" , "голосовой помошник");

console.log(SvetlanaCar.getFullName());

console.log(SvetlanaCar.getAge());

SvetlanaCar.calculateWay(520 , 36);

SvetlanaCar.useVacuumСleaner();












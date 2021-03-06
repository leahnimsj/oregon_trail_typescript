(function(){
    

        /*
        * Interfaces
        */
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;
    
            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
        /*
        * Classes
        */
    
        //The traveler class that implements the ITraveler interface
        //This is currently in violation of its contract with the interface. 
        //Create the code required to satisfy the contract with the interface
        class Traveler implements ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;

            constructor(name: string, food: number, isHealthy: boolean=true){
                this.name = name;
                this.food = food;
                this.isHealthy= isHealthy;

            }

            // note - best practice to only do one return - don't do a return in your if statement and an else if youd don't have to. 

            hunt(): number {
                if (Math.random()>.5) {
                    this.food += 100;
                }
                    return this.food;
            }

            eat(): boolean {
                if (this.food < 20 ) {
                    this.isHealthy = false;
                } else {
                    this.food -= 20;
                }
                return this.isHealthy;

            }

    
        }

                
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {

            capacity: number;
            passengerArray: Traveler[];

            constructor(capacity: number, passengerArray: Traveler[]=[]){
                this.capacity = capacity;
                this.passengerArray = passengerArray;

            }

            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string{
                if (this.passengerArray.length < this.capacity){
                    this.passengerArray.push(traveler);
                    return "added";
                } 
                return "sorry";
               
            }

            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean {
                for (var i = 0; i < this.passengerArray.length; i++) {
                    if (this.passengerArray[i].isHealthy === false){
                        return true;
                    }
                  }
                return false;

            }

             //Return the total amount of food among all passengers of the wagon.
             getFood(): number {
                let foodSum = 0;
                for (var i = 0; i < this.passengerArray.length; i++) {
                    foodSum += this.passengerArray[i].food;   
                }
                return foodSum;

             }

    
        }


    
        
    
        // /*
        // * Play the game
        // *
        // * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
        // *
        // * Create wagon with an empty passenger list and a capacity of 4.
        // *
        // * Make 3 of 5 the travelers eat by calling their eat methods
        // *
        // * Make the remaining 2 travelers hunt
        // *
        // * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
        // * of attempting to be being added to the wagon using the wagons addPassenger method.
        // *
        // * Run the isQuarantined method for the wagon
        // *
        // * Run the getFood method for the wagon
        // *
        // * the return values of all the methods should be displayed in the console using console.log()
        // * the console.log statements should not live inside any methods on the objects 
        // *
        // */



        // OREGON TRAIL GAME BELOW

        // general function to get random number 
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
                //The maximum is inclusive and the minimum is inclusive
            }

        let Traveler1 = new Traveler("Leah", getRandomIntInclusive(0, 100));
        let Traveler2 = new Traveler("Adam", getRandomIntInclusive(0, 100));
        let Traveler3 = new Traveler("Carrie", getRandomIntInclusive(0, 100));
        let Traveler4 = new Traveler("Ditman", getRandomIntInclusive(0, 100));
        let Traveler5 = new Traveler("Adrienne", getRandomIntInclusive(0, 100));
        
        let Wagon1 = new Wagon(4);
        
        console.log("Is " + Traveler1.name + " healthy? " + Traveler1.eat());
        console.log("Is " + Traveler2.name + " healthy? " + Traveler2.eat());
        console.log("Is " + Traveler3.name + " healthy? " + Traveler3.eat());
        console.log(Traveler4.name + " hunted! New food amount: " + Traveler4.hunt());
        console.log(Traveler5.name + " hunted! New food amount: " + Traveler5.hunt());
        
        
        
        let passengerArray1 = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5];

        passengerArray1.forEach(passenger => {
            if(Math.random()> .5) {
               console.log("Did the passenger get added to the wagon? " + Wagon1.addPassenger(passenger));
            } 
            
        });
        
        
        console.log(Wagon1);
        

        console.log("Was the wagon quarantined? " + Wagon1.isQuarantined());

        console.log("Total food for the wagon: " + Wagon1.getFood());

       
        


    
    })();
    
    
import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  // ** Unused. Could implement and just test one planet to cover all lines. **
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new AgeCalc(71, true, "north-america", "mercury");
  });
  // **

  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50, true);
      expect(newCalc.age).toEqual(50);
      expect(newCalc.healthy).toEqual(true);
    });

  test('Should calculate the life expectancy (in this case, antarctica, outlived exp by 15 years', () => {
      let newAntarctica = new AgeCalc(50, true, "antarctica");
      expect(newAntarctica.lifeExpect()).toEqual(15);
    });

  test('Should calculate the life expectancy (in this case, antarctica, outlived exp by 15 years', () => {
      let newAmerica = new AgeCalc(30, true, "north-america");
      expect(newAmerica.lifeExpect()).toEqual(40);
    });
    
    test('Should calculate age expectancy of healhty individual', () => {
      const newCalc = new AgeCalc(71, true);
      expect(newCalc.lifeExpect()).toEqual(1);
    });

    test('Should calculate age expectancy of unhealthy individual', () => {
      const newCalc = new AgeCalc(71, false);
      expect(newCalc.lifeExpect()).toEqual(.85);
    });
    
    test('Should calculate the years over the age expectancy someone has lived w/ abs()', () => {
      const newCalc = new AgeCalc(100, true, "", "mercury");
      expect(newCalc.expectancyPlanet()).toEqual(116.7);
      expect(newCalc.lifeOnPlanet()).toEqual(416.7);
    });
    
    test('Should calculate age and years left on Mercury for unhealthy person', () => {
      const newCalc = new AgeCalc(71, false, "", "mercury");
      expect(newCalc.expectancyPlanet()).toEqual(3.5);
      expect(newCalc.lifeOnPlanet()).toEqual(295.8);
    });
    
    // *********************
    // General Planet Tester
    // *********************  
    test('Should calculate age and years left on Mercury', () => {
        expect(reusableCalc.expectancyPlanet()).toBe(4.2);
        expect(reusableCalc.lifeOnPlanet()).toEqual(295.8);
    });


    // |||  OLD  ||| //
    // ||| TESTS ||| //



    // // *************
    // // Mercury Tests
    // // *************  
    // test('Should calculate age and years left on Mercury', () => {
    //     const newCalc = new AgeCalc(71, true, "", "mercury");
    //     expect(newCalc.expectancyPlanet()).toEqual(4.2);
    //     expect(newCalc.lifeOnPlanet()).toEqual(295.8);
    // });
    
    // // *************
    // // Venus Tests
    // // *************
    // test('Should calculate age and years left on Venus', () => {
    //   const newCalc = new AgeCalc(71, true, "", "venus");
    //   expect(newCalc.expectancyPlanet()).toEqual(1.6);
    //   expect(newCalc.lifeOnPlanet()).toEqual(114.5);
    // });

    // // *************
    // // Mars Tests
    // // *************
    // test('Should calculate age and years left on Mars', () => {
    //   const newCalc = new AgeCalc(71, true, "", "mars");
    //   expect(newCalc.expectancyPlanet()).toEqual(.5);
    //   expect(newCalc.lifeOnPlanet()).toEqual(37.8);
    // });

    // // *************
    // // Jupiter Tests
    // // *************
    // test('Should calculate age and years left on Jupiter', () => {
    //   const newCalc = new AgeCalc(71, true, "", "jupiter");
    //   expect(newCalc.expectancyPlanet()).toEqual(.1);
    //   expect(newCalc.lifeOnPlanet()).toEqual(6);
    // });
  });

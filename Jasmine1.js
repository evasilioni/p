

// We are going to create a Test Suite

describe("Suite for validation Search functionality", function(){

    // We call it specs(Test Cases)
    it("Verify Search with correct item code", function(){
        var a = 100;
        var b = 200;
        var c = a+b;
        expect(c).toBe(300);
        expect(c).not.toBe(310);
        // expect(actualValue).toBe(expectedValue);
    });

    it("Verify Search with iccorrect item code", function(){
        console.log("This is Spec 2");
    });
});
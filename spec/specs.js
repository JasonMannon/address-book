describe('Contact', function() {
  describe('fullName', function() {
    it('should put a first and last name together', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Pardon";
      testContact.fullName().should.equal('Dolly Pardon');
    });
  });
  describe('Address', function() {
    it('should combine street, city, state', function() {
      var testAddress = Object.create(Address);
      testAddress.street = '1234 sw woodstock ave';
      testAddress.city = 'Portland';
      testAddress.state = 'Oregon';
      testAddress.fullAddress().should.equal('1234 sw woodstock ave, Portland, Oregon');
    });
    it("should return true if all characters inputted in city are letters", function() {
      var testAddress = Object.create(Address);
      testAddress.city = "Portland";
      testAddress.validAddress().should.equal(true);
    }); 
    it("should return true if all characters inputted in state are letters", function() {
      var testAddress = Object.create(Address);
      testAddress.state = "OR";
      testAddress.validAddress().should.equal(true);
    }); 
  });
  describe("Phone", function() {
    it('Should show one or more phone numbers', function() {
      var testPhone = Object.create(Phone);
      testPhone.phoneType = "Cell";
      testPhone.areaCode = 503;
      testPhone.centralExchange = 658;
      testPhone.individualNumber = 4850;
      testPhone.fixedNumber().should.equal('Cell: (503)658-4850');
    });
    it("should return true when 3 numbers are entered into the area code", function() {
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "500";
      testPhone.validNumber().should.equal(true);
    });
    it("should return true when everything inputed in the central exchange a number", function() {
      var testPhone = Object.create(Phone);
      testPhone.centralExchange = "444";
      testPhone.validNumber().should.equal(true);
    });
    it('should return true when 4 letters are entered into the individual phone number.', function() {
      var testPhone = Object.create(Phone);
      testPhone.individualNumber = '4444';
      testPhone.validNumber().should.equal(true);
    });
  });
});


var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },
  validAddress: function() {
    var rE = /\d+/;

    var result = rE.test(this.city || this.state);
    return !result; 
  } 
};

var Phone = {
  fixedNumber: function() {
    return this.phoneType + ": " + "(" + this.areaCode + ")" + this.centralExchange + "-" + this.individualNumber;
  },
  validNumber: function() {
     var rE = /\D+/;
  
    
    var result = rE.test(this.areaCode || this.centralExchange || this.individualNumber);
      return !result;
     
  } 
};
 
$(document).ready(function() {
  $('#add-number').click(function() {
    $('#new-phone-numbers').append("<div class='new-phone-number'>" +
                "<div class='form-group'>" +
                  "<span class='col-md-3'>" +
                  "<label for='new-phone'>Phone Number</label>" +
                "</span>" +
                    "<select class='phone-number-type'>" +
                      "<option value='Home'>Home</option>" +
                     "<option value='Work'>Work</option>" +
                      "<option value='Cell'>Cell</option>" +
                      "<option value='Other'>Other</option>" +
                    "</select>" +
                    "<span class='col-md-2'>" +
                  "<input type='text' maxlength='3' class='form-control new-area-code'>" +
                    "</span>" +
                     "<span class='col-md-2'>" +
                  "<input type='text' maxlength='3' class='form-control new-central-exchange'>" +
                    "</span>" +
                    "<span class='col-md-4'>" +
                  "<input type='text' maxlength='4' class='form-control new-individual-number'>" +
                    "</span>" +
                "</div>" +
              "</div>");
  });
});

$(document).ready(function() {

  $('#add-address').click(function() {
    $('#new-addresses').append('<div class="new-address">' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-state">State</label>' +
                                 '<input type="text" class="form-control new-state">' +
                               '</div>' +
                             '</div>');
  });
});

$(document).ready(function() {
  $('form#new-contact').submit(function(event){
    event.preventDefault();

    var inputtedFirst = $('input#new-first-name').val();
    var inputtedLast = $('input#new-last-name').val();
    

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirst;
    newContact.lastName = inputtedLast;
    newContact.phoneNumbers = [];
    newContact.addresses = [];

    $('.new-phone-number').each(function() {
      var inputtedAreaCode = $(this).find('input.new-area-code').val();
      var inputtedCentralExchange = $(this).find('input.new-central-exchange').val();
      var inputtedIndividualNumber = $(this).find('input.new-individual-number').val();
      var inputedPhoneType = $(this).find('select.phone-number-type').val();
      
      var newPhone = Object.create(Phone);
      newPhone.areaCode = inputtedAreaCode;
      newPhone.centralExchange = inputtedCentralExchange;
      newPhone.individualNumber = inputtedIndividualNumber;
      newPhone.phoneType = inputedPhoneType;
      newContact.phoneNumbers.push(newPhone);
    });

    $('.new-address').each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('input.new-state').val();
    
      
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      // if (newAddress.validAddress() === false) {
      //  return alert("bummer");
      // } else {
              
      // }
    });
      newContact.addresses.push(newAddress);

      $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

      $('.contact').last().click(function() {
        $('#show-contact').show();

        $('show-contact h2').text(newContact.fullName());
        $('.first-name').text(newContact.firstName);
        $('.last-name').text(newContact.lastName);

        $('ul#addresses').text('');
        newContact.addresses.forEach(function(address) {
          $('ul#addresses').append('<li>' + address.fullAddress() + '</li>');
        });

        $('ul#phone-numbers').text('');
        newContact.phoneNumbers.forEach(function(phoneNumbers) {
          $('ul#phone-numbers').append('<li>' + phoneNumbers.fixedNumber() + '</li>');
        });
      });
    this.reset();
  });
});

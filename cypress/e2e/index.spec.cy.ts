
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('should have the title "Calculator App"', () => {
    cy.get('title').should('have.text', 'Calculator App');
  });

  it('should display 2 when "1 + 1 = " is clicked', () => {
    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  });

  it('should display 11 when "5.5 * 2 = " is clicked', () => {
    // Assemble
    cy.get('.key-5').click();
    cy.get('.key-dot').click();
    cy.get('.key-5').click();
    cy.get('.key-multiply').click();
    cy.get('.key-2').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '11');
  });

  it('should display -10 when "2 - 4 * 2 - 4 = " is clicked', () => {
    // Assemble
    cy.get('.key-2').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();
    cy.get('.key-multiply').click();
    cy.get('.key-2').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '-10');
  });

  it('should display \'Infinity\' when "1 / 0 = " is clicked', () => {
    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-divide').click();
    cy.get('.key-0').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', 'Infinity');
  });

  it('should display 1 when "4 / 2 / 2 = " is clicked', () => {
    // Assemble
    cy.get('.key-4').click();
    cy.get('.key-divide').click();
    cy.get('.key-2').click();
    cy.get('.key-divide').click();
    cy.get('.key-2').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '1');
  });

  it('should display 14 when "10 + 2 * 8 / 4 = " is clicked', () => {
    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-0').click();
    cy.get('.key-add').click();
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-8').click();
    cy.get('.key-divide').click();
    cy.get('.key-4').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '14');
  });

  it('should display 0.3333333333333333 when "1 / 3 = " is clicked', () => {
    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-divide').click();
    cy.get('.key-3').click();
    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '0.3333333333333333');
  });

  it('should display 0 when "0 * 10 = " is clicked', () => {
    // Assemble
    cy.get('.key-0').click();
    cy.get('.key-multiply').click();
    cy.get('.key-1').click();
    cy.get('.key-0').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '0');
  });

  it('should display 246913578 when "123456789+123456789 =" is clicked', () => {
    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-2').click();
    cy.get('.key-3').click();
    cy.get('.key-4').click();
    cy.get('.key-5').click();
    cy.get('.key-6').click();
    cy.get('.key-7').click();
    cy.get('.key-8').click();
    cy.get('.key-9').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();
    cy.get('.key-2').click();
    cy.get('.key-3').click();
    cy.get('.key-4').click();
    cy.get('.key-5').click();
    cy.get('.key-6').click();
    cy.get('.key-7').click();
    cy.get('.key-8').click();
    cy.get('.key-9').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '246913578');
  });

});

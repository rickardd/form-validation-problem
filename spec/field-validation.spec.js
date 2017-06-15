import { Validation } from '../src/field-validation.js'

describe( "form", () => {

  const validation = new Validation
  // const validation = new Val()
  it('email should be valid', () => {
    expect( validation.isValidEmail("user@email.co.nz") ).toBe( true )
  })

  it('email peter@hello should not be valid', () => {
    expect( validation.isValidEmail("user@hello") ).toBe( false )
  })

  it('password should be long enough', () => {
    expect( validation.isValidPassword("123456789") ).toBe( true )
  })

  it('password should be to short', () => {
    expect( validation.isValidPassword("1234567") ).toBe( false )
  })

  it('colour blue should be true', () => {
    expect( validation.isValidColour("blue") ).toBe( true )
  })

  it('colour "" should be false', () => {
    expect( validation.isValidColour("") ).toBe( false )
  })

  it('tiger_type "big" should to be true', () => {
    expect( validation.isValidTigerType("big") ).toBe( true )
  })

  it('tiger_type "" should to be true', () => {
    expect( validation.isValidTigerType("") ).toBe( false )
  })


})
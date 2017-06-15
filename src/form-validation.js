import { Validation } from './field-validation'
import { addClass, removeClass } from './utils'

export class Form extends Validation{

  constructor() {
    super();
    // Stores the elements to save the querries to the DOM
    // And if the name/id attribute changes it only needs to be updated on one place.
    this.elements = this.getElements()
    this.bindEvents()
  }

  bindEvents(){
    document.querySelector("form").addEventListener( 'submit', e => this.onSubmit( e ) )
  }

  getElements(){
    return {
      email: document.querySelector("#email"),
      password: document.querySelector("#password"),
      colour: document.getElementsByName('colour')[0],
      animals: document.getElementsByName('animal'),
      tigerType: document.querySelector("#tiger_type")
    }
  }

  getElementValues(){
    const colourElm = this.elements.colour
    const animals = this.elements.animals
    let animalValues = []
    animals.forEach( x => { if(x.checked) animalValues.push( x.value ) })
    return {
      email: this.elements.email.value,
      password: this.elements.password.value,
      colour: colourElm.options[colourElm.options.selectedIndex].value,
      animals: animalValues,
      tigerType: this.elements.tigerType.value
    }
  }

  applyErrorClasses( invalidArray ){
    invalidArray.forEach( (obj) => {
      const parentNode = typeof obj.element.type === "undefined" ? obj.element[0].parentNode : obj.element.parentNode
      addClass( parentNode, "error" )
    })
  }

  clearErrorClasses(){
    Object.entries( this.elements ).forEach( ( obj, index ) => {
      const parentNode = typeof obj[1].type === "undefined" ? obj[1][0].parentNode : obj[1].parentNode
      removeClass( parentNode, "error" )
    })
  }

  // returns an array with all invalid fields
  // e.g [ { field: email, element: DOM-element }]
  getInvalid(){
    const values = this.getElementValues()
    const isTigerChecked = values.animals.indexOf("tiger") > -1
    let array = []

    if( !this.isValidEmail( values.email ) )
      array.push( { field: "email", element: this.elements.email } )
    if( !this.isValidPassword( values.password ) )
      array.push( { field: "password", element: this.elements.password } )
    if( !this.isValidColour( values.colour ) )
      array.push( { field: "colour", element: this.elements.colour } )
    if( !this.isValidAnimals( values.animals ) )
      array.push( { field: "animals", element: this.elements.animals } )
    if( isTigerChecked && !this.isValidTigerType( values.tigerType ) )
      array.push( { field: "tigerType", element: this.elements.tigerType } )

    return array
  }

  onSubmit(e){
    e.preventDefault()
    this.clearErrorClasses()
    const invalidArray = this.getInvalid()
    if( invalidArray.length <= 0 ){
      alert("Yay! Form is valid and submitted.")
    }
    else{
      this.applyErrorClasses( invalidArray )
    }
  }

}




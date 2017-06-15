export class Validation{

  isValidEmail( email ){ // string
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return regex.test( email )
  }

  isValidPassword( password ){ // string
    return password.length > 8
  }

  isValidColour( colour ){ // string
    return typeof colour === 'string' && colour != ""
  }

  isValidAnimals( animals ){ // string[]
    return animals.length >= 2
  }

  isValidTigerType( tiger ){
    return typeof tiger === "string" && tiger != ""
  }
}


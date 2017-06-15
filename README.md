## My approach

For the simplicity I've used vanilla javascript and jasmine to unitest my validations.

### Documentation

  A documentation that's not up-to-date can be bad. Two tools I've used to make sure everything is documented and is up-to-date is KKS for css and jsDoc for javascript. They parse the code and creates a a styleguide based on your comments.

  Forms/form-fields are often used on a few different places in our apps. I would make sure html and css is well documented so everyone in the team know's what and how to impliment.

  Then I would create a set-up-guid for the javascript.


### Accessibility

  Parts that could be inproved with this form

  ***fieldset***
  If a group of checkboxes is wrapped in a fieldset with a legend, the legend will be read with each checkbox for some screen readers e.g Jaws or NVDA. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form). But doesn't work with apples build in tool "voice over"

  ***autofucus***
  Autofocus on first form-field to save the user on click.

  ***inpute-types***
  Setting right inpute-type ``<input type="">``  will pick the right keyboard for mobile-devices. e.g email, number, date.

  ***input-pattern***
  ``<input type="email" pattern="[\w+@\w+.(com|co.nz)]">``
  This patten can be read and used in javascript.

  ***required***
  Set required on all required fields.
  Javascript can read and append require-validation

  ***datalist***
  Maybe a datalist could be to considered for the example of tiger. The input-field would be in with the same component as the options-list. It would need the multiple property.

  ***Styling***
  Since these HTML5 properties has native behaviour which may not be desired style. They has to be overwritten with css.

  ***To not mention UI***
  The user could get instant feedback rather than wait for error untill hitting submit. Email and password could be green or get a tick as soon as they are correct. The typeTiger could be hidden or disabled if the tiger checkbox is not ticked. The user at this stage doesn't know which fields are required or not. Also error messages, why is a field not valid? e.g password-field could say "minimun 8 charactes and 2 capital letters".

### Progressive enhancement

  Depending on requirements it's probably parts that needs to be refacored. Maybe passing in the elements to the form class and make it more generic.

  Some parts can probably do with some refactoring so they are easier to test.

### Browser support

  This example is quite simple so I could saftly use vanilla javascript. Depending on structure and requirements I would think like this.

  - jQuery is still great although I think it's starting to lose value with better browsers and new modern framewords.

  - ***Angular2:*** Comes with many tools such as http, observables, webpack, typscript, babel and so on. Also it's using databinding instead of DOM-manipulation. This makes it quite safe to write modern vanilla js without jQuery.




### Testing

  I've used jasmin for unit test the validation rules. If I had time I would test error-classes and submition as well.

### Tooling

  I used webpack, babel and jasmin.

  More tools that could be helpful is frameworks/libraries such as react, angular2. Preprosessor for css. A validation library. jsHint, mocha, karma, kss, jsDoc and so on...

  Angular2: Has a component structure that isolatets css. I actually less and less feel I need a pre compressor since the css get's more simple and small for each component. Also livereload in the browser can inject the style change rather than refreshing the page. This makes the development faster.



# [Form validation problem](https://springload.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.

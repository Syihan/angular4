import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{text | summary:10}}
  `
})
export class CoursesComponent {
  text = `
    asdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjf'
  `;
}
